import React from 'react'
import { Article } from '../../components';
import './blog.css';
import {blog1,blog2, blog3, blog4, blog5} from './index';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container-groupA">
                    <Article imgUrl={blog1} date="01/01/2021" title="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                </div>
                <div className="gpt3__blog-container-groupB">
                    <Article imgUrl={blog2} date="01/01/2021" title="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    <Article imgUrl={blog3} date="01/01/2021" title="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    <Article imgUrl={blog4} date="01/01/2021" title="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    <Article imgUrl={blog5} date="01/01/2021" title="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                </div>
            </div>
        </div>
    )
}

export default Blog
