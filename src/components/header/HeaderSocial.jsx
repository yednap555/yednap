import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ramesh-pandey-50783a242/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/yednap555" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://www.instagram.com/yednap_ramesh_/" target="_blank">
        <AiOutlineInstagram />
      </a>
      <a href="https://www.facebook.com/yednap555/" target="_blank">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
