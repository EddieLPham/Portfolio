import React, { useEffect, useState } from "react";
import "../css/Intro.scss";

const Intro = () => {
	const titles = [
		"Designer",
		"Software Developer",
		"Back-end Developer",
		"Web Developer",
	];
	const [titleIndex, setTitleIndex] = useState("Developer");
	const [currentTitle, setCurrentTitle] = useState(0);

	useEffect(() => {
		function updateTitle() {
			setTitleIndex(titles[currentTitle]);
			if (currentTitle < 3) {
				setCurrentTitle(currentTitle + 1);
			} else {
				setCurrentTitle(0);
			}
		}
		setTimeout(updateTitle, 4000);
	}, [currentTitle]);

	return (
		<div id = "intro" className="IContainer">
			<div className="titleBox">
				<h1 className="tag"> {titleIndex}</h1>
			</div>

			<div className="descBox">
				<h4 className="descGreet">Hello there 👋! I'm Lap Pham,</h4>
				<p className="desc">I'm a Software Developer.</p>
				<div className="webLink">
					<a href="#skill" className="Button">Skills</a>
					<a href="#project" className="Button">Projects</a>
					<a href="" className="Button">About</a>
					<a href="#contact" className="Button">Contact</a>
				</div>
			</div>

			<div className="image">
					"Insert Picture of Me"
			</div>
		</div> //Container
	);
};
export default Intro;
