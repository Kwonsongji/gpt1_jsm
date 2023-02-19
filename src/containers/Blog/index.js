import React from 'react';
import { Article } from '../../components';
import './style.css';
import { blog01,blog02,blog03,blog04,blog05 } from './import'
const blogDatas = [
  {
    imgUrl: blog02,
    date: 'Oct 18 2021',
    title:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    imgUrl: blog03,
    date: 'Nov 9 2021',
    title:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    imgUrl: blog04,
    date: 'Dec 16 2021',
    title:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {
    imgUrl: blog05,
    date: 'Sep 26 2021',
    title:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },

]
const Blog = () => {
  return (
    <div className="gpt1_blog section__padding" id="library">
      <div className="gpt1__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt1__blog-container">
        <div className="gpt1__blog-container_groupA">
          <Article  imgUrl={blog01} date='Sep 26 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt1__blog-container_groupB"> 
          {blogDatas.map((item, index) => (
            <Article imgUrl={item.imgUrl} date={item.date } title={item.title } key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default  Blog;