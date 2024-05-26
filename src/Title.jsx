import "./Title.css";

/** The component responsible for displaying the headshot, name, and email address.
 */
function Title() {
    return (
        <>
        <div id="titleCard">
            <img id="headshot" src="./f3.jpg"/>
            <div id="titleText">
                <h1>Dexter Tam Long Hang</h1>
                <h2><code>dexter.tam [at] mail.utoronto.ca</code></h2>
            </div>
        </div>
        </>
    );
}

export default Title