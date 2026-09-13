import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">CIVICPULSE</p>

            <h1>Report civic issues.<br />Track real action.</h1>

            <p className="hero-text">
              Help your city resolve potholes, garbage, broken streetlights,
              water leaks, and other public problems faster.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Report an Issue
              </button>

              <button className="secondary-btn">
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
