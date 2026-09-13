import { useState } from "react";

const API_URL = "http://localhost:8000";

function Register({ onLogin, onHome }) {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!form.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!form.mobile.trim()) {
      setMessage("Please enter your mobile number.");
      return;
    }

    if (!form.password) {
      setMessage("Please create a password.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.detail || "Registration failed. Please try again.");
        return;
      }

      setMessage(
        "Account created successfully! You can now log in."
      );

      setForm({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });
    } catch (error) {
      setMessage(
        "We couldn't connect to CivicPulse. Check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-brand">
          <span className="login-logo">C</span>
          <span>CivicPulse</span>
        </div>

        <h1>Create your account</h1>

        <p className="login-subtitle">
          Join CivicPulse and help improve your community.
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Full name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
          />

          <label htmlFor="email">Email address</label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
          />

          <label htmlFor="mobile">Mobile number</label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            autoComplete="tel"
          />

          <label htmlFor="password">Password</label>

          <div className="password-wrapper">

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              autoComplete="new-password"
            />

            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          {message && (
            <div
              className="login-message-box"
              role="alert"
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

        </form>

        <button
          type="button"
          className="department-login"
          onClick={onLogin}
        >
          Already have an account? Log in
        </button>

        <button
          type="button"
          className="back-home-btn"
          onClick={onHome}
        >
          ← Back to home
        </button>

        <p className="privacy-text">
          Your personal information will be protected by CivicPulse.
        </p>

      </div>
    </div>
  );
}

export default Register;
