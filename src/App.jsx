import './App.css';
import Title from './Title';
import Description from './Description';
import ProjectContainer from './ProjectContainer';

const root = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "./dark/" : "./";
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
];
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
const projects = [
	{
		id: "website",
		title: "Personal Website",
		imagePath: root + "website.png",
		description: "test"
	},
	{
		id: "game",
		title: "Text-Based Adventure Game",
		imagePath: "./game.png",
		description: "test"
	}
]

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
		<ProjectContainer
			projects={projects}
		/>
	</div>
	<p id="updateTag">Last updated May 2024</p>
	</>
	);
}

export default App
