import Navbar from "../components/Navbar";
import PromptBox from "../components/PromptBox";
import "./Home.css";


const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <h1>Build Projects with What You Already Have 🚀</h1>
        <p>
          Discover DIY technology projects based on your available resources.
          No need to buy new components — just innovate with what you have!
        </p>
      </div>

      {/* Prompt Section */}
      <PromptBox />

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h2>🔍 Smart Recommendations</h2>
          <p>
            Get personalized project ideas based on your existing hardware and
            tools.
          </p>
        </div>

        <div className="feature-card">
          <h2>🤖 AI Assistance</h2>
          <p>
            If no project is found in database, AI suggests creative ideas for
            you.
          </p>
        </div>

        <div className="feature-card">
          <h2>📘 Step-by-Step Guides</h2>
          <p>
            Follow structured instructions to build your project easily without
            confusion.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <p>© 2026 ProRec | Built for Hackathon 🚀</p>
      </div>
    </div>
  );
};

const footerStyle = {
  marginTop: "40px",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#1e293b",
  color: "white",
};

export default Home;