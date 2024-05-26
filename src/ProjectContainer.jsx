import Project from './Project.jsx';
import './ProjectContainer.css';

/** A component storing projects in a grid.
 * 
 * @param projects An array of Project objects.
 */
function ProjectContainer({ projects }) {
    return (
        <div className="projectContainer">
            {projects.map((project) => (
                <Project 
                    key={project.id}
                    title={project.title}
                    imagePath={project.imagePath}
                    description={project.description}
                    url={project.url}
                />
            ))}
        </div>
    )
}

export default ProjectContainer