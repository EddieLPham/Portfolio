import React, { useState } from "react";
import "../css/About.scss";
const About = () => {
	return (
		<div id="about" className="skillBox">
			<div className="aboutMe">
				<h1 className="skillTitle">About Me</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
					aliquet bibendum enim facilisis gravida neque convallis. Tortor at
					auctor urna nunc id cursus. Egestas erat imperdiet sed euismod nisi.
					Mollis nunc sed id semper risus. Tempus egestas sed sed risus pretium.
					Habitasse platea dictumst quisque sagittis purus sit. Risus sed
					vulputate odio ut enim blandit volutpat maecenas volutpat. Auctor
					augue mauris augue neque gravida in fermentum et. Scelerisque viverra
					mauris in aliquam sem fringilla ut. Cursus in hac habitasse platea
					dictumst. Tristique senectus et netus et malesuada fames ac turpis
					egestas.
				</p>
			</div>
			<div className="skill">
				<h2>Skills</h2>
				<div className="skillWheel">
					<div id="tools" className="skillTitle">
						<h3>Front-end</h3>
					</div>
					<div id="tools" className="skillTitle">
						<h3>Tools</h3>
					</div>
					<div id="back" className="skillTitle">
						<h3>Back-end</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
