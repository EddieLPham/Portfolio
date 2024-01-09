import React from "react";
import "../css/Projects.scss";
const Projects = () => {
  return (
    <div id="project" className="PContainer">
      <h1 className="PTitle">Projects</h1>
      <div className="PBox">
        <div className="ProjectBox">
          <h3 className="boxTitle">
            <a
              href="https://github.com/LapVPham/Movie-Screening-Forum"
              target="blank"
              rel="noreferrer"
            >
              Movie Screening Forum
            </a>
          </h3>
          <h3 className="boxTitle">
            <span>CSCI-4050 Software Engineering</span> <span>May 2022</span>
          </h3>
          <div className="boxDescription">
            <p className="description">
              A movie screening application that allows users to favorite,
              comment, and add movie to a watchlist using React.js and REST API.
            </p>
            <h4>Tech Stack: XAMPP, PHP, SQL, ReactJS, HTML, CSS</h4>
          </div>
        </div>
        <div className="ProjectBox">
          <h3 className="boxTitle">
            <a
              href="https://github.com/LapVPham/CNN-Dolphins/"
              target="_blank"
              rel="noreferrer"
            >
              Dolphin Identifier MachineLearning Project
            </a>
          </h3>
          <h3 className="boxTitle">
            <span>CSCI-4380 Data Mining</span> <span>May 2022</span>
          </h3>
          <div className="boxDescription">
            <p className="description">
              The program uses Convolutional Neural Network to identify dolphin
              using picture. The algorithm is trained by using over 5000 photos
              of different species in the ocean. It was able to produce an
              average accuracy of ~29%.
            </p>
            <h4>Tech Stack: Python, Pytorch, Jupyter Notebook.</h4>
          </div>
        </div>
      </div>
      <div className="PBox">
        <div className="ProjectBox">
          <h3 className="boxTitle">
            <a
              href="https://github.com/LapVPham/CSCI6050-B1/"
              target="_blank"
              rel="noreferrer"
            >
              Movie Theater Booking
            </a>
          </h3>
          <h3 className="boxTitle">
            <span>CSCI-4300 Web Development</span> <span>Dec 2021</span>
          </h3>

          <div className="boxDescription">
            <p className="description">
              A movie booking website allows users to register, login, browse
              movies showing at specific theater, booking seats, and ticket
              purchasing. Going through authentication, admin are able to make
              changes/edit to movie shows, seats, and theater. They also able to
              change permissions, and accounts.
            </p>
            <h4>
              Tech Stack: Front-end(HTML, Bootstrap CSS), Back-end(ASP.Net, C#,
              SQL), Stripe API
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
