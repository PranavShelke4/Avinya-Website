import React from "react";
import "./CheckoutSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "swiper/css";

import img1 from "../../assets/000.png";
import img2 from "../../assets/002.png";
import img3 from "../../assets/003.png";
import img4 from "../../assets/004.png";
import img5 from "../../assets/005.png";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function CheckoutSection() {
  return (
    <div className="CheckoutSection">
      <h1 className="CheckoutSection-hedline">
        Checkout Our App Interface Look
      </h1>
      <p className="CheckoutSection-peara">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </p>

      <Swiper className="about-swiper"
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 170,
          modifier: 3,
          slideShadows: false,
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "auto", width: "55rem" }}
      >
        <SwiperSlide>
          <img className="about-img" alt="img" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="about-img" alt="img" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="about-img" alt="img" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="about-img" alt="img" src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="about-img" alt="img" src={img5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CheckoutSection;
