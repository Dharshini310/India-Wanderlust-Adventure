// Card.js
import React from 'react';
import './Card.css'
const Card = ({ title, description, imageUrl,button }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>
          <a href='https://www.googlemaps.com' target="_blank" rel="noopener noreferrer">
            {button}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
