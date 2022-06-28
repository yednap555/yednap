import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Sunil Thakur",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure blanditiis laudantium dolore necessitatibus nulla nam vel, ipsam commodi magni perspiciatis. Nesciunt dolor ipsum iure quis, quae explicabo, nisi odio ab recusandae rerum repellendus.",
  },
  {
    avatar: AVTR2,
    name: "Sheetal Dulal",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure blanditiis laudantium dolore necessitatibus nulla nam vel, ipsam commodi magni perspiciatis. Nesciunt dolor ipsum iure quis, quae explicabo, nisi odio ab recusandae rerum repellendus.",
  },
  {
    avatar: AVTR3,
    name: "Yednap Ramesh",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure blanditiis laudantium dolore necessitatibus nulla nam vel, ipsam commodi magni perspiciatis. Nesciunt dolor ipsum iure quis, quae explicabo, nisi odio ab recusandae rerum repellendus.",
  },
  {
    avatar: AVTR4,
    name: "Sangita Pandey",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure blanditiis laudantium dolore necessitatibus nulla nam vel, ipsam commodi magni perspiciatis. Nesciunt dolor ipsum iure quis, quae explicabo, nisi odio ab recusandae rerum repellendus.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From CLients</h5>
      <h2>Testimonial</h2>
      <Swiper
        className="container testimoials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Sheetal Dulal</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            veritatis soluta velit nemo inventore, sunt quibusdam amet
            repellendus, optio, reprehenderit similique eum. Qui sit ipsa
            doloribus. Neque maiores aliquid reprehenderit laudantium, fugiat
            odit beatae.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Sunil Thakur</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            veritatis soluta velit nemo inventore, sunt quibusdam amet
            repellendus, optio, reprehenderit similique eum. Qui sit ipsa
            doloribus. Neque maiores aliquid reprehenderit laudantium, fugiat
            odit beatae.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Yednap Ramesh</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            veritatis soluta velit nemo inventore, sunt quibusdam amet
            repellendus, optio, reprehenderit similique eum. Qui sit ipsa
            doloribus. Neque maiores aliquid reprehenderit laudantium, fugiat
            odit beatae.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Sangita Pandey</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            veritatis soluta velit nemo inventore, sunt quibusdam amet
            repellendus, optio, reprehenderit similique eum. Qui sit ipsa
            doloribus. Neque maiores aliquid reprehenderit laudantium, fugiat
            odit beatae.
          </small>
        </article> */}
      </Swiper>
    </section>
  );
};

export default Testimonial;
