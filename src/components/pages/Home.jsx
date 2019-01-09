import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight, faUser} from '@fortawesome/free-solid-svg-icons'

import './assets/Home.css';

import c1 from './assets/images/concept-1.jpg';
import c2 from './assets/images/concept-2-lenguajes.jpg';
import c3 from './assets/images/concept-3-cuentas.jpg';
import c4 from './assets/images/concept-4-amigos.jpg';

export default class Home extends Component {
    
    render(){
        return(
          <div className="body">
              <div className="concepts">
                  <div className="title">
                      <h1>CONCEPTS</h1>
                  </div>
                  <div className="card" >
                    <div className="item">
                        <img src={c1} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className="cContainer">
                        <h4> <FontAwesomeIcon icon={faCaretRight}/> Gui main menu design <FontAwesomeIcon icon={faCaretLeft}/></h4>
                        <p> <FontAwesomeIcon style={{marginRight: 3}} icon={faUser}/>Design by MrEmii and made by Duchz</p>
                    </div>
                  </div>
                  <div className="card" >
                    <div className="item">
                        <img src={c2} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className="cContainer">
                        <h4> <FontAwesomeIcon icon={faCaretRight}/> Gui main menu design <FontAwesomeIcon icon={faCaretLeft}/></h4>
                        <p> <FontAwesomeIcon style={{marginRight: 3}} icon={faUser}/>Design by MrEmii and made by Duchz</p>
                    </div>
                  </div>
                  <div className="card" >
                    <div className="item">
                        <img src={c3} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className="cContainer">
                        <h4> <FontAwesomeIcon icon={faCaretRight}/> Gui main menu design <FontAwesomeIcon icon={faCaretLeft}/></h4>
                        <p> <FontAwesomeIcon style={{marginRight: 3}} icon={faUser}/>Design by MrEmii and made by Duchz</p>
                    </div>
                  </div>
                  <div className="card" >
                    <div className="item">
                        <img src={c4} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className="cContainer">
                        <h4> <FontAwesomeIcon icon={faCaretRight}/> Gui main menu design <FontAwesomeIcon icon={faCaretLeft}/></h4>
                        <p> <FontAwesomeIcon style={{marginRight: 3}} icon={faUser}/>Design by MrEmii and made by Duchz</p>
                    </div>
                  </div>
              </div>

             
          </div>
        );
    }

};
