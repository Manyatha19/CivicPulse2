import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [page, setPage] = useState("home");

  if (page === "login") {
    return (
      <Login
        onRegister={() => setPage("register")}
        onHome={() => setPage("home")}
        onLogin={()=> setPage("dashboard")}
      />
    );
  }

  if (page === "register") {
    return (
      <Register
        onLogin={() => setPage("login")}
        onHome={() => setPage("home")}
      />
    );
  }

  return (
    <>
      <Navbar onLogin={() => setPage("login")} />

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">CIVICPULSE</p>

            <h1>
              Report civic issues.
              <br />
              Track real action.
            </h1>

            <p className="hero-text">
              Help your city resolve potholes, garbage, broken streetlights,
              water leaks, and other public problems faster.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => setPage("login")}
              >
                Report an Issue
              </button>

              <button
                className="secondary-btn"
                onClick={() => setPage("login")}
              >
                Track My Report
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
