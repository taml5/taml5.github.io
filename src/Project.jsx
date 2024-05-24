import './Project.css';

/**
 * 
 * @param 
 */
function Project({ title, imagePath, description }) {
    return (
        <div className="projectCard">
            <img src={imagePath} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project