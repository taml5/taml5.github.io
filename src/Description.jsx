import Social from './Social.jsx';
import './Description.css';

/** The component responsible for display the social media links and the blurb.
 * 
 * @param blurb The text written in HTML to be displayed as the blurb.
 * @param socials An array of objects containing the information for the social media link.
 */
function Description({ blurb, socials }) {
    return (
        <div id="description">
            <div id="socials">
			{socials.map((social) =>
				<Social
					key={social.id}
					url={social.url}
					imagePath={social.imagePath}
					name={social.name}
				/>
			)}
		    </div>
			<div id="descriptionText">
				{blurb}
			</div>
        </div>
    );
}

export default Description