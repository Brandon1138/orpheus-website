import React from 'react';
import '../styles/DestinationCard.css';

function DestinationCard({ image, title, description }) {
  return (
    <div className="destination-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="cta-button">Get Started</button>
    </div>
  );
}

export default DestinationCard;