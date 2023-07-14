import React, { useEffect, useState } from "react";
import "../css/NavBar.scss";

const NavBar = () => {
	return (
		<nav className="NavContainer">
			<ul className="Lists">
				<li className="Items">
					<a href="https://suggestedname.github.io/WebsitePortfolio/extras/LapPham-Resume.pdf" target="_blank">
						<img
							alt="resume"
							src="https://img.icons8.com/ios/150/000000/resume.png"
						/>
					</a>
				</li>
				<li className="Items">
					<a href="https://www.linkedin.com/in/lpham1357/" target="_blank">
						<img
							classname="w-icon"
							src="https://img.icons8.com/ios-filled/150/000000/linkedin.png"
							alt="linkedin icon"
						/>
					</a>
				</li>
				<li className="Items">
					<a href="https://github.com/SuggestedName" target="_blank">
						<img
							classname="w-icon"
							src="https://img.icons8.com/ios-filled/150/000000/github.png"
							alt="github icon"
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
