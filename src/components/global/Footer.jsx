import React, {Component} from 'react';
import './assets/Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faDiscord, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faHome, faList, faPlay, faQuestion, faDownload, faBook, faHandshake} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default class Footer extends Component {

    render(){
        return(
            <div className="footer">
               <div className="f-content">
                    <ul>
                        <li>Socials 
                            <ul>
                                <li><a href="https://www.youtube.com/playlist?list=PLc0A9UvAm7TZKD9aN7uUsSzPir_dFHBvI"><FontAwesomeIcon style={{marginRight: '2px'}} icon={faYoutube}/>Youtube</a></li>
                                <li><a href="https://twitter.com/liteanticheat"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faTwitter}/>Twitter</a></li>
                                <li><a href="https://t.co/Xem6epsyuv"><FontAwesomeIcon style={{marginRight: '5px'}}  icon={faDiscord}/>Discord</a></li>
                            </ul>
                        </li>
                        <li>Partners
                            <ul>
                                <li><Link to="/"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faList}/>List</Link></li>
                                <li><a href="https://twitter.com/liteanticheat/status/1076657006331789313" target="_blank"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faPlay}/>Join us</a></li>
                                <li><Link to="/"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faQuestion}/>Help</Link></li>
                            </ul>
                        </li>
                        <li>Navigation
                            <ul>
                                <li><Link to="/"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faHome}/>Home</Link></li>
                                <li><a href="https://youtu.be/PCp2iXA1uLE" target="_blank"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faDownload}/>Download</a></li>
                                <li><a href="https://twitter.com/liteanticheat/status/1076657006331789313" target="_blank"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faHandshake}/>Partners</a></li>
                                <li><Link to="/blog"><FontAwesomeIcon style={{marginRight: '5px'}} icon={faBook}/>Blog</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <p>LiteAnticheat &copy; 2018</p>
               </div>
            </div>
        )
    }
    
};
