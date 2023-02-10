import React from 'react';
import { Feature } from '../../components';
import './style.css';


const WhatGPT1 = () => {
  return (
    <div className="gpt1__whatgpt1 section-margin " id="whpt1">
      <div className="gpt1__whatgpt1-feature">
        <Feature />
      </div>
      <div className="gpt1__whatgpt1-heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt1__whatgpt1-container">
        < Feature />
        < Feature />
        < Feature />
        
      </div>
    </div>
  )
}

export default WhatGPT1;