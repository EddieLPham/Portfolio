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
					Hi there! 👋 I'm Lap Van Pham, a Computer Science
					graduated from The University of Georgia.
					I'm eager to explore new opportunities in the tech industry.
				</p>
				<hr/>
				<p>
					I'm eager to connect with tech enthusiasts, industry professionals,
					and potential collaborators. Feel free to reach out and let's discuss exciting opportunities and
					tech innovations!
				</p>
				<hr/>
				<p>Down below are past projects that I've worked on, check them out on GitHub simply click the title!</p>
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
						{!visibleDiv && (
							<div className="my-div">
								<h3>
									"One can have no smaller or greater mastery than mastery of
									oneself." - Leonardo da Vinci
								</h3>
							</div>
						)}
						{visibleDiv === "div1" && (
							<div className="skillNames">
								<h2>Front-End</h2>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/sass-avatar.png"
									alt="sass-avatar"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/officel/80/react.png"
									alt="react"
								/>

								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/html-5--v1.png"
									alt="html-5--v1"
								/>
							</div>
						)}
						{visibleDiv === "div2" && (
							<div className="skillNames">
								<h2>Tools</h2>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png"
									alt="java-coffee-cup-logo--v1"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/c-sharp-logo.png"
									alt="c-sharp-logo"
								/>
								<img
									width="72"
									height="72"
									src="https://img.icons8.com/fluency/96/visual-studio.png"
									alt="visual-studio"
								/>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/mysql-logo.png"
									alt="mysql-logo"
								/>
							</div>
						)}
						{visibleDiv === "div3" && (
							<div className="skillNames">
								<h2>Back-end</h2>
								<img
									width="90"
									height="90"
									src="https://img.icons8.com/color/96/nodejs.png"
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
					<div className="example2"></div>
					<div className="example"></div>
				</div>
			</div>
		</div>
	);
};
export default About;
