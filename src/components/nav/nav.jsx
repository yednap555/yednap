import React from "react";
import "./nav.css";
import { FcHome } from "react-icons/fc";
import { FaUserTie } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { FcServices } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const { activeNav, setActiveNav } = useState("#");
  return (
    <nav>
      <a
        href="#"
        onclick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FcHome />
      </a>
      <a
        href="#about"
        onclick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserTie />
      </a>
      <a
        href="#experience"
        onclick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <GiBookmarklet />
      </a>
      <a
        href="#services"
        onclick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FcServices />
      </a>
      <a
        href="#contact"
        onclick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdConnectWithoutContact />
      </a>
    </nav>
  );
};

export default Nav;
