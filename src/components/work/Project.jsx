import React from "react";

const PortfolioItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-box">
        <img src={item.image} alt="" className="work__img" />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__languages">{item.languages}</p>
      {item.demoUrl && (
        <a href={item.demoUrl} target="_blank" rel="noreferrer" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

export default PortfolioItem;
