import Project from './Project';
import './ProjectContainer.css';

function ProjectContainer({ projects }) {
    return (
        <div className="projectContainer">
            {projects.map((project) => (
                <Project 
                    key={project.id}
                    title={project.title}
                    imagePath={project.imagePath}
                    description={project.description}
                />
            ))}
        </div>
    )
}

export default ProjectContainer