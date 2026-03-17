import React from "react";
import { getFootNavByGroup } from "./functions/getFootNavByGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faCircleChevronDown,faLocationDot} from '@fortawesome/free-solid-svg-icons'

import "./Footer.css";

const Footer = () => {
  const policyNav = getFootNavByGroup("policy");
  const companyNav = getFootNavByGroup("company");
  const siteNav = getFootNavByGroup("site");

  return (
    <footer>
      <div className="social-con">
        <h3>Social</h3>
        <div>
          <a href="#">YouTube <FontAwesomeIcon icon={faArrowRight} /></a>
          <a href="#">Instagram <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
      </div>
      <hr />
      <div className="fnb">
        <div className="foot-link-con">
          <ul className="policy-nav">
            {policyNav.map((item) => (
              <li key={item.label}>
                <a href={"#"}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="company-nav">
            <ul>
              {companyNav.map((item) => (
                <li key={item.label}>
                  {item.label}
                  {item.content && <span>{item.content}</span>}
                </li>
              ))}
            </ul>
            <a href="https://map.naver.com/p/entry/place/1698208044?placePath=%2Fhome&c=15.00,0,0,0,dh">
              <FontAwesomeIcon icon={faLocationDot} /> 서울시 서초구 마방로 68(양재동 275) 동원산업빌딩
            </a>
          </div>
        </div>
        <div className="site-nav">
          <div>
            <button type="button">
              <a href="#">퇴직자 증명서 발급</a>
            </button>
            <button type="button">
              <a href="#">
                방문 예약 신청 <span><FontAwesomeIcon icon={faArrowRight} /></span>
              </a>
            </button>
          </div>
          <button type="button" className="family">
            패밀리사이트 <span><FontAwesomeIcon icon={faCircleChevronDown} /></span>
          </button>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>
          ©2025
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Dongwon Group All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
