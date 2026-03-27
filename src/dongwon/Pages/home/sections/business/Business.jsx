import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Business.css";

const Business = () => {
  const businesses = [
    {
      id: 1,
      title: "해양·물류",
      desc: [
        "세계 최대 규모의 선단을 갖춘",
        "글로벌 수산 기업이자 최첨단 콜드체인,",
        "항만하역시설을 갖춘 종합물류기업입니다.",
      ],
      tag: [
        "동원산업",
        "동원로엑스",
        "동원로엑스냉장",
        "동원로엑스냉장부",
        "동원글로벌터미널부산",
        "BIDC",
      ],
      image: "./img/business1.jpg",
    },
    {
      id: 2,
      title: "식품·유통",
      desc: [
        "3,000여 개 이상의 다양한 먹거리와",
        "종합 단백질 식품을 제공하며 건강한 식문화를",
        "선도하는 'Total Protein Provider'입니다.",
      ],
      tag: ["동원F&B", "동원홈푸드", "동원팜스"],
      image: "./img/business2.jpg",
    },
    {
      id: 3,
      title: "생활 서비스",
      desc: [
        "국내 포장재 1위 기업으로",
        "최첨단 아셉틱 · 이차전지 소재 사업에도 진출하며",
        "그린 비즈니스로의 전환에 앞장서고 있습니다.",
      ],
      tag: ["동원시스템즈", "동원건설산업", "동원CNS", "동원기술투자"],
      image: "./img/business3.jpg",
    },
    {
      id: 4,
      title: "글로벌",
      desc: ["바다를 넘어 세계로,", "대한민국과 동원그룹의 가치를 알립니다."],
      tag: ["StarKist", "TALOFA SYSTEMS", "S.C.A SA", "CAPSEN", "TTP"],
      image: "./img/business4.jpg",
    },
  ];

  return (
    <section className="business">
      <div className="business-inner">

        <div className="business-head">
          <h2 className="business-title">사업 분야</h2>
          <h3 className="business-sub">
            체인 이노베이션 :
            <span className="business-sub-blue"> 연쇄적 혁신</span>
          </h3>

          <div className="business-desc">
            <p>
              동원은 본업을 파고들면서도 혁신의 가능성을 발견하면 새로운{" "}
              <br className="pc-br" />
              분야에 도전하는 과감함을 잃지 않았습니다. 반드시 필요한{" "}
              <br className="pc-br" />
              비즈니스의 고리를 찾아내고 이를 연결하며 만들어가는 필연적{" "}
              <br className="pc-br" />
              혁신의 노력은 '체인 이노베이션'이라는 동원의 성장 DNA가 됐습니다.{" "}
              <br className="pc-br" />
              지금 이 순간, 동원은 다음 어장을 위한 혁신의 고리를 찾아 항해
              중입니다.
            </p>

            <a href="#" className="business-btn">
              체인 이노베이션 로드맵
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
        </div>

        <div className="business-container">
          {businesses.map((item) => (
            <div className="business-item" key={item.id}>

              <div className="business-text">
                <h3 className="business-item-title">{item.title}</h3>
      
                <div className="business-item-desc">
                  <p>
                    {item.desc.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== item.desc.length - 1 && (
                          <br className="business-desc-br" />
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="business-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`business-image${item.id}`}
                />

                <div className="business-tags">
                  {item.tag.map((tag, i) => (
                    <span className="business-tag" key={i}>
                      {tag}
                      <span className="tag-plus">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-right"></span>
                        <span className="dot dot-bottom"></span>
                        <span className="dot dot-left"></span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
