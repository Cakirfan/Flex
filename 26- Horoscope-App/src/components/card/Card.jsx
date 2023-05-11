import React from "react";
import "./Card.scss";

const Card = ({ daten }) => {

  console.log(daten);
  return (
    <div>
      <h1>Who are you?</h1>
      <div className="container">
        {daten.map(({ title, date, id, image, desc }) => {
          return (
            <div className="card" key={id}>
              <h2 className="cardTitle">{title}</h2>
              <span>{date}</span>
              <div>
                <p>{desc}</p>
              </div>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default Card;
