import React from "react";
import { Row, Col } from "react-bootstrap";
import "./AboutSection.css";
import Aboutimg from "../../assets/aboutimg.svg";

function AboutSection() {
  return (
    <div className="AboutSection">
      <h1 className="about-hedline">ABOUT AVINYA APP</h1>
      <Row>
        <Col className="about-col-1">
          <img src={Aboutimg} alt="About Img" />
        </Col>
        <Col className="about-col-2">
          <span className="about-span">SAFE, EARNING & TECHNOLOGY IN THE PALM OF YOUR HAND.</span><br/>
          For teachers, schools, coaching centres, and anybody else wishing to
          digital and manage their lessons, there is the Avinya App. The
          students' preferred app is ours since it offers a simple user
          interface, a beautiful design, and cutting-edge features. Your
          recorded video is kept safe and secure by the Avinya App technology,
          which provides learners with one-touch access. With the help of the
          Avinya App, you may take quizzes and examinations, access study
          materials, connect with other students, join live online classes, and
          take courses.
        </Col>
      </Row>
    </div>
  );
}

export default AboutSection;
