import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "./Saved.css";

const Saved = () => {
  const saved = [];

  return (
    <div className="page-bg">
      <Navbar />

      <div className="saved-wrapper">
        <h1>Saved Projects</h1>

        {saved.length === 0 ? (
          <div className="empty-card">
            <h2>No Saved Projects 😔</h2>
            <p>Start saving projects to see them here</p>
          </div>
        ) : (
          <div className="projects-grid">
            {saved.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;