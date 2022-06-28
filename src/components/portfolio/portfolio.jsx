import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Life is a flower of which love is the honey.",
    github: "https://github.com/yednap555",
    demo: "https://www.instagram.com/p/CJc_9Elpl0l/",
  },
  {
    id: 2,
    image: IMG2,
    title: "The unexamined life is not worth living.",
    github: "https://github.com/yednap555",
    demo: "https://www.instagram.com/p/CJJQQHGp8f8/",
  },
  {
    id: 3,
    image: IMG3,
    title: "I like criticism. It makes you strong.",
    github: "https://github.com/yednap555",
    demo: "https://www.instagram.com/p/CI-ykFMpptP/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Live for each second without hesitation.",
    github: "https://github.com/yednap555",
    demo: "https://www.instagram.com/p/CIUi1vPBQAj/",
  },
  {
    id: 5,
    image: IMG5,
    title: "The healthiest response to life is joy.",
    github: "https://github.com/yednap555",
    demo: "https://www.instagram.com/p/CIQVWFdB33q/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Keep calm and carry on.",
    github: "https://github.com/yednap555",
    demo: "https://www.instagram.com/p/CIQVWFdB33q/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

{
  /* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/yednap555" className="btn">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/yednap555" className="btn">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/yednap555" className="btn">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/yednap555" className="btn">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/yednap555" className="btn">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/yednap555" className="btn">
                GitHub
              </a>
              <a
                href="https://www.instagram.com/the_lensational_x/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article> */
}

export default portfolio;
