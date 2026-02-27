import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faCaretRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./Journey.css";

const Journey = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const startVideoPlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };
  const closeVideoPlay = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <section className={`journey ${playing ? "active" : ""}`}>
      <div className="journey-i">
        <aside>• 동 원</aside>
        <div className="journey-text">
          <h3>동원,세상을 향한 여정</h3>
          <p>
            세상의 필요를 가장 먼저 찾아냅니다. <br />
            최적의 답을 가장 먼<span>저 제시합니다.</span>
          </p>
          <button>
            경영철학 보기 <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <aside>필요를 찾다</aside>
      </div>
      <div className={`journey-video ${playing ? "active" : ""}`}>
        <p>
          <FontAwesomeIcon icon={faCaretRight} /> 필요에 답하다 CF
        </p>
        <div className="video-box">
          <video ref={videoRef}>
            <source src="./video/journey-cf.mp4" type="video/mp4" />
          </video>
          {!playing && (
            <button className="video-play-btn" onClick={startVideoPlay}>
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          )}
        </div>
      </div>
      {playing && (
        <button className="video-close-btn" onClick={closeVideoPlay}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </section>
  );
};

export default Journey;
