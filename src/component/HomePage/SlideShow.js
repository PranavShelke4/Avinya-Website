import React from "react";
import "./SlideShow.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import YouTube from "../../assets/heroimg.svg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items:  3},
};

const items = [
  <div className="item" data-value="1">
    <img src={YouTube} alt="img" />
    <h4>Benefits of Avinya App For teachers</h4>
  </div>,
  <div className="item" data-value="2">
    <img src={YouTube} alt="img" />
    <h4>Top 5 Online teaching Platforms in India</h4>
  </div>,
  <div className="item" data-value="3">
    <img src={YouTube} alt="img" />
    <h4>How to Teach Yoga online in 2023</h4>
  </div>,
  <div className="item" data-value="4">
    <img src={YouTube} alt="img" />
    <h4>4...</h4>
  </div>,
  <div className="item" data-value="5">
    <img src={YouTube} alt="img" />
    <h4>5..</h4>
  </div>,
];

function SlideShow() {
  return (
    <div className="SlideShow">
      <h1 className="slideShow-title">
        Develop your coaching career by building your own brand!
      </h1>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default SlideShow;
