import React from "react";
import { Row, Col } from "react-bootstrap";
import Aboutimg from "../../assets/aboutimg.svg";

function WhoAreWe() {
  return (
    <div className="whoAreYou">
      <h1 className="about-hedline">Who are we?</h1>
      <span className="about-span">
        Create Your Own App to Boost Your Teaching Career
      </span>
      <Row>
        <Col className="about-col-1">
          <img src={Aboutimg} alt="About Img" />
        </Col>
        <Col className="about-col-2">
          <br />
          The "Avinya App," a functioning app for trainers, bloggers, coaching
          centres, and youtubers, is being released by Esparse Matrix Solutions
          Private Limited. By considering market need, we are providing a
          platform for teachers to run their classes online and connect with
          students across India using our Avinya app.
        </Col>
      </Row>
    </div>
  );
}

export default WhoAreWe;
