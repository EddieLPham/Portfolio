import React from "react";
import "../css/NavBar.scss";
// import Resume from "../extras/LapResume.html";

const NavBar = () => {
  return (
    <nav className="NavContainer">
      <div className="NavDiv">
        <h3 className="NavName">Lap Pham</h3>
        <ul className="Lists">
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
            href="https://github.com/LapVPham"
            target="_blank"
          >
            <img
              className="w-icon"
              src="https://img.icons8.com/ios-filled/150/000000/github.png"
              alt="github icon"
            />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
