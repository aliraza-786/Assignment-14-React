import React, { Component } from 'react';
import './Servie.css';
import BackService from './Res/backservice.png';
import Map from './Res/map-image.png';


class Service extends Component {
    render() {
      return (
        <div className="App">
        {/* <div className="container"> */}
        <div id="service">
            <div id="btnleft">
                <h3 id="Industry">Our Services</h3><br/>
                    <input type="submit" value="Business Introductions" id="sbtn"/><br/>
                    <input type="submit" value="Concierge Services" id="sbtn"/><br/>
                    <input type="submit" value="Visa Arrangements" id="sbtn"/><br/>
                    <input type="submit" value="Translation" id="sbtn"/><br/>
                    <input type="submit" value="Ground Transportation" id="sbtn"/><br/>
                    <input type="submit" value="Flight & Hotel" id="sbtn"/><br/>
                
            </div>
            <div id="btncenter">
            <h4 id="h4">Market Scoping</h4>
            </div>
            <div id="btnright">
            <h5 id="h5">Easy Market Access</h5><br/>
            <p>
              - Start your project/business in Africa with ease. We introduce you to
                 relevant networks and/or partners in Africa from the gecko. There's 
                 no need for endless searching on the web for partners / suppliers / buyers.
                 We carefully filter our database of local African entities so we can
                 match our clients based on the (sub) sector, objectives and a background check.</p>
            <p>
            - Our Africa advisors are experiences young leaders within their respective
            industries.They can help you before, during and after your meetings in Africa.</p>
          <p>
            - Have you ever visited a large fair to only meet a few designated companies
             or not knowing who you should meet so you just give your business card to as
              many people as possible? Africa saves you time, money and whole lot of painful
              networking. Get to the right meeting straight away.</p>
            </div>
      </div>
        <div id="getstart">
        <div id="getleft">
        <h4>I looking for  for a local logisticspartner?</h4>
        <p>we would arrange the hotels, flights, and ground 
          transportation for thire<br/> conference/exibition/fair visitors.
        </p>
        </div>
        <div id="getright">
          <input type="submit" value="Get Started" id="getstarted"/>
        </div>
        </div>
        <div id="map">
        <div id="mapleft">
          <img src={Map} alt="map" id="mapimg"/>
        </div>
        <div id="mapright">
          <h5>We currently service the large cities in Morocco. Ivary Coast, Nigeria, Ethiopia and South Africa.
          Let us know if you want us in another city/country.</h5>
        </div>
        </div>
 </div>
        // </div>
      );
    }
  }
  
  export default Service;