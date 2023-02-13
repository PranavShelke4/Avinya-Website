/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from "react-bootstrap";
import "./DownloadSection.css";
import AppDesign from "../../assets/AppDesgin.png";
import Download from "../../assets/download-2-fill.png";
import Thumb from "../../assets/thumb-up-fill.png";
import Star from "../../assets/star-fill.png";

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


          <a href="#" target="_blank" class="market-btn apple-btn" role="button">
            <span class="market-button-subtitle">Download on the</span>
            <span class="market-button-title">App Store</span>
          </a>

          <br/>

          <div className="download-boxs">
          <div className="download-box">
            <img className="download-icons" src={Download} alt="downloads" /><br/>
            <h5>59865</h5>
            <h5>Download</h5>
          </div>
          <div className="download-box">
          <img className="download-icons" src={Thumb} alt="Thumb" /><br/>
            <h5>29852</h5>
            <h5>Like</h5>
          </div>
          <div className="download-box">
          <img className="download-icons" src={Star} alt="downloads" /><br/>
          <h5>1500</h5>
          <h5>5 star rating</h5>
          </div>
          </div>
        </Col>
        <Col lg="4" className="download-col-2">
          <img src={AppDesign} alt="App Design" />
        </Col>
      </Row>
    </div>
  );
}

export default DownloadSection;
