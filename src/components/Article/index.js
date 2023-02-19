import React from 'react';
import './style.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt1__blog-container_article">
      <div className="gpt1__blog-container_article-img">
        <img src={imgUrl} alt="blog" />
        <div className="gpt1__blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div> 
            <p> Read Full Article</p>
        </div>
        
      </div>
    </div>
  )
}

export default Article;