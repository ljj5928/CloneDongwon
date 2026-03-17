import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./Answer.css";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "동원은 새로운 가치를 창출하여 사회에 기여할 수 있도록 고민하고 실천합니다.<br/> 환경영향 저감을 위한 다양한 활동을 시행하고 있으며,<br/> 투명한 경영활동으로 지속가능한 발전을 위한 노력을 하고 있습니다.";

const Answer = () => {
  const sectionRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateLines = (e) => {
      const baseLines = TEXT.split(/<br\s*\/?>/i).map((s) => s.trim());

      if (e.matches) {
        setLines([baseLines.join(" ")]);
      } else {
        setLines(baseLines);
      }
    };

    updateLines(mediaQuery);
    mediaQuery.addEventListener("change", updateLines);

    return () => {
      mediaQuery.removeEventListener("change", updateLines);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef.current);

      const titleImg = q(".answer-title img");
      const pBox = q(".scroll-p-box p");
      const linkA = q(".scroll-p-box a");
      const chars = q(".scroll-p-box .char");
      const percentNumbers = q(".text-percent p");

      const planEl = q(".answer-plan")[0];
      const scrollBoxEl = q(".scroll-p-box")[0];

      if (!planEl || !scrollBoxEl) return;

      gsap.set(titleImg, { opacity: 0, y: 60 });
      gsap.set(pBox, { opacity: 0, x: -60 });
      gsap.set(linkA, { opacity: 0, x: 60 });
      gsap.set(chars, { opacity: 0.4 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            once: true,
          },
        })
        .to(titleImg, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .to(
          pBox,
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.35",
        )
        .to(
          linkA,
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        );

      gsap.to(chars, {
        opacity: 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: scrollBoxEl,
          start: "top 65%",
          end: "+=600",
          scrub: 0.6,
        },
      });

      percentNumbers.forEach((el, idx) => {
        const target = Number(el.dataset.target || "0");
        const obj = { val: 0 };

        el.textContent = "0";

        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power1.out",
          delay: idx * 0.5,
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val));
          },
          scrollTrigger: {
            trigger: planEl,
            start: "top 40%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [lines]);

  return (
    <section className="answer" ref={sectionRef}>
      <div className="answer-video-box">
        <video autoPlay muted loop playsInline>
          <source src="./video/answer-bg.mp4" type="video/mp4" />
        </video>
        <div className="answer-title">
          <img src="./img/answer-title.png" alt="타이틀" />
        </div>
      </div>

      <div className="scroll-p-box">
        <p>
          {lines.map((line, lineIdx) => (
            <span className="line" key={lineIdx}>
              {line.split("").map((ch, i) => (
                <span
                  key={`${lineIdx}-${i}`}
                  className="char"
                  style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
                >
                  {ch}
                </span>
              ))}
              {lineIdx !== lines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <a href="#">
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>

      <div className="answer-plan">
        <div className="plan-video">
          <video autoPlay muted loop>
            <source src="./video/answer-plan.mp4" type="video/mp4" />
          </video>
          <div className="video-fade"></div>
        </div>

        <div className="plan-text-con">
          <div className="plan-text-box">
            <div className="text-percent">
              <FontAwesomeIcon icon={faPlus} />
              <p data-target="30">0</p>
              <span>%</span>
            </div>
            <div className="text-name">
              <p>배당성향 확대 계획</p>
            </div>
          </div>

          <div className="plan-text-box">
            <div className="text-percent">
              <FontAwesomeIcon icon={faMinus} />
              <p data-target="40">0</p>
              <span>%</span>
            </div>
            <div className="text-name">
              <p>탄소 배출 저감 계획</p>
              <span>*2030년까지</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Answer;