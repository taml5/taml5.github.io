import Social from './Social';
import './Description.css';

/** The component responsible for display the social media links and the blurb.
 * 
 * @param {ReactFragment} blurb The text written in HTML to be displayed as the blurb.
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
				<hr/>
				{blurb}
				<hr/>
			</div>
        </div>
    );
}

export default Description