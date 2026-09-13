from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from database import Base, engine, get_db
from models import User
from schemas import UserCreate, UserResponse


app = FastAPI(title="CivicPulse API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)


pwd_context = CryptContext(
    schemes=["pbkdf2_sha256"],
    deprecated="auto"
)


@app.get("/")
def home():
    return {"message": "CivicPulse Backend is Running 🚨"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/register", response_model=UserResponse)
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    existing_email = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="An account with this email already exists."
        )

    existing_mobile = db.query(User).filter(
        User.mobile == user.mobile
    ).first()

    if existing_mobile:
        raise HTTPException(
            status_code=400,
            detail="An account with this mobile number already exists."
        )

    hashed_password = pwd_context.hash(user.password)

    new_user = User(
        name=user.name,
        email=user.email,
        mobile=user.mobile,
        password_hash=hashed_password,
        role="citizen"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user
