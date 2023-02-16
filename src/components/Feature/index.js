import React from 'react';
import './style.css';

const Feature = ({ title, text}) => {
  return (
    <div className="gpt1__features-container__feature gpt1__features-container__feature-main">
      <div className="gpt1__features-container__feature-title">
        <div /> {/* avoir de l'espace */}
        <h1>{title }</h1>
      </div>
      <div className="gpt1__features-container__feature-text gpt1__features-container__text-main">
        <p> {text} </p>
      </div>
    </div>
  )
}

export default Feature;