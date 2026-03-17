import React, { useState } from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Media.css";

const Media = () => {
  const media = [
    {
      id: 1,
      type: "콘텐츠",
      date: "2026.03.11",
      title: "'삐빅- 환승입니다📟' 동원 이직썰 A to Z",
      image: "./img/media1.jpg",
    },
    {
      id: 2,
      type: "콘텐츠",
      date: "2026.03.04",
      title: "예민한 성격과 비판적 사고? 기획에 도움 많이 될 거야 | JOB학사전 EP.13",
      image: "./img/media2.webp",
    },
    {
      id: 3,
      type: "뉴스",
      date: "2026.03.13",
      title: "동원F&B 장수 브랜드 ‘쿨피스’, 15년 만에 바나나맛 신제품 출시",
      image: "./img/news1.jfif",
    },
    {
      id: 4,
      type: "뉴스",
      date: "2026.03.11",
      title: "국내 최초 코팅막 출시한 동원시스템즈, '인터배터리 2026'서 공개",
      image: "./img/news2.webp",
    },
  ];

  const [tab, setTab] = useState("contents");

  const filteredMedia =
    tab === "contents"
      ? media.filter((item) => item.type === "콘텐츠")
      : media.filter((item) => item.type === "뉴스");

  return (
    <section className="media">
      <div className="media-inner">
        <div className="media-head">
          <h2 className="media-title">미디어</h2>

          <div className="media-actions">
            <div className="media-tabs">
              <button
                className={`media-tab ${tab === "contents" ? "active" : ""}`}
                onClick={() => setTab("contents")}
              >
                콘텐츠룸
              </button>

              <button
                className={`media-tab ${tab === "news" ? "active" : ""}`}
                onClick={() => setTab("news")}
              >
                뉴스룸
              </button>
            </div>

            <button className="media-more">더 보기<FontAwesomeIcon icon={faArrowRightLong} /></button>
          </div>
        </div>

        <div className="media-container">
          {filteredMedia.map((item) => (
            <div className="media-box" key={item.id}>
              <div className="media-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="media-image"
                />
                <div className="media-image-overlay">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
              </div>

              <div className="media-meta">
                <span className="media-type">{item.type}</span>
                <span className="media-date">{item.date}</span>
              </div>

              <h3 className="media-box-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;