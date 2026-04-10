import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "./Results.css";

const Results = () => {
  // Dummy data (replace with API later)
  const projects = [
    {
      name: "Smart Home Automation",
      description: "Control home devices using Arduino and sensors.",
      difficulty: "Medium",
    },
    {
      name: "Weather Monitoring System",
      description: "Track temperature and humidity using sensors.",
      difficulty: "Easy",
    },
    {
      name: "Personal Media Server",
      description: "Use old laptop as streaming server.",
      difficulty: "Hard",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="results-container">
        <h1>Recommended Projects 🚀</h1>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;