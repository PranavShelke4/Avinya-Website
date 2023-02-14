import React from "react";
import { Row, Col } from "react-bootstrap";
import AboutPhone from "../../assets/AboutPhone.png";
import "./HighlightsSection.css";

function HighlightsSection() {
  return (
    <div className="HighlightsSection">
      <h1 className="about-hedline">Highlights Of Avinya app</h1>
      <div className="highlightBox">
        <Row>
          <Col className="about-col-1">
            <img src={AboutPhone} alt="About Img" />
          </Col>
          <Col className="about-col-2">
            Avinya is an app for instructors, schools, coaching centers, and
            anybody else looking to digitise and organize their teachings.
            Avinya makes it easier for students and instructors to connect
            outside of their institutions. The Avinya App allows you to engage
            in live online classes, sell courses, take quizzes and tests, access
            study materials, connect with other students, and more. Teachers can
            create tests with the use of the uploaded question feature. For a
            variety of tests, including CBSE, ISCE, state boards, IIT JEE, NEET,
            competitive exams, and more, trainers can provide a wide selection
            of courses. A limitless number of live video classes can be taught
            online to students all over the world from your home. With the
            assistance of this straightforward mobile app, you can digitise your
            institution and get ready for the future
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HighlightsSection;
