import Navbar from "../components/Navbar";
import "./AIPage.css";

const AIPage = () => {
  return (
    <div>
      <Navbar />

      <div className="ai-container">
        <h1>AI Suggestions 🤖</h1>

        <div className="ai-card">
          <h2>Smart Irrigation System</h2>
          <p>
            Use sensors and Arduino to automate watering system
            based on soil moisture.
          </p>

          <button>Try Another Idea</button>
        </div>
      </div>
    </div>
  );
};

export default AIPage;