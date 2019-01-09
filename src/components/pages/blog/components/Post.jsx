import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faCopy } from '@fortawesome/free-solid-svg-icons';

import './Post.css';

export default class Post extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        authorImage: PropTypes.string.isRequired,
        images: PropTypes.string
    }

    componentDidMount = () =>{
        var des = document.getElementById('description');
    }

    render() {
        const { title, description, author, datetime, images, authorImage } = this.props
        return (
            <div className="postStyle">
                <div className="authorImage">
                    <img src={authorImage} alt="" />
                </div>
                <div className="pContainer">
                    <div className="pHeader">
                        <p>By {author} {datetime}</p>
                        <h2>{title}</h2>
                        <h3 id="description">{description}</h3>
                        <div className="pImage">
                            <img src={images} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
