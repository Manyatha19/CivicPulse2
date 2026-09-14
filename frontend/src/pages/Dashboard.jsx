function Dashboard({ onHome,onReport }) {
  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <div className="dashboard-brand">
          <span className="dashboard-logo">C</span>
          <span>CivicPulse</span>
        </div>

        <button
          className="dashboard-home-btn"
          onClick={onHome}
        >
          Home
        </button>
      </nav>

      <main className="dashboard-content">
        <p className="dashboard-eyebrow">CIVICPULSE</p>

        <h1>Welcome to CivicPulse 👋</h1>

        <p className="dashboard-subtitle">
          Report civic issues and track their progress.
        </p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h2>📍 Report an Issue</h2>
            <p>
              Report potholes, garbage, water leaks, broken
              streetlights, and other civic problems.
            </p>

            <button
  className="primary-btn"
  onClick={onReport}
>
  Report Issue
</button>
          </div>

          <div className="dashboard-card">
            <h2>📊 Track My Reports</h2>
            <p>
              View your submitted complaints and check their
              current status.
            </p>

            <button className="secondary-btn">
              Track Reports
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
