import React from 'react';
import './style.css';

const Feature = () => {
  return (
    <div className="gpt1__features-container__feature">
      <div className="gpt1__features-container__title">
        <div /> {/* avoir de l'espace */}
        <h1>{title }</h1>
      </div>
      <div className="gpt1__features-container__title">
        {text}
      </div>
    </div>
  )
}

export default Feature;