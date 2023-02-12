import React from "react";
import "./DemoSection.css";
import { Row, Col } from "react-bootstrap";
import demoimg from "../../assets/demo.svg";

function DemoSection() {
  return (
    <div className="Demo-section">
      <h1 className="demo-section-hedline">Schedule a Free Demo</h1>
      <div className="Demo-Bluebox">
        <Row>
          <Col lg="8" className="demo-col-1">
            <h1 className="demo-hedline">
              Do you want to create your own
              <br /> branded app?
            </h1>
            <p className="demo-pera">
              For coaching institutes across India, we are a trusted <br /> and
              reliable partner.
              <br /> Request a free demo to learn more about how Avinya
              <br /> can help you grow your business.
            </p>
            <img src={demoimg} alt="demo img" />
          </Col>
          <Col lag="4" className="demo-col-2">
            <form className="demo-form">
              <input
                className="demo-input"
                type="text"
                placeholder="Your Name"
              />
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
              <input className="demo-input" type="text" placeholder="City" />
              <h4>You Are</h4>
              <input
                className="demo-checkbox"
                type="Checkbox"
                name="contentCreator"
                value="contentCreator"
              />
              A content creator<br/>
              <input
                className="demo-checkbox"
                type="Checkbox"
                name="coachingCenter"
                value="coachingCenter"
              />
              coaching Center<br/>
              <input
                className="demo-checkbox" type="Checkbox" name="createSell" value="createSell" />
              create & sell online courses<br/>
              <input
                className="demo-checkbox"
                type="Checkbox"
                name="SchoolCollege"
                value="SchoolCollege"
              />
              Teach in School/College<br/>
              <input
                className="demo-checkbox"
                type="Checkbox"
                name="educatorCreator"
                value="educatorCreator"
              />
              not an educator/content creator<br/>

              
            </form>
            <button className="demo-submit-btn">Submit</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DemoSection;
