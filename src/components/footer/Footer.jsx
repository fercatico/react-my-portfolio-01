import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">M.A.F.C</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Porftolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://dev.to/fercatico"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-dev-to"></i>
          </a>
          <a
            href="https://github.com/fercatico"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/miguelfernandezcampos/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
        </div>
        <span className="footer__copy">M.A.F.C &#169; 2022 </span>
      </div>
    </footer>
  );
};

export default Footer;
