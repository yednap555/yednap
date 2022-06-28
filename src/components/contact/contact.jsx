import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdEmail />
          <h4>Email</h4>
          <h5>shiiyed1000@gmail.com</h5>
          <a href="shiiyed1000@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
          <MdEmail />
          <h4>Messenger</h4>
          <h5>shiiyed1000@gmail.com</h5>
          <a href="shiiyed1000@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
          <MdEmail />
          <h4>Email</h4>
          <h5>shiiyed1000@gmail.com</h5>
          <a href="shiiyed1000@gmail.com">Send a Message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default contact;
