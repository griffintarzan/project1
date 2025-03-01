import React from "react";
import "../App.css"
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} class="card-image" />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-text">{props.type}</p>
      <button className="card-button">Watch Video</button>
    </div>
  );
};

export default Card;
