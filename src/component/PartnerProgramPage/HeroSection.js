import React from 'react';
import { Row, Col } from "react-bootstrap";
import PPHand from "../../assets/PPHand.png";

function HeroSection() {
  return (
    <div className="heroSection row">
      <Row>
        <Col>
          <h1 className="hero-Section-hedline">
          Welcome to the <span className="helight">Avinya Partner</span>
            <br /> Program{" "}
          </h1>
        </Col>
        <Col lg="4" className="hero-img-section"><img className="hero-img" src={PPHand} alt="Hero img" /></Col>
      </Row>
    </div>
  )
}

export default HeroSection