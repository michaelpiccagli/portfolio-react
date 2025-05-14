function ProjectCard({ title, description, date, image, link }) {
  return (
    <div className="card-grid-space">
      <a
        className="card"
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`
        }}
      >
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="date">{date}</div>
          <div className="tags">
            <div className="tag">Visualizar Projeto</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
