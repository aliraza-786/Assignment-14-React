import React, { Component } from 'react';
import './Header.css';
import Back from './Res/landing-bg-1.jpg';
import Icon from './Res/user-icon.png';
import AimIcon from './Res/aim-icon.png';

class Header extends Component {
  render() {
    return (
        <div className="App">
            <div className="header">
                <div class="header-left">
                    <a href="#about">About</a>
                    <a href="#How IT Works">How IT Works</a>
                    <a href="#Industry">Industry</a>
                    <a href="#Countries">Countries</a>
                    <a href="#Event">Event</a>
                </div>
                <div className="header-right">
                    <div id="btndiv">
                        <button id="btn1">supplier sign up</button>
                    </div>
                    <div id="icondiv">
                        <img src={Icon} alt="Icon" id="icon" width="40px" height="35px;" />
                    </div>
                </div>
                <div className="input">
                <div id="inleft">
                <input type="text" placeholder="   I live In" id="input1"/>
                </div>
                <div id="incenter">
                <img src={AimIcon} alt="AimIcon" id="AimIcon"/>
                </div>
                <div id="inright">
                <input type="text" placeholder="    I Want to do business in" id="input2"/>
                {/* <div id="btnright"> */}
                <input type="submit" value="Let's go" id="btn-go" id="btngo"/>
                {/* </div> */}
                </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Header;
