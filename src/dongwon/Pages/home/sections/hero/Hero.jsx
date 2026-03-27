import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import video1 from "/video/hero-1.mp4";
import video2 from "/video/hero-2.mp4";
import video3 from "/video/hero-3.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "./Hero.css";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;

  uniform sampler2D uTextureCurrent;
  uniform sampler2D uTextureNext;
  uniform float uMix;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uTextureAspectCurrent;
  uniform vec2 uTextureAspectNext;

  uniform vec2 uMouse;
  uniform vec2 uPrevMouse;
  uniform float uStrength;
  uniform float uRadius;

  vec2 coverUv(vec2 uv, vec2 screenSize, vec2 textureSize) {
    float screenRatio = screenSize.x / screenSize.y;
    float textureRatio = textureSize.x / textureSize.y;

    vec2 newUv = uv;

    if (screenRatio > textureRatio) {
      float scale = textureRatio / screenRatio;
      newUv.y = (uv.y - 0.5) * scale + 0.5;
    } else {
      float scale = screenRatio / textureRatio;
      newUv.x = (uv.x - 0.5) * scale + 0.5;
    }

    return newUv;
  }

  void main() {
    vec2 uv = vUv;
    vec2 warpedUv = uv;

    vec2 motion = uMouse - uPrevMouse;
    float motionLen = length(motion);

    vec2 dir = motionLen > 0.00001 ? normalize(motion) : vec2(1.0, 0.0);
    vec2 perp = vec2(-dir.y, dir.x);

    vec2 delta = uv - uMouse;
    float dist = length(delta);

    float headRadius = uRadius;
    float wakeLength = uRadius * 3.2;
    float wakeWidth = uRadius * 0.9;

    float head = smoothstep(headRadius, 0.0, dist);
    head = pow(head, 1.9);

    float along = dot(delta, dir);
    float across = dot(delta, perp);

    float behind = max(-along, 0.0);

    float wakeBody = smoothstep(wakeLength, 0.0, behind);
    float wakeSide = exp(-pow(across / wakeWidth, 2.0));
    float wakeFrontCut = 1.0 - smoothstep(-uRadius * 0.2, uRadius * 0.35, along);

    float wake = wakeBody * wakeSide * wakeFrontCut;
    wake *= clamp(motionLen * 28.0, 0.0, 1.0);

    vec2 headDir = dist > 0.0001 ? normalize(delta) : vec2(0.0);
    vec2 headPush = headDir * head * uStrength * 1.05;
    vec2 wakePull = dir * wake * uStrength * 0.95;
    vec2 wakeSpread = perp * across * wake * uStrength * 0.14;

    float ripple = sin((behind * 24.0) - uTime * 4.0) * 0.0014 * wake;

    warpedUv -= headPush;
    warpedUv += wakePull;
    warpedUv -= wakeSpread;
    warpedUv += dir * ripple;

    vec2 currentUv = coverUv(warpedUv, uResolution, uTextureAspectCurrent);
    vec2 nextUv = coverUv(warpedUv, uResolution, uTextureAspectNext);

    vec4 currentColor = texture2D(uTextureCurrent, currentUv);
    vec4 nextColor = texture2D(uTextureNext, nextUv);

    gl_FragColor = mix(currentColor, nextColor, uMix);
  }
