function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">C</span>
        <span>CivicPulse</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#help">How it works</a>
        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
}

export default Navbar;
