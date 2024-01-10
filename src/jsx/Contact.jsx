import React from "react";
import "../css/Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="CContainer">
      <div className="contacts">
        <div className="cfield">
          <h2>Socials</h2>
          <a
            className="listItems"
            href="https://www.linkedin.com/in/lpham1357/"
            target="_blank"
          >
            <h3>LinkedIn</h3>
          </a>

          <a
            className="listItems"
            href="https://github.com/LapVPham"
            target="_blank"
          >
            <h3>Github</h3>
          </a>
        </div>
        <div className="cfield">
          <h2>Contact</h2>
          <a className="listItems" href="mailto:lpham1357@gmail.com">
            <h3>lpham1357@gmail.com</h3>
          </a>
        </div>
        <div className="cfield">
          <h2>Info</h2>
          <h3>Based in: Atlanta</h3>
          <h3>Education: University of Georgia</h3>
          <h3>Major: Computer Science</h3>
        </div>
      </div>
    </div> //Container
  );
};

export default Contact;
