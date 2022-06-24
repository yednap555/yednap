import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GiFullFolder } from "react-icons/gi";
import { FiInstagram } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <AiOutlineUsergroupDelete className="about__icon" />
              <h5>Clients</h5>
              <small>300+ clients worldwide</small>
            </article>
            <article className="about__card">
              <GiFullFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
            <article className="about__card">
              <GiFullFolder className="about__icon" />
              <h5>Photography</h5>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                target="_blank"
              >
                <FiInstagram />
              </a>
              {/* <small></small> */}
            </article>
            <article className="about__card">
              <GiFullFolder className="about__icon" />
              <h5>LightRoom</h5>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                target="_blank"
              >
                <FiInstagram />
              </a>
            </article>
            <article className="about__card">
              <GiFullFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            quis, maxime iste, eligendi quidem eveniet aperiam facilis illum
            molestiae, beatae obcaecati doloremque. Minus optio voluptatum
            fugiat debitis ea sit, qui earum facilis consequuntur aut.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
