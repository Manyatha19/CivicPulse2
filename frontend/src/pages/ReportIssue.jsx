function ReportIssue({ onBack }) {
  return (
    <div className="report-page">
      <div className="report-container">

        <button
          className="back-home-btn"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

        <p className="dashboard-eyebrow">CIVICPULSE</p>

        <h1>Report a Civic Issue</h1>

        <p className="dashboard-subtitle">
          Help us understand the problem so it can reach the right department.
        </p>

        <form className="report-form">

          <label htmlFor="category">
            Issue Category
          </label>

          <select id="category" defaultValue="">
            <option value="" disabled>
              Select an issue
            </option>
            <option value="pothole">Pothole</option>
            <option value="garbage">Garbage</option>
            <option value="streetlight">Broken Streetlight</option>
            <option value="water">Water Leak</option>
            <option value="drainage">Drainage Problem</option>
            <option value="road">Road Damage</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            rows="5"
            placeholder="Describe the issue..."
          />

          <label htmlFor="photo">
            Upload Photo
          </label>

          <input
            id="photo"
            type="file"
            accept="image/*"
          />

          <label htmlFor="severity">
            Severity
          </label>

          <select id="severity" defaultValue="">
            <option value="" disabled>
              Select severity
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>

          <div className="location-box">
            <h3>📍 Location</h3>
            <p>
              Location detection will be connected next.
            </p>

            <button
              type="button"
              className="secondary-btn"
            >
              Use My Location
            </button>
          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            Submit Report
          </button>

        </form>
      </div>
    </div>
  );
}

export default ReportIssue;
