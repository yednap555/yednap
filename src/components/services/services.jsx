import React from "react";
import "./services.css";
import { BiCheckCircle } from "react-icons/bi";
const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckCircle />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. , .
              </p>
            </li>
            <li>
              <BiCheckCircle />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. , .
              </p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, conse.
              </p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creations</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckCircle />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. , .
              </p>
            </li>
            <li>
              <BiCheckCircle />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. , .
              </p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
