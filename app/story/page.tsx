"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function StoryPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".story-hero", { clipPath: "inset(0 100% 0 0)", duration: 1.15 })
        .from(".story-hero-title", { y: 70, opacity: 0, duration: 0.9 }, "-=0.55")
        .from(".story-card", { y: 34, opacity: 0, stagger: 0.08, duration: 0.75 }, "-=0.65");
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="detail-shell story-page">
      <div className="story-layout">
        <section className="story-hero" aria-labelledby="about-title">
          <SiteHeader pageMode />
          <div className="story-hero-shade" />
          <h1 className="story-hero-title" id="about-title">ABOUT</h1>
        </section>

        <section className="story-mosaic" aria-label="About Kokoro Addis">
          <div className="story-top-grid">
            <article className="story-card story-intro">
              <h2>JAPANESE PRECISION.<br/>ETHIOPIAN SOUL.</h2>
              <p>Where culinary craftsmanship meets modern elegance. Indulge in expertly crafted Japanese cuisine, designed to elevate every dining experience.</p>
            </article>
            <div className="story-card story-room" role="img" aria-label="Japanese ramen with traditional garnishes" />
          </div>

          <div className="rating-grid">
            <article className="story-card rating-card rating-tripadvisor">
              <img src="/tripadvisor-badge.png" alt="Tripadvisor award badge" />
              <div>
                <span>★★★★★</span>
                <h3>TRIP ADVISOR</h3>
                <p>Best Sushi Restaurant in Addis, Loved over 100000+ customers.</p>
              </div>
            </article>
          </div>

          <div className="story-bottom-grid">
            <div className="story-card story-sushi" role="img" aria-label="Japanese sushi and sashimi selection" />
            <article className="story-card story-narrative">
              <div className="ornament-title"><i />◆<h2>OUR STORY</h2>◆<i /></div>
              <p>Kokoro Addis, located in the vibrant Bole area, is a gem for sushi lovers seeking authentic flavors in Addis Ababa. Renowned for its exceptional sushi crafted by a passionate chef, this restaurant offers an inviting atmosphere perfect for celebrating special occasions or enjoying a casual meal with friends.</p>
            </article>
          </div>

          <SiteFooter />
        </section>
      </div>
    </main>
  );
}
