import { useState } from "react";

function ReportIssue({ onBack }) {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!category) {
      setMessage("Please select an issue category.");
      return;
    }

    if (!description.trim()) {
      setMessage("Please describe the issue.");
      return;
    }

    if (!severity) {
      setMessage("Please select the severity.");
      return;
    }

    setMessage("Report details captured successfully.");
  };

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

        <form
          className="report-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="category">
            Issue Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">
              Select an issue
            </option>
            <option value="pothole">Pothole</option>
            <option value="garbage">Garbage</option>
            <option value="streetlight">
              Broken Streetlight
            </option>
            <option value="water">Water Leak</option>
            <option value="drainage">
              Drainage Problem
            </option>
            <option value="road">Road Damage</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue..."
          />

          <label htmlFor="photo">
            Upload Photo
          </label>

          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />

          {photo && (
            <p>
              Selected photo: <strong>{photo.name}</strong>
            </p>
          )}

          <label htmlFor="severity">
            Severity
          </label>

          <select
            id="severity"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="">
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

          {message && (
            <div className="login-message-box">
              {message}
            </div>
          )}

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
