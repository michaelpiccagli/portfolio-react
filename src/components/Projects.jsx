import '../styles/project.css';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';


function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="no-select">Projetos</h2>
          </div>
        </div>

        <div className="cards-wrapper">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
