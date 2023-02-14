import React from "react";
import "./ContactUsSection.css";
import { Row, Col } from "react-bootstrap";
import Communication from "../../assets/Communicate.png";
import Vector from "../../assets/Vector.png";
import Home from "../../assets/HomeAddress.png";

function ContactUsSection() {
  return (
    <div className="ContactUsSection">
      <h1 className="about-hedline">conact us</h1>
      <h5 className="ContactUsSection-hedlin-2">
        Are you ready to expand your business online ?
      </h5>
      <Row>
        <Col className="ContactUsSection-col-1">
          <div className="contact-box">
            <div className="ContactUsSection-icon-box">
              <img alt="img" src={Communication} />
            </div>
            <div>
            <h4 className="ContactUsSection-h5">24 x 7 Live Support</h4><br/>
            <h6>On working days, we try to respond to every inquiry within 24 hours.</h6>
            </div>
          </div>

          <div className="contact-box">
            <div className="ContactUsSection-icon-box">
              <img alt="img" src={Vector} />
            </div>
            <div>
            <h4 className="ContactUsSection-h5">Mail us</h4><br/>
            <h6>Would you like to learn more about the product? <br/> Write to us at <a href="mailto:support@avinya.app">support@avinya.app</a></h6>
            </div>
          </div>

          <div className="contact-box">
            <div className="ContactUsSection-icon-box">
              <img alt="img" src={Home} />
            </div>
            <div>
            <h4 className="ContactUsSection-h5">Contact Us</h4><br/>
            <h6>eSparse Matrix solutions Private Limited</h6>
            <h6>133/1, Spectrum Building, Akurdi,Pune -411033</h6>
            </div>
          </div>

        </Col>
        <Col lag="3" className="ContactUsSection-col-2">
          <form className="demo-form">
            <h4 className="ContactUsSection-hedline2">Get in Touch with Us </h4>
            <input className="demo-input" type="text" placeholder="Your Name" />
            <input
              className="demo-input"
              type="number"
              placeholder="Your Mobile Number  "
            />
            <input
              className="demo-input"
              type="email"
              placeholder="Your Email Id  "
            />
            <textarea className="demo-textarea" placeholder="Message" />
          </form>
          <button className="demo-submit-btn">Submit</button>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUsSection;
