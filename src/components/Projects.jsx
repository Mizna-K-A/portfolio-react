import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4 justify-content-center">
        {/* FrameFind Project */}
        <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div className="border rounded p-4 h-100 shadow">
            <h5 className="text-center">FrameFind</h5>
            <p className="text-center">
              <strong>Language:</strong> React
            </p>
            <p className="text-center">
              <strong>Overview:</strong> FrameFind is a CRUD web app designed to
              help filmmakers, photographers, and content creators easily
              discover unique public and private locations for creative
              projects using React, Node, Express, and MongoDB. It streamlines
              the scouting process with tools to create, read, update, and delete entries.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/Mizna-K-A/framefind-frontend-backend" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://frame-find.netlify.app" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* GameForge Project */}
        <div className="col-12 col-md-6 col-lg-4" data-aos="fade-down">
          <div className="border rounded p-4 h-100 shadow">
            <h5 className="text-center">GameForge</h5>
            <p className="text-center">
              <strong>Language:</strong> HTML, CSS, JS
            </p>
            <p className="text-center">
              <strong>Overview:</strong> GameForge is a fun and interactive
              gaming website featuring three classic games—Flappy Bird, Rock
              Paper Scissors, and Snake Feeding—all built using HTML, CSS, and
              JavaScript. It offers simple yet addictive gameplay that anyone
              can enjoy.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/Mizna-K-A/GameForge" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://gameforge-gamefun.netlify.app" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
