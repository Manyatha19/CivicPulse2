import { useState } from "react";

function Login({ onRegister, onHome }) { {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.identifier.trim()) {
      setMessage("Please enter your email or mobile number.");
      return;
    }

    if (!form.password) {
      setMessage("Please enter your password.");
      return;
    }

    setMessage(
      "Login system will be connected to the CivicPulse backend soon."
    );
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <span className="login-logo">C</span>
          <span>CivicPulse</span>
        </div>

        <div className="login-message">
          <p className="eyebrow">CIVICPULSE</p>

          <h1>
            Report civic issues.
            <br />
            Track real action.
          </h1>

          <p>
            Help your city resolve potholes, garbage, broken streetlights,
            water leaks, and other public problems faster.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome back</h2>

          <p className="login-subtitle">
            Log in to report and track civic issues.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="identifier">
              Email or mobile number
            </label>

            <input
              id="identifier"
              name="identifier"
              type="text"
              value={form.identifier}
              onChange={handleChange}
              placeholder="Enter your email or mobile number"
              autoComplete="username"
            />

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="forgot-row">
              <button
                type="button"
                className="forgot-btn"
                onClick={() =>
                  setMessage("Password reset will be available soon.")
                }
              >
                Forgot password?
              </button>
            </div>

            {message && (
              <div className="login-message-box" role="alert">
                {message}
              </div>
            )}

            <button type="submit" className="login-submit">
              Log in
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button
  type="button"
  className="back-home-btn"
  onClick={onHome}
>
  ← Back to home
</button>

          <button
            className="department-login"
            onClick={() =>
              setMessage(
                "Admin and department login will be connected to role-based authentication."
              )
            }
          >
            Admin or department login
          </button>

          <p className="privacy-text">
            By continuing, you agree to use CivicPulse responsibly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
