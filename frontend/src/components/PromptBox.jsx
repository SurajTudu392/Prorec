import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PromptBox.css";

const PromptBox = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login first!");
      navigate("/auth");
      return;
    }

    console.log(input);
  };

  return (
    <div className="prompt-container">
      <div className="prompt-box">
        <h3 style={{ marginBottom: "10px" }}>
          Enter Your Available Resources
        </h3>

        <input
          className="prompt-input"
          type="text"
          placeholder="e.g. Arduino, Sensors, Laptop..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="prompt-btn" onClick={handleSubmit}>
          Get Project Ideas 🚀
        </button>
      </div>
    </div>
  );
};

export default PromptBox;