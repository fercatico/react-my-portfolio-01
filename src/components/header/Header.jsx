import React from "react";
import { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    this.scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });
  /*=============== Toogle Menu ===============*/
  const [toogle, setToogle] = useState(false);
  const [actveNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          M.A.F.C
        </a>

        <div className={toogle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  actveNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  actveNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i class="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  actveNav === "#skills" ? "nav__link active-link" : "nav__link"
                }
              >
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            {/*<li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  actveNav === "#services" ? "nav__link active-link" : "nav__link"
                }
              >
                <i class="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
              </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  actveNav === "#portfolio" ? "nav__link active-link" : "nav__link"
                }
              >
                <i class="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>*/}
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  actveNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => setToogle(!toogle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToogle(!toogle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
