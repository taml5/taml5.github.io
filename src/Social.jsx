import "./Social.css"

/** A component to display the clickable logo and name of a social media link.
 * 
 * @param {string} url The url to the social media.
 * @param {string} imagePath The filepath to the logo.
 * @param {string} name The name of the social media.
 * @returns The Social component.
 */
function Social({ url, imagePath, name }) {
    return (
        <a className={"social " + name.toLowerCase()} href={url} target="_blank">
                <img className="logo" src={imagePath} />
                <p>{name}</p>
        </a>
    );
}

export default Social