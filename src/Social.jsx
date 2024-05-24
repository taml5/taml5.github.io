import "./Social.css"

function Social({ prop }) {
    return (
        <>
            <a className="social" href={prop.link} target="_blank">
                <img className="logo" src={prop.imagepath} />
                <p>{prop.text}</p>
            </a>
        </>
    );
}

export default Social