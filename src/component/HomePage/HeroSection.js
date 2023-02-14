import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HeroSection.css";
import Heroimg from "../../assets/heroimg.svg"

function HeroSection() {
  return (
    <div className="heroSection row">
      <Row>
        <Col>
          <h1 className="hero-Section-hedline">
            Get your <span className="helight">Own Teaching App </span>
            <br /> today and put your{" "}
            <span className="helight">
              Teaching
              <br /> online!
            </span>
          </h1>
          <button className="hero-btn-1">Join Now </button>
          <button className="hero-btn-2">Book A Demo</button>
        </Col>
        <Col lg="4" className="hero-img-section"><img className="hero-img" src={Heroimg} alt="Hero img" /></Col>
      </Row>
    </div>
  );
}

export default HeroSection;
