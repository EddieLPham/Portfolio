import React, { useEffect, useState } from "react";
import "../css/Intro.scss";

const Intro = () => {
	const [titleIndex, setTitleIndex] = useState(0);
	const titles = [
		"Full-Stack Developer",
		"Back-end Developer",
		"Game Developer",
	];
	useEffect(() => {
		const interval = setInterval(() => {
			setTitleIndex(titleIndex => (titleIndex+1) % titles.length);
		}, 4000);
		return () => (interval);
	}, []);

	return (
		<div className="IContainer">
			<h1 className="nameTag"> Lap Pham</h1>

			<div className="titleBox">
				<h1 className="tag"> {titles[titleIndex]}</h1>
			</div>
			<div className="descBox">
				<p className="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
					amet consectetur adipiscing elit. Dignissim cras tincidunt lobortis
					feugiat vivamus. Tincidunt arcu non sodales neque. Commodo elit at
					imperdiet dui accumsan sit. Cursus sit amet dictum sit amet justo
					donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
					amet consectetur adipiscing elit. Dignissim cras tincidunt lobortis
					feugiat vivamus. Tincidunt arcu non sodales neque. Commodo elit at
					imperdiet dui accumsan sit. Cursus sit amet dictum sit amet justo
					donec.
				</p>
			</div>
		</div> //Container
	);
};
export default Intro;
