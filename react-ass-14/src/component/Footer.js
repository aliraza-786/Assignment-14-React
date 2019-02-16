import React, { Component } from 'react';
import './Footer.css';
import In from './Res/linkedin-icon.png';
import Facebook from './Res/facebook-icon.png';
import Twiter from './Res/twitter-icon.png';


class Footer extends Component {
  render() {
    return (
      <div className="App">
        <div id="footer">
            <div id="about">
            <h5>ABOUT</h5>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
            <p>Careers</p>
            </div>
            <div id="aboutright">
                <p>@2019. All Rights Reserved.</p>
                <p>This Assignment Is Created <br/> By Ali Raza <br/> 05972 </p>
                <img src={In} alt="linkden" width="45px" height="45px" id="imgsocial"/>
                <img src={Facebook} alt="Facebook" width="45px" height="45px" id="imgsocial"/>
                <img src={Twiter} alt="Twiter" width="45px" height="45px" id="imgsocial"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
