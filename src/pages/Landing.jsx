import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import project from '../assets/project.png';
import cv from '../assets/cv.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import angular from '../assets/angular.png';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Landing = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* Home Section */}
      <div id="home" className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center container" style={{ height: '90vh' }}>
        <div className="text-dark w-75 w-md-50 px-3 py-5 text-center text-md-start" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-light">Mizna K.A</h2>
          <h3 className="text-light">MERN Stack Developer</h3>
          <p className="text-light">
            Dynamic MERN developer with proven experience in live website projects. Skilled at crafting responsive, high-performing web applications that
            prioritize user experience. Eager to bring a strong foundation in real-world development to drive impactful results.
          </p>
        </div>
        <div style={{marginTop:'120px'}} className="w-75 w-md-50 text-center" data-aos="fade-left" data-aos-duration="1000">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
      </div>

      {/* Project and Resume Section */}
      <div className="container my-5" style={{ textAlign: 'center' }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
            <Card className="h-100" style={{border:'black'}}>
              <Card.Img variant="top" src={project} />
              <Card.Body>
                <Link to={'/projects'} className="btn btn-light text-dark text-center">
                  Projects
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
            <Card className="h-100" style={{border:'black'}}>
              <Card.Img variant="top" src={cv} />
              <Card.Body>
                <Link to={'/cv'} className="btn btn-light text-dark text-center">
                  View Resume
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skill" className="container my-5">
        <h1 className="text-center">Skills</h1>
        <div className="row justify-content-center">
          {[{ img: html, label: "HTML" }, { img: css, label: "CSS" }, { img: js, label: "JavaScript" }, { img: react, label: "React" }, { img: redux, label: "Redux" }, { img: node, label: "Node" }, { img: mongodb, label: "MongoDB" }, { img: angular, label: "Angular" }].map((skill, index) => (
            <div className="col-6 col-sm-4 col-md-3 text-center mb-4" data-aos="zoom-in" data-aos-duration={1000 + index * 200} key={index}>
              <img src={skill.img} alt={skill.label} className="img-fluid" style={{ width: '80px', height: '80px' }} />
              <span className="d-block mt-2">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="container my-5 text-center">
        <div className="p-4 text-white rounded" data-aos="zoom-in-down" data-aos-duration="1500">
          <h1>About Me</h1>
          <p className="text-justify">
            Hello, my name is Mizna K.A, and I am a skilled MERN Stack Developer with a passion for building modern, responsive, and user-friendly web
            applications. My expertise lies in creating full-stack applications using MongoDB for database management, Express.js and Node.js for backend
            development, and React.js for crafting intuitive user interfaces.
          </p>
          <a href="https://github.com/Mizna-K-A?tab=repositories" target="_blank" className="btn btn-light text-dark">
            <i className="fa-brands fa-github me-2"></i>My GitHub Link
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container my-5 text-center">
        <div className="p-4 text-light rounded" data-aos="fade-up" data-aos-duration="1000">
          <h1>Contact</h1>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <p>
                <strong>Contact No:</strong> 7902355627
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <strong>Email:</strong> mizna.k.ameer@gmail.com
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <a className="text-light hoverlink" href="https://www.linkedin.com/in/mizna-k-a-730a8330a" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
