import React, {useEffect, useState} from "react";
import "../css/NavBar.scss";

const NavBar = () => {
	return (
			<div className="NavContainer">
				<nav className="Bar">
				<ul className="Lists">
					<li className="Items"><a href = "#" >Home</a></li>
					<li className="Items"><a href = "#" >About</a></li>
					<li className="Items"><a href = "#" >Contact</a></li>
				</ul>
				</nav>
			</div>
	);
};

export default NavBar;
