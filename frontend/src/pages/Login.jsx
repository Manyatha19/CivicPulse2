import { useState } from "react";

function Login({ onRegister, onHome }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!identifier.trim()) {
      setMessage("Please enter your email or mobile number.");
      return;
    }

    if (!password) {
      setMessage("Please enter your password.");
      return;
    }

    setMessage("Login connection will be added next.");
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-left-content">
          <div className="login-logo-box">C</div>

          <h1>Welcome to CivicPulse</h1>

          <p>
            Report civic issues, track updates, and help improve your
            community.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-brand">
            <span className="login-logo">C</span>
            <span>CivicPulse</span>
          </div>

          <h2>Log in</h2>

          <p className="login-subtitle">
            Access your CivicPulse account
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="identifier">
              Email or mobile number
            </label>

            <input
              id="identifier"
              type="text"
              value={identifier}
              onChange={(e) => {
                setIdentifier(e.target.value);
                setMessage("");
              }}
              placeholder="Enter your email or mobile number"
              autoComplete="username"
            />

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setMessage("");
                }}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="button"
              className="forgot-password"
              onClick={() =>
                setMessage("Password reset will be added next.")
              }
            >
              Forgot password?
            </button>

            {message && (
              <div className="login-message-box" role="alert">
                {message}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
            >
              Log in
            </button>
          </form>

          <button
            type="button"
            className="create-account"
            onClick={onRegister}
          >
            Create an account
          </button>

          <button
            type="button"
            className="department-login"
            onClick={() =>
              setMessage("Admin and department login will be added next.")
            }
          >
            Admin or department login
          </button>

          <button
            type="button"
            className="back-home-btn"
            onClick={onHome}
          >
            ← Back to home
          </button>

          <p className="privacy-text">
            Your information is protected by CivicPulse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
