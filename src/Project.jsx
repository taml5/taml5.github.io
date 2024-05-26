import './Project.css';

/** A card component for a single project.
 * 
 * @param {string} title 
 * @param {string} imagePath 
 * @param {string} description 
 */
function Project({ title, imagePath, description, url }) {
    return (
        <div className="projectCard">
            <a href={url} target='_blank'><img src={imagePath}/></a>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project