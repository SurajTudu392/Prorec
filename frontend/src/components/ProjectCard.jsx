import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>

      <p className="desc">{project.description}</p>

      <div className="meta">
        <span className="difficulty">{project.difficulty}</span>
      </div>

      <div className="card-buttons">
        <button className="view-btn">View Details</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default ProjectCard;