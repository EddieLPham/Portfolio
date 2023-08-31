import React, { useEffect, useRef, useState } from "react";
import "../css/Intro.scss";

const Intro = () => {
	const titles = ["Software Developer", "Back-end Developer", "Web Developer"];
	const intervalTime = 4000;

	const [titleIndex, setTitleIndex] = useState("");
	const currentTitleIndexRef = useRef(-1); // Start with -1 to skip the first title

	useEffect(() => {
		const updateTitle = () => {
			currentTitleIndexRef.current =
				(currentTitleIndexRef.current + 1) % titles.length;
			setTitleIndex(titles[currentTitleIndexRef.current]);
		};

		// Increment the index once before starting the interval
		currentTitleIndexRef.current =
			(currentTitleIndexRef.current + 1) % titles.length;
		setTitleIndex(titles[currentTitleIndexRef.current]);

		const intervalId = setInterval(updateTitle, intervalTime);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div id="intro" className="IContainer">
			<div className="titleBox">
				<h1 className="tag"> {titleIndex}</h1>
			</div>
			<div className="introBox">
				<div className="i-left">
					<div className="intro">
						<h4 className="greet">Hello there 👋! I'm Lap Pham,</h4>
						<p className="greetDesc">I'm a Software Developer.</p>
					</div>
					<div className="webLink">
						<a href="#about" className="Button">
							About
						</a>
						<a href="#project" className="Button">
							Projects
						</a>
						<a href="#contact" className="Button">
							Contact
						</a>
					</div>
				</div>
				<div className="i-right">"Insert Picture of Me"</div>
			</div>
		</div> //Container
	);
};
export default Intro;
