import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import video1 from "/video/hero-1.mp4";
import video2 from "/video/hero-2.mp4";
import video3 from "/video/hero-3.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrap">
      <section className="hero">
        <div className="hero-bg">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            className="hero-swiper"
          >
            <SwiperSlide>
              <video src={video1} autoPlay muted loop playsInline />
            </SwiperSlide>

            <SwiperSlide>
              <video src={video2} autoPlay muted loop playsInline />
            </SwiperSlide>

            <SwiperSlide>
              <video src={video3} autoPlay muted loop playsInline />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hero-text">
          <h3>필요에 답하다</h3>
          <p>세 상 에 &nbsp; 필 요 한 &nbsp;답 을&nbsp; 찾 기&nbsp; 위 해</p>
          <p>동 원 의 &nbsp; 혁 신 은 &nbsp;계 속 됩 니 다 .</p>
        </div>
        <div className="hero-notice">
          <div className="notice-title">
            <h4>제57기 결산배당 기준일 공고</h4>
            <span>
              <a href="#">
                <FontAwesomeIcon icon={faArrowRightLong} />
              </a>
            </span>
          </div>
          <p className="notice-text">제57기 결산 배당 기준일을 공고합니다.</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
