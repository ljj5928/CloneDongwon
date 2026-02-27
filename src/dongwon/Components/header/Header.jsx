import React, { useState, useEffect, useRef } from "react";
import { navMenu } from "./navMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [openLang, setOpenLang] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [lang, setLang] = useState("KR");
  const [isHeaderHide, setIsHeaderHide] = useState(false);
  const prevScrollY = useRef(0);

  /* 스크롤에 따라 나타나게 */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setIsHeaderHide(true);
      } else {
        setIsHeaderHide(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  return (
    <header className={isHeaderHide ? "hide" : ""}>
      <nav>
        <div className="logo">
          <img
            src="https://www.dongwon.com/asset/image/logo/dongwon_blue.svg"
            alt="로고"
          />
        </div>
        <ul className="gnb">
          {navMenu.map((menu) => (
            <li key={menu.id}>
              <a href="#">{menu.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-btn">
          <div
            className={`lang-btn ${openLang ? "active" : ""}`}
            onClick={() => setOpenLang(!openLang)}
            onMouseLeave={() => setOpenLang(false)}
          >
            <button>{lang}</button>
            <p>
              <FontAwesomeIcon icon={faAngleDown} />
            </p>
            <div>
              <div className="lang-select-box">
                <p
                  onClick={() => setLang("KR")}
                  className={lang === "KR" ? "active" : ""}
                >
                  KR
                </p>
                <p
                  onClick={() => setLang("EN")}
                  className={lang === "EN" ? "active" : ""}
                >
                  EN
                </p>
              </div>
            </div>
          </div>
          <button type="button" className="search-btn">
            <FontAwesomeIcon icon={faSistrix} />
          </button>
        </div>
      </nav>
      <div className="submenu">
        <div className="submenu-i">
          {navMenu.map((menu, idx) => (
            <ul className="submenu-groups" key={idx}>
              {menu.children.map((child) => (
                <li
                  key={child.id}
                  className={`submenu-group ${openMenuId === child.id ? "open" : ""}`}
                >
                  <div className="submenu-title">
                    {child.children?.length > 0 ? (
                      <>
                        <a href="#">{child.label}</a>
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className={openMenuId === child.id ? "open" : ""}
                          onClick={() => toggleMenu(child.id)}
                        />{" "}
                      </>
                    ) : (
                      <>
                        <a href="">{child.label}</a>
                      </>
                    )}
                  </div>
                  {child.children?.length > 0 && (
                    <ul className="submenu-items">
                      {child.children.map((gchild) => (
                        <li key={gchild.id} className="submenu-item">
                          <a href="">{gchild.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ))}
          <div className="submenu-bottom-bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
