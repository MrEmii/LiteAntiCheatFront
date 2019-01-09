import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import Header from './global/Header';
import Footer from './global/Footer';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {

    const {children} = this.props;

    return (
      <div className="App">
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer/>
        <div className="none">

        </div>
      </div>
    );
  }
}

export default App;
