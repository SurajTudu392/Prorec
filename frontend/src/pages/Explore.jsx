import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "./Explore.css";

const Explore = () => {
  const projects = [
    {
      name: "IoT Smart Light",
      description: "Control lights using mobile",
      difficulty: "Easy",
    },
    {
      name: "AI Chatbot",
      description: "Build chatbot using Python",
      difficulty: "Medium",
    },
  ];

  return (
    <div className="page-bg">
      <Navbar />

      <div className="explore-wrapper">
        <div className="explore-header">
          <h1>Explore Projects</h1>
          <p>Discover ideas based on technology and difficulty</p>
        </div>

        {/* Search + Filters */}
        <div className="search-section">
          <input
            className="search-input"
            placeholder="Search projects..."
          />

          <div className="filter-group">
            <button className="active">All</button>
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;