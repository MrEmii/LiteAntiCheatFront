import React, {Component} from 'react';

import './assets/blog.css';

import {updates} from './posts/News.json';
import Post from './components/Post';

export default class Blog extends Component {
    render(){
        const posts = updates.map((posted) =>{
            return(                
            <Post className="postClass" title={posted.title} description={posted.Description}
                author={posted.Author} datetime={posted.DateTime} images={posted.Images} authorImage={posted.AuthorImage}></Post>
                
            )
        })
        return(
            <div className="postContainer">
                {posts}
            </div>
        )
    }
};
