// Card.js
import React from 'react';
import './Cardm.css';

const Card1 = ({ title, description, imageUrl, button }) => {
  return (
    <div className="card1">
      <img src={imageUrl} alt={title} />
      <div className="card-content1">
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

export default Card1;
