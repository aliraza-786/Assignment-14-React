import React, { Component } from 'react';
import './HowItWork.css';
import Aeroplan from './Res/airplane-icon.png';
import CarIcon from './Res/car-icon.png';
import ShareIcon from './Res/share-icon.png';
import Support1 from './Res/support1.png';
import Support2 from './Res/support2.png';
import Support3 from './Res/support3.png';

class HowItWork extends Component {
  render() {
    return (
        <div className="App">
            <div className="container">
                <div id="plan">
                    <h3>Plan your business trip to Africa</h3>
                    <p>Book your flight, hotel, ground transport and get connected with our wide African network.</p>
                </div>
                <div className="icon">
                    <div id="leftimg">
                        <img src={Aeroplan} alt="Aeroplan" width="100px;" height="100px;" />
                        <h5>Travel</h5>
                    </div>
                    <div id="centerimg">
                        <img src={ShareIcon} alt="ShareIcon" width="100px;" height="100px;" />
                        <h5>Networking</h5>
                    </div>
                    <div id="rightimg">
                        <img src={CarIcon} alt="CarIcon" width="100px;" height="100px;" />
                        <h5>Logistics</h5>
                    </div>
                </div>
                <div id="howdiv">
                    <h3>How Does It Work?</h3>
                    <p>We take care of you, from arrival to departure. </p>
                    <div id="soptleft">
                        <img src={Support3} width="200px" />
                        <p>Millions of people need help in their<br />
                           logistics & finding the right people in Africa</p>
                    </div>
                    <div id="soptcenter">
                        <img src={Support1} width="200px" />
                        <p>No more filling forms for separate<br />
                            services. We book your flight, hotel, <br />
                            driver and even meetings.</p>
                        <button id="btnget">Get Started</button>
                    </div>
                    <div id="soptright">
                        <img src={Support2} width="200px" />
                        <p>Travel confidently to Africa. We have your back</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
                </div>
            </div>
    );
  }
}

export default HowItWork;
