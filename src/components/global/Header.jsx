import React, {Component, Fragment} from 'react';
import './assets/Header.css';
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
    
    render(){
        return(
          <div className="header">
              <div className="logo">
                <img src={logo} alt=""/>
                <p>LiteAntiCheat</p>
              </div>
              <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="https://youtu.be/PCp2iXA1uLE" target="_blank">Download</a></li>
                        <li><a href="https://twitter.com/liteanticheat/status/1076657006331789313" target="_blank">Partner</a></li>                        
                        <li><Link to="/blog">Blog</Link></li>                        
                    </ul>
                </nav>
              </div>
          </div>
        );
    }

};
