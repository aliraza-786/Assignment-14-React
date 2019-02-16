import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header';
import HowITWork from './component/HowItWork';
import Service from './component/Service';
import Help from './component/Help';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HowITWork/>
        <Service/>
        <Help/>
        <Footer/>
      </div>
    );
  }
}

export default App;
