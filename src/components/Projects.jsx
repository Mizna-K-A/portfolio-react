import Aos from 'aos';
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div>
        <div className="row m-3 d-flex justify-content-evenly">
          <div className="col-lg-4 border rounded w-25" data-aos="fade-up">
            <p className='text-center'>FrameFind</p>
            <p className='text-center'>Language: React</p>
            <p className='text-center'>Overview:FrameFind is a CRUD web app designed to
              help filmmakers, photographers, and
              content creators easily discover unique
              public and private locations for creative
              projects using React, Node, Express,
              MongoDB
              With tools to create, read, update, and
              delete entries, it streamlines the scouting
              process, allowing users to focus on their
              work instead of lengthy searches</p>
            <div className='d-flex justify-content-evenly'>
              <p><a href="https://github.com/Mizna-K-A/framefind-frontend-backend" target='_blank'><i class="fa-brands fa-github"></i></a></p>
              <p><a href="https://frame-find.netlify.app" target='_blank'><i class="fa-solid fa-link"></i></a></p>
            </div>
          </div>
          <div className="col-lg-4 border rounded w-25" data-aos="fade-down" >
            <p className='text-center'> GameForge</p>
            <p className='text-center'>Language: HTML,CSS,JS</p>
            <p className='text-center'>Overview:GameForge is a fun and interactive gaming
              website featuring three classic games—
              Flappy Bird, Rock Paper Scissors, and Snake
              Feeding—all built using HTML, CSS, and
              JavaScript
              Offers simple yet addictive gameplay that
              anyone can enjoy</p>
            <div className='d-flex justify-content-evenly'>
              <p><a href="https://github.com/Mizna-K-A/GameForge" target='_blank'><i class="fa-brands fa-github"></i></a></p>
              <p><a href="https://gameforge-gamefun.netlify.app" target='_blank'><i class="fa-solid fa-link"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects