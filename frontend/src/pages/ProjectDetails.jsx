import Navbar from "../components/Navbar";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  // Dummy data (later from backend)
  const project = {
    name: "Smart Home Automation",
    description:
      "Control your home appliances using Arduino and sensors.",
    difficulty: "Medium",
    components: ["Arduino", "Relay Module", "Sensors", "Jumper Wires"],
    steps: [
      "Connect Arduino with relay module",
      "Attach sensors to detect input",
      "Write code to control appliances",
      "Test the system",
    ],
  };

  return (
    <div>
      <Navbar />

      <div className="details-container">
        <h1>{project.name}</h1>

        <p className="desc">{project.description}</p>

        <span className="difficulty">{project.difficulty}</span>

        {/* Components */}
        <div className="section">
          <h2>Required Components</h2>
          <ul>
            {project.components.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="section">
          <h2>Step-by-Step Guide</h2>
          <ol>
            {project.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Button */}
        <button className="save-btn">Save Project ❤️</button>
      </div>
    </div>
  );
};

export default ProjectDetails;