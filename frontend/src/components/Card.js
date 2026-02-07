import React from "react";
import "./Card.css";

const cardData = [
  {
    title: "Enjoy on your TV.",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    title: "Download your shows to watch offline.",
    description: "Save your favorites easily and always have something to watch.",
  },
  {
    title: "Watch everywhere.",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  {
    title: "Create profiles for kids.",
    description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  },
];

const Card = () => {
  return (
    <div className="card-container">
        {cardData.map((card, index) => (
            <div className="card" key={index}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
            </div>
        ))}
    </div>
  );
}

export default Card;