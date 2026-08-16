"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const menuItems = [
  { number: "01", name: "Hokkaido scallop", note: "yuzu kosho · apple · shiso oil", price: "1,800 Birr" },
  { number: "02", name: "Bluefin flight", note: "akami · chutoro · otoro", price: "3,200 Birr" },
  { number: "03", name: "Miso black cod", note: "burnt leek · ginger dashi", price: "2,900 Birr" },
  { number: "04", name: "A5 hand roll", note: "wagyu · uni · smoked soy", price: "2,400 Birr" },
  { number: "05", name: "King salmon", note: "shio koji · citrus · crispy shallot", price: "2,100 Birr" },
  { number: "06", name: "Matcha cloud", note: "white chocolate · sesame · pear", price: "1,400 Birr" },
];

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".site-header", { y: -34, opacity: 0, duration: 0.85 })
        .from(".hero-title-line", { yPercent: 112, duration: 1, stagger: 0.09 }, "-=0.45")
        .from(".hero-copy, .hero-scroll-cue", { y: 22, opacity: 0, stagger: 0.1, duration: 0.7 }, "-=0.5")
        .from(".rail-card", { x: 54, opacity: 0, stagger: 0.12, duration: 0.8 }, "-=0.65");

      gsap.to(".hero-media", {
        scale: 1.13,
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.15 },
      });

      gsap.from(".menu-heading > *, .menu-row", {
        y: 56,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: ".menu-section", start: "top 72%" },
      });

      gsap.fromTo(".ribbon-fill", {
        scaleY: 0.045,
      }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".menu-section",
          start: "top 76%",
          end: "bottom bottom",
          scrub: 1.15,
        },
      });

      gsap.fromTo(".ribbon-logo", {
        y: -18,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: ".menu-section", start: "top 78%" },
      });

      gsap.fromTo(".crossed-chopsticks", {
        y: -42,
        rotation: -3,
      }, {
        y: 82,
        rotation: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".menu-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.25,
        },
      });

      const chopstickTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".menu-section",
          start: "top 72%",
          end: "bottom 30%",
          scrub: 1.1,
        },
      });

      chopstickTimeline
        .to(".chopstick-one", { rotation: 7, xPercent: -105, ease: "none" }, 0)
        .to(".chopstick-two", { rotation: 7, xPercent: 105, ease: "none" }, 0);

      gsap.fromTo(".scroll-bowl", {
        rotation: -24,
        y: 34,
      }, {
        rotation: 156,
        y: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-bowl",
          start: "top 92%",
          end: "bottom 38%",
          scrub: 0.75,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="site-shell home-shell">
      <SiteHeader />

      <div className="home-layout">
        <div className="home-left">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="hero-media" aria-hidden="true" />
            <div className="hero-shade" aria-hidden="true" />
            <div className="grid-overlay" aria-hidden="true" />

            <div className="hero-content">
              <p className="eyebrow">Japanese craft · Ethiopian warmth</p>
              <h1 className="hero-title" id="hero-title">
                <span className="title-clip"><span className="hero-title-line">WELCOME TO</span></span>
                <span className="title-clip hero-restaurant-line"><span className="hero-title-line"><span className="hero-kokoro">KOKORO</span> RESTAURANT</span></span>
              </h1>
              <p className="hero-copy">Season-led omakase, open-flame plates, and precise cocktails—served with a little less ceremony.</p>
            </div>
            <a className="hero-scroll-cue" href="#menu" aria-label="Scroll down to the menu">
              <span aria-hidden="true">↓</span>
            </a>
          </section>

          <section className="menu-section" id="menu" aria-labelledby="menu-title">
            <div className="kokoro-ribbon" aria-hidden="true">
              <div className="ribbon-fill" />
              <div className="ribbon-logo">
                <img src="/kokoro-logo-vertical-black.png" alt="" />
              </div>
            </div>
            <div className="crossed-chopsticks" aria-hidden="true">
              <span className="chopstick-one" />
              <span className="chopstick-two" />
            </div>
            <div className="scroll-bowl" aria-hidden="true">
              <svg viewBox="0 0 240 180" role="presentation">
                <defs>
                  <linearGradient id="bowlWhiteGradient" x1="0" x2="1">
                    <stop offset="0" stopColor="#fffafa" />
                    <stop offset="0.52" stopColor="#ffe8eb" />
                    <stop offset="1" stopColor="#ffffff" />
                  </linearGradient>
                  <linearGradient id="bowlAccentGradient" x1="0" x2="1">
                    <stop offset="0" stopColor="#8c091b" />
                    <stop offset="0.43" stopColor="#d21f35" />
                    <stop offset="0.58" stopColor="#fff4f5" />
                    <stop offset="0.72" stopColor="#d21f35" />
                    <stop offset="1" stopColor="#850919" />
                  </linearGradient>
                </defs>
                <path className="bowl-steam" d="M82 45c-13-15 12-22 0-38M120 41c-13-15 12-22 0-38M158 45c-13-15 12-22 0-38" />
                <ellipse className="bowl-rim" cx="120" cy="65" rx="92" ry="25" />
                <path className="bowl-body" d="M30 66c8 58 42 92 90 92s82-34 90-92c-17 15-54 24-90 24S47 81 30 66Z" />
                <path className="bowl-wave" d="M43 96c20-18 39 18 59 0s39 18 59 0 35 7 41 13" />
                <path className="bowl-foot" d="M87 155h66l10 16H77l10-16Z" />
              </svg>
            </div>
            <div className="section-kicker"><span>02</span><i />From the counter</div>
            <div className="menu-heading">
              <h2 id="menu-title">THE NIGHT&apos;S<br/><em>BEST IDEA.</em></h2>
              <p>Our menu follows the water, the weather, and whatever arrived at the market that morning. Familiar flavors, sharpened by fire and restraint.</p>
            </div>
            <div className="menu-list">
              {menuItems.map((item) => (
                <article className="menu-row" key={item.number}>
                  <span className="item-no">{item.number}</span>
                  <div><h3>{item.name}</h3><p>{item.note}</p></div>
                  <strong>{item.price}</strong>
                </article>
              ))}
            </div>
            <span className="outline-button">View Menu <span>→</span></span>
          </section>
        </div>

        <aside className="side-rail" aria-label="Explore KOKORO">
          <a className="rail-card rail-menu" href="#menu"><div className="rail-img" /><span>Menu</span><b aria-hidden="true">→</b></a>
          <a className="rail-card rail-story" href="/story"><div className="rail-img" /><span>Our story</span><b aria-hidden="true">→</b></a>
          <a className="rail-card rail-reserve" href="/reservation"><div className="rail-img" /><span>Reservation</span><b aria-hidden="true">→</b></a>
        </aside>
      </div>

      <SiteFooter />
    </main>
  );
}
