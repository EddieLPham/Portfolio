import React, { useState } from "react";
import "../css/About.scss";
const About = () => {
	const [visibleDiv, setVisibleDiv] = useState(null);

	const toggleDiv = (divName) => {
		setVisibleDiv((prevDiv) => (prevDiv === divName ? null : divName));
	};

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
				<div className="skillWheel">
					<div className="toggleSkills">
						<button className="skillBtn" onClick={() => toggleDiv("div1")}>
							<span class="text">Front-end</span>
						</button>
						<button className="skillBtn" onClick={() => toggleDiv("div2")}>
							<span class="text">Tools</span>
						</button>
						<button className="skillBtn" onClick={() => toggleDiv("div3")}>
							<span class="text">Back-end</span>
						</button>
					</div>
					<div className="skillDisplay">
						{visibleDiv === "div1" && (
							<div className="skillNames">
								<h2>Front-End</h2>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/ios-filled/100/sass-avatar.png"
									alt="sass-avatar"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/ios-glyphs/120/react.png"
									alt="react"
								/>

								<img
									width="90"
									height="90"
									src="https://img.icons8.com/ios/100/html.png"
									alt="html"
								/>
							</div>
						)}
						{visibleDiv === "div2" && (
							<div className="skillNames">
								<h2>Tools</h2>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/ios/100/java-coffee-cup-logo--v1.png"
									alt="java-coffee-cup-logo--v1"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/ios-filled/100/c-sharp-logo.png"
									alt="c-sharp-logo"
								/>
								<img
									width="72"
									height="72"
									src="https://img.icons8.com/ios-filled/100/visual-studio.png"
									alt="visual-studio"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/ios-glyphs/90/sql.png"
									alt="sql"
								/>
							</div>
						)}
						{visibleDiv === "div3" && (
							<div className="skillNames">
								<h2>Back-end</h2>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/windows/96/nodejs.png"
									alt="nodejs"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/000000/net-framework.png"
									alt="net-framework"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
