import './Project.css';

/** A card component for a single project.
 * 
 * @param {string} title 
 * @param {string} imagePath 
 * @param {string} description 
 */
function Project({ title, imagePath, description, url }) {
    return (
        <a className="projectCard" href={url} target='_blank'>
            <img src={imagePath} />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
}

export default Project