import React from 'react';
import './index.css';

import { Article, Brand, Cta, Features, Navbar } from '../components'; 
import { Blog, Footer,Header, Possibility, WhatGPT1 } from '../containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header />     
      </div>
      <Brand />
      <WhatGPT1 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
