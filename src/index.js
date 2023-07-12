import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './jsx/Contact';
import Intro from './jsx/Intro';
import NavBar from './jsx/NavBar';
import Projects from './jsx/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Intro/>
    <Projects/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
