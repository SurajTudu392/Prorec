import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "./Dashboard.css";

const Dashboard = () => {
  const userName = "User";

  const savedProjects = [
    {
      name: "Smart Home Automation",
      description: "Control devices using Arduino",
      difficulty: "Medium",
    },
    {
      name: "Weather Monitoring System",
      description: "Track weather using sensors",
      difficulty: "Easy",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {userName} 👋</h1>
            <p>Manage your saved projects and explore more ideas</p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>{savedProjects.length}</h3>
              <p>Saved Projects</p>
            </div>
          </div>
        </div>

        {/* Saved Projects */}
        <div className="section">
          <h2>Saved Projects ❤️</h2>

          {savedProjects.length === 0 ? (
            <div className="empty-state">
              <p>No saved projects yet 😢</p>
            </div>
          ) : (
            <div className="projects-grid">
              {savedProjects.map((proj, index) => (
                <ProjectCard key={index} project={proj} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;