import React, { useEffect, useState } from "react";
import "../css/NavBar.scss";

const NavBar = () => {
	return (
		<nav className="NavContainer">
			<ul className="Lists">
				<a
					className="listItems"
					href="https://github.com/SuggestedName/WebsitePortfolio/blob/master/src/extras/LapPham-Resume.pdf"
					target="blank"
				>
					<img
						alt="resume"
						src="https://img.icons8.com/ios/150/000000/resume.png"
					/>
				</a>

				<a
					className="listItems"
					href="https://www.linkedin.com/in/lpham1357/"
					target="_blank"
				>
					<img
						className="w-icon"
						src="https://img.icons8.com/ios-filled/150/000000/linkedin.png"
						alt="linkedin icon"
					/>
				</a>

				<a
					className="listItems"
					href="https://github.com/SuggestedName"
					target="_blank"
				>
					<img
						className="w-icon"
						src="https://img.icons8.com/ios-filled/150/000000/github.png"
						alt="github icon"
					/>
				</a>
			</ul>
		</nav>
	);
};

export default NavBar;
