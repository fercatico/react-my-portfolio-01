import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://dev.to/fercatico"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-dev-to"></i>{" "}
      </a>
      <a
        href="https://github.com/fercatico"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/miguelfernandezcampos/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
