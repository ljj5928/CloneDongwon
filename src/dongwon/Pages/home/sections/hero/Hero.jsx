import React, { useEffect, useState } from "react";

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
  const [introStart, setIntroStart] = useState(false);

  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroStart(true);
    }, 100);

    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pillWidth = isMobile
    ? "77vw"
    : isTablet
    ? "58vw"
    : "45vw";
  const pillHeight = isMobile
    ? "15vw"
    : isTablet
    ? "11vw"
    : "10vw";
  const pillY = isMobile
    ? "26.5%"
    : isTablet
    ? "20.5%"
    : "25%";
  

  return (
    <div className={`hero-wrap ${introStart ? "intro-start" : ""}`}>
      <div className="hero-overlay">
        <svg className="hero-overlay-mask" aria-hidden="true">
          <defs>
            <mask id="hero-pill-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect
                className="hero-pill-hole"
                x="20"
                y={pillY}
                width={pillWidth}
                height={pillHeight}
                rx="20"
                ry="20"
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="rgb(8, 12, 24)"
            mask="url(#hero-pill-mask)"
          />
        </svg>
      </div>

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
              <video
                className="hero-video hero-video-1"
                src={video1}
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>

            <SwiperSlide>
              <video
                className="hero-video hero-video-2"
                src={video2}
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>

            <SwiperSlide>
              <video
                className="hero-video hero-video-3"
                src={video3}
                autoPlay
                muted
                loop
                playsInline
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <h3 className="hero-title">필요에 답하다</h3>

        <div className="hero-text">
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