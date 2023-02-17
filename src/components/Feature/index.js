import React from 'react';
import './style.css';

const Feature = ({ title, text}) => {
  return (
    <div className="gpt1__features-container__feature ">
      <div className="gpt1__features-container__feature-title">
        <div /> {/* avoir de l'espace */}
        <h1>{title }</h1>
      </div>
      <div className="gpt1__features-container__feature-text ">
        <p> {text} </p>
      </div>
    </div>
  )
}

export default Feature;