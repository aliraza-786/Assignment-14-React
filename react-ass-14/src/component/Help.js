import React, { Component } from 'react';
import './Help.css';
import Landing from './Res/landing-bg-2.jpg';

class Help extends Component {
  render() {
    return (
      <div className="App">
      <div id="btnmain">
        <h4>How We Can We Help You?</h4>
        <p>You are...</p>
        <div id="btnhelp">
        <input type="Submit" value="A company" id="hbtn"/><br/>
        <input type="Submit" value="A financial institution" id="hbtn"/><br/>
        <input type="Submit" value="A company" id="hbtn"/><br/>
        <input type="Submit" value="A non-government organization" id="hbtn"/><br/>
        <input type="Submit" value="A government institute" id="hbtn"/><br/>
        <input type="Submit" value="Other" id="hbtn"/><br/>
        </div>
      </div>

        <div id="backget">
            <div id="h6">
            <h6>We ensure you the best experience you ever had in Africa. to createyour best project yet.</h6>
            </div>
            <input type="submit" value="Get Started" id="btnget"/>
        </div>
      </div>
    );
  }
}

export default Help;
