/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "react-bootstrap";
import "./DownloadSection.css";
import AppDesign from "../../assets/AppDesgin.png";

function DownloadSection() {
  return (
    <div className="DownloadSection">
      <Row>
        <Col lg="8" className="download-col-1">
          <h1 className="download-hedline">Download App Now</h1>
          <p className="download-pera">
            With Avinya app, you can easily learn courses , attend live classes
            <br />
            and solve quiz wih easily download study material.
            <br /> So what are you waiting for ? Download Now.
          </p>
          <br />
          <a
            href="#"
            target="_blank"
            class="market-btn google-btn"
            role="button"
          >
            <span class="market-button-subtitle">Download on the</span>
            <span class="market-button-title">Google Play</span>
          </a>
        </Col>
        <Col lg="4" className="download-col-2">
          <img src={AppDesign} alt="App Design" />
        </Col>
      </Row>
    </div>
  );
}

export default DownloadSection;