`;

const Hero = () => {
  const [introStart, setIntroStart] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState(false);

  const threeWrapRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroStart(true);
    }, 100);

    const handleViewport = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleViewport);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleViewport);
    };
  }, []);

  useEffect(() => {
    const wrapper = threeWrapRef.current;
    if (!wrapper) return;

    let isMounted = true;
    let animationId = null;

    let renderer;
    let scene;
    let camera;
    let material;
    let mesh;

    const videoSources = [video1, video2, video3];
    let videos = [null, null, null];
    let videoTextures = [null, null, null];

    let currentIndex = 0;
    let nextIndex = 1;
    let transitionStart = performance.now();

    const slideDelay = 5000;
    const fadeDuration = 1000;

    const mouse = new THREE.Vector2(0.5, 0.5);
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const prevMouse = new THREE.Vector2(0.5, 0.5);
    const pointerVelocity = new THREE.Vector2(0, 0);

    let effectBoost = 0;

    const getVideoAspectVector = (video) => {
      const width = video?.videoWidth || 1920;
      const height = video?.videoHeight || 1080;
      return new THREE.Vector2(width, height);
    };

    const waitForVideoReady = (video) =>
      new Promise((resolve, reject) => {
        const onReady = () => {
          cleanup();
          resolve(video);
        };

        const onError = () => {
          cleanup();
          reject(new Error(`비디오 로드 실패: ${video.src}`));
        };

        const cleanup = () => {
          video.removeEventListener("loadeddata", onReady);
          video.removeEventListener("canplay", onReady);
          video.removeEventListener("error", onError);
        };

        if (video.readyState >= 2) {
          resolve(video);
          return;
        }

        video.addEventListener("loadeddata", onReady, { once: true });
        video.addEventListener("canplay", onReady, { once: true });
        video.addEventListener("error", onError, { once: true });

        video.load();
      });

    const createVideo = async (src, preload = "metadata") => {
      const video = document.createElement("video");
      video.src = src;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = preload;
      video.crossOrigin = "anonymous";

      await waitForVideoReady(video);
      return video;
    };

    const makeTexture = (video) => {
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      texture.format = THREE.RGBAFormat;
      return texture;
    };

    const cleanupVideos = () => {
      videos.forEach((video) => {
        if (!video) return;

        try {
          video.pause();
          video.removeAttribute("src");
          video.load();
        } catch (error) {
          console.error(error);
        }
      });
    };

    const handlePointerMove = (e) => {
      if (window.innerWidth <= 768) return;

      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;

      pointerVelocity.set(x - targetMouse.x, y - targetMouse.y);
      targetMouse.set(x, y);

      const speed = pointerVelocity.length();
      effectBoost = Math.min(effectBoost + speed * 5.5, 0.8);
    };

    const handlePointerLeave = () => {
      effectBoost = Math.max(effectBoost, 0.04);
    };

    const handleResize = () => {
      if (!renderer || !material) return;

      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      renderer.setSize(width, height);
      renderer.setPixelRatio(
        window.innerWidth <= 768
          ? 1
          : Math.min(window.devicePixelRatio, 1.5),
      );

      material.uniforms.uResolution.value.set(width, height);
      material.uniforms.uRadius.value =
        window.innerWidth <= 1024 ? 0.055 : 0.065;
    };

    const prepareDeferredVideo = async (index) => {
      try {
        const video = await createVideo(videoSources[index], "metadata");
        if (!isMounted) return;

        videos[index] = video;
        videoTextures[index] = makeTexture(video);

        await video.play().catch(() => null);
      } catch (error) {
        console.error(error);
      }
    };

    const initThree = async () => {
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(
        window.innerWidth <= 768
          ? 1
          : Math.min(window.devicePixelRatio, 1.5),
      );
      renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
      wrapper.appendChild(renderer.domElement);

      // 첫 번째 영상만 먼저 로드
      const firstVideo = await createVideo(videoSources[0], "auto");
      if (!isMounted) return;

      videos[0] = firstVideo;

      const firstTexture = makeTexture(firstVideo);
      videoTextures[0] = firstTexture;
      videoTextures[1] = firstTexture;
      videoTextures[2] = firstTexture;

      await firstVideo.play().catch(() => null);

      material = new THREE.ShaderMaterial({
        uniforms: {
          uTextureCurrent: { value: videoTextures[0] },
          uTextureNext: { value: videoTextures[0] },
          uMix: { value: 0 },
          uMouse: { value: mouse.clone() },
          uPrevMouse: { value: prevMouse.clone() },
          uTime: { value: 0 },
          uStrength: { value: window.innerWidth <= 1024 ? 0.045 : 0.058 },
          uRadius: { value: window.innerWidth <= 1024 ? 0.055 : 0.065 },
          uResolution: {
            value: new THREE.Vector2(wrapper.clientWidth, wrapper.clientHeight),
          },
          uTextureAspectCurrent: { value: getVideoAspectVector(firstVideo) },
          uTextureAspectNext: { value: getVideoAspectVector(firstVideo) },
        },
        vertexShader,
        fragmentShader,
      });

      mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);

      wrapper.addEventListener("pointermove", handlePointerMove);
      wrapper.addEventListener("pointerleave", handlePointerLeave);
      window.addEventListener("resize", handleResize);

      setIsFirstFrameReady(true);

      // 나머지 영상은 뒤에서 준비
      prepareDeferredVideo(1);
      prepareDeferredVideo(2);

      const animate = (time) => {
        if (!isMounted) return;

        animationId = requestAnimationFrame(animate);

        const now = performance.now();
        const elapsed = now - transitionStart;

        if (elapsed >= slideDelay) {
          transitionStart = now;
          currentIndex = nextIndex;
          nextIndex = (nextIndex + 1) % videoSources.length;

          const currentTexture = videoTextures[currentIndex] || videoTextures[0];
          const nextTexture =
            videoTextures[nextIndex] || videoTextures[currentIndex] || videoTextures[0];

          const currentVideo = videos[currentIndex] || videos[0];
          const nextVideo = videos[nextIndex] || videos[currentIndex] || videos[0];

          material.uniforms.uTextureCurrent.value = currentTexture;
          material.uniforms.uTextureNext.value = nextTexture;
          material.uniforms.uTextureAspectCurrent.value =
            getVideoAspectVector(currentVideo);
          material.uniforms.uTextureAspectNext.value =
            getVideoAspectVector(nextVideo);
        }

        let mixValue = 0;
        const fadeStart = slideDelay - fadeDuration;
        const fadeElapsed = now - transitionStart - fadeStart;

        if (fadeElapsed > 0) {
          mixValue = Math.min(fadeElapsed / fadeDuration, 1);
        }

        if (window.innerWidth > 768) {
          prevMouse.lerp(mouse, 0.035);
          mouse.lerp(targetMouse, 0.18);

          pointerVelocity.multiplyScalar(0.94);
          effectBoost *= 0.985;
        } else {
          prevMouse.lerp(mouse, 0.08);
          mouse.lerp(new THREE.Vector2(0.5, 0.5), 0.06);
          pointerVelocity.set(0, 0);
          effectBoost = 0;
        }

        const speed = pointerVelocity.length();
        const strengthBase = window.innerWidth <= 1024 ? 0.036 : 0.046;
        const strengthBoost = window.innerWidth <= 1024 ? 0.035 : 0.05;
        const finalStrength =
          window.innerWidth <= 768
            ? 0
            : strengthBase + effectBoost * strengthBoost + speed * 0.06;

        material.uniforms.uTime.value = time * 0.001;
        material.uniforms.uMix.value = mixValue;
        material.uniforms.uMouse.value.copy(mouse);
        material.uniforms.uPrevMouse.value.copy(prevMouse);
        material.uniforms.uStrength.value = finalStrength;

        renderer.render(scene, camera);
      };

      animate(0);
    };

    initThree().catch((error) => {
      console.error(error);
    });

    return () => {
      isMounted = false;

      wrapper.removeEventListener("pointermove", handlePointerMove);
      wrapper.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);

      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      videoTextures.forEach((texture, index) => {
        if (!texture) return;

        const isDuplicateOfFirst = index !== 0 && texture === videoTextures[0];
        if (!isDuplicateOfFirst) {
          texture.dispose();
        }
      });

      cleanupVideos();

      if (mesh) {
        mesh.geometry.dispose();
      }

      if (material) {
        material.dispose();
      }

      if (renderer) {
        renderer.dispose();

        if (renderer.domElement && wrapper.contains(renderer.domElement)) {
          wrapper.removeChild(renderer.domElement);
        }
      }

      if (wrapper) {
        wrapper.innerHTML = "";
      }
    };
  }, []);

  const pillWidth = isMobile ? "77vw" : isTablet ? "58vw" : "45vw";
  const pillHeight = isMobile ? "15vw" : isTablet ? "11vw" : "10vw";
  const pillY = isMobile ? "31.5vw" : isTablet ? "20.5%" : "25%";

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
        <div
          ref={threeWrapRef}
          className={`hero-bg-three ${isFirstFrameReady ? "is-ready" : ""}`}
        />

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