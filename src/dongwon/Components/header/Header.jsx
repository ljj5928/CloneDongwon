import React, { useState, useEffect, useRef } from "react";
import { navMenu } from "./navMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faX,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);
  const [openMobileMenuIds, setOpenMobileMenuIds] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("KR");
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isLightModeHeader, setIsLightModeHeader] = useState(false);
  const [isIntroHidden, setIsIntroHidden] = useState(true);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIsIntroHidden(false);
    }, 1000);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isTablet = window.innerWidth <= 1024;

      if (isTablet) {
        setIsHeaderHidden(false);
      } else {
        if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
          setIsHeaderHidden(true);
        } else {
          setIsHeaderHidden(false);
        }
      }

      prevScrollY.current = currentScrollY;

      const lightSections = document.querySelectorAll(".header-light-section");
      const headerHeight = 120;

      let isOnLightSection = false;

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          isOnLightSection = true;
        }
      });

      setIsLightModeHeader(isOnLightSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleSubmenu = (id) => {
    setOpenSubmenuId((prev) => (prev === id ? null : id));
  };

  const toggleMobileMenuGroup = (id) => {
    setOpenMobileMenuIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const openSearchMenu = () => {
    setIsSearchMenuOpen(true);
    setIsMobileMenuOpen(false);
    setOpenSubmenuId(null);
    setIsLangOpen(false);
  };

  const closeSearchMenu = () => {
    setIsSearchMenuOpen(false);
  };

  return (
    <header
      className={`
        ${isIntroHidden ? "intro-hidden" : ""}
        ${isHeaderHidden ? "hide" : ""}
        ${isLightModeHeader ? "white-mode" : ""}
        ${isMobileMenuOpen ? "open" : ""}
        ${isSearchMenuOpen ? "search-open" : ""}
      `}
    >
      <nav>
        <a href="#">
          <div className="logo">
            <img
              src="https://www.dongwon.com/asset/image/logo/dongwon_blue.svg"
              alt="로고"
            />
          </div>
        </a>

        <ul className="gnb">
          {navMenu.map((menu) => (
            <li key={menu.id}>
              <a href="#">{menu.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-btn">
          <div
            className={`lang-btn ${isLangOpen ? "active" : ""}`}
            onClick={() => setIsLangOpen(!isLangOpen)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button>{selectedLang}</button>
            <p>
              <FontAwesomeIcon icon={faAngleDown} />
            </p>

            <div>
              <div className="lang-select-box">
                <p
                  onClick={() => setSelectedLang("KR")}
                  className={selectedLang === "KR" ? "active" : ""}
                >
                  KR
                </p>
                <p
                  onClick={() => setSelectedLang("EN")}
                  className={selectedLang === "EN" ? "active" : ""}
                >
                  EN
                </p>
              </div>
            </div>
          </div>

          {!isSearchMenuOpen ? (
            <button
              type="button"
              className="search-btn"
              onClick={openSearchMenu}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          ) : (
            <button
              type="button"
              className="search-btn"
              onClick={closeSearchMenu}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          )}

          <button
            type="button"
            className="ham-btn"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
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
                  className={`submenu-group ${openSubmenuId === child.id ? "open" : ""}`}
                >
                  <div className="submenu-title">
                    {child.children?.length > 0 ? (
                      <>
                        <a href="#">{child.label}</a>
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className={openSubmenuId === child.id ? "open" : ""}
                          onClick={() => toggleSubmenu(child.id)}
                        />
                      </>
                    ) : (
                      <a href="#">{child.label}</a>
                    )}
                  </div>

                  {child.children?.length > 0 && (
                    <ul className="submenu-items">
                      {child.children.map((gchild) => (
                        <li key={gchild.id} className="submenu-item">
                          <a href="#">{gchild.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ))}

          <div className="submenu-bottom-bar">
            <video
              src="./video/header-bottom.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </div>

      <div className={`search-menu ${isSearchMenuOpen ? "open" : ""}`}>
        <div className="search-menu-inner">
          <form className="search-form">
            <input
              type="text"
              placeholder="검색어를 입력해 주세요."
              className="search-input"
            />
            <button type="submit" className="search-submit-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>

          <div className="search-tags">
            <button type="button"># 동원</button>
            <button type="button"># ESG 경영</button>
            <button type="button"># 채용</button>
            <button type="button"># 사업분야</button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-menu-list">
            {navMenu.map((menu) => (
              <li
                key={menu.id}
                className={`mobile-menu-group ${openMobileMenuIds.includes(menu.id) ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="mobile-menu-title"
                  onClick={() => toggleMobileMenuGroup(menu.id)}
                >
                  <span>{menu.label}</span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={
                      openMobileMenuIds.includes(menu.id) ? "open" : ""
                    }
                  />
                </button>

                <div className="mobile-menu-items">
                  <div className="mobile-menu-items-inner">
                    {menu.children?.map((child) => (
                      <ul
                        key={child.id}
                        className={`mobile-menu-item ${openSubmenuId === child.id ? "open" : ""}`}
                        onClick={() => toggleSubmenu(child.id)}
                      >
                        {child.children?.length > 0 ? (
                          <li className="mobile-menu-item-head">
                            <a href="#">{child.label}</a>
                            <FontAwesomeIcon
                              icon={faAngleDown}
                              className={
                                openSubmenuId === child.id ? "open" : ""
                              }
                            />
                          </li>
                        ) : (
                          <a href="#">{child.label}</a>
                        )}

                        {child.children?.length > 0 && (
                          <ul className="mobile-submenu-items">
                            {child.children.map((gchild) => (
                              <li
                                key={gchild.id}
                                className="mobile-submenu-item"
                              >
                                <a href="#">{gchild.label}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </ul>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div
            className={`lang-btn ${isLangOpen ? "active" : ""}`}
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            <button>{selectedLang}</button>
            <p>
              <FontAwesomeIcon icon={faAngleDown} />
            </p>

            <div>
              <div className="lang-select-box">
                <p
                  onClick={() => setSelectedLang("KR")}
                  className={selectedLang === "KR" ? "active" : ""}
                >
                  KR
                </p>
                <p
                  onClick={() => setSelectedLang("EN")}
                  className={selectedLang === "EN" ? "active" : ""}
                >
                  EN
                </p>
              </div>
            </div>
          </div>

          <div className="mobile-menu-bottom-bar">
            <video
              src="./video/header-bottom.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
