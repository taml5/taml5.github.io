import './App.css'
import Title from './Title'
import Description from './Description'

let root = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "./dark/" : "./";
const socials = [
	{
		id: "github",
		url: "https://github.com/taml5",
		imagePath: root + "github.svg",
		name: "GitHub"
	},
	{
		id: "linkedin",
		url: "https://www.linkedin.com/in/dexter-tam/",
		imagePath: "./linkedin.png",
		name: "LinkedIn"
	},
]
const blurb = (
	<>
	<p>
		I'm a rising third year in the University of Toronto, specialising in Computer Science with a minor in Philosophy.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	</p>
	</>
);

function App() {
	return (
	<>
	<Title/>
	<Description
		blurb={blurb}
		socials={socials}
	/>
	<div className="projects">
		<h1>Projects</h1>
	</div>
	<p id="updateTag">Last updated May 2024</p>
	</>
	)
}

export default App
