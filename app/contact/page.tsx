"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

type ContactIconName = "instagram" | "tripadvisor" | "email" | "phone" | "location";

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" /></svg>;
  }
  if (name === "tripadvisor") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5 7.4 6h9.2L19 8.5" /><circle cx="7.5" cy="13" r="4" /><circle cx="16.5" cy="13" r="4" /><circle cx="7.5" cy="13" r="1.2" fill="currentColor" stroke="none" /><circle cx="16.5" cy="13" r="1.2" fill="currentColor" stroke="none" /><path d="m10.7 15.6 1.3 1.7 1.3-1.7" /></svg>;
  }
  if (name === "email") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>;
  }
  if (name === "phone") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 3.8 10 7.9 7.7 9.5c1.2 3 3.8 5.6 6.8 6.8l1.6-2.3 4.1 1.8c.2.1.3.3.3.6-.2 2.3-2.1 4.1-4.4 4.1C9.2 20.5 3.5 14.8 3.5 7.9c0-2.3 1.8-4.2 4.1-4.4.3 0 .5.1.6.3Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></svg>;
}

export default function ContactPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".contact-hero", { clipPath: "inset(0 100% 0 0)", duration: 1.1 })
        .from(".contact-hero-title", { y: 64, opacity: 0, duration: 0.85 }, "-=0.45")
        .from(".contact-panel", { y: 30, opacity: 0, stagger: 0.08, duration: 0.7 }, "-=0.55");
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="detail-shell contact-page">
      <div className="contact-layout">
        <section className="contact-hero" aria-labelledby="contact-title">
          <SiteHeader pageMode />
          <div className="contact-hero-shade" />
          <h1 className="contact-hero-title" id="contact-title">GET IN<br />TOUCH</h1>
        </section>

        <section className="contact-mosaic" aria-label="KOKORO contact information">
          <article className="contact-panel hours-card">
            <h2>OPENING HOURS</h2>
            <div className="hours-schedule" aria-label="Weekly opening hours">
              <p><b>Su</b><strong>Sunday</strong><span>9:30AM–10PM</span></p>
              <p><b>Mo</b><strong>Monday</strong><span>11:30AM–2:30PM, 5–10PM</span></p>
              <p><b>Tu</b><strong>Tuesday</strong><span>11:30AM–2:30PM, 5–10PM</span></p>
              <p><b>We</b><strong>Wednesday</strong><span>11:30AM–2PM, 5–10PM</span></p>
              <p><b>Th</b><strong>Thursday</strong><span>11:30AM–2:30PM, 5–10PM</span></p>
              <p><b>Fr</b><strong>Friday</strong><span>11:30AM–2:30PM, 5–10PM</span></p>
              <p><b>Sa</b><strong>Saturday</strong><span>11:30AM–2:30PM, 5–10PM</span></p>
            </div>
          </article>

          <div className="contact-panel contact-room" role="img" aria-label="Japanese-inspired dish at KOKORO" />

          <div className="contact-panel map-card">
            <iframe
              title="KOKORO Addis location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.38776092621!2d38.78289693382074!3d9.000289678716117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858be8f4f261%3A0x94b4c4f384a57fb6!2zS29rb3JvIEFkZGlzIHwgQm9sZSB8IOGKruGKruGIriDhiKzhiLXhibbhiKvhipXhibUgfCDhiabhiIw!5e0!3m2!1sen!2set!4v1786909975779!5m2!1sen!2set"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <article className="contact-panel contact-details">
            <div className="ornament-title contact-heading"><i />◆<h2>CONTACT</h2>◆<i /></div>
            <dl>
              <div><dt>ADDRESS</dt><dd>Namibia St<br />Addis Ababa, Ethiopia</dd></div>
              <div><dt>PHONE</dt><dd><a href="tel:+251-98-502-2222">+251 98 502 2222</a></dd></div>
              <div><dt>EMAIL</dt><dd><a href="mailto:info@kokozoaddis.com">info@kokozoaddis.com</a></dd></div>
              <div>
                <dt>REACH US</dt>
                <dd className="contact-socials">
                  <a href="https://www.instagram.com/kaz_addis/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="KOKORO on Instagram"><ContactIcon name="instagram" /></a>
                  <a href="https://www.tripadvisor.com/Restaurant_Review-g293791-d33043944-Reviews-Kaz_Sushi_And_Japanese_Fusion_Restaurant-Addis_Ababa.html" target="_blank" rel="noopener noreferrer" aria-label="KOKORO on Tripadvisor"><ContactIcon name="tripadvisor" /></a>
                  <a href="mailto:info@kokozoaddis.com" aria-label="Email KOKORO"><ContactIcon name="email" /></a>
                  <a href="tel:+251-98-502-2222" aria-label="Call KOKORO"><ContactIcon name="phone" /></a>
                  <a href="https://www.google.com/maps/search/?api=1&amp;query=Kokoro+Addis+Bole" target="_blank" rel="noopener noreferrer" aria-label="Find KOKORO on Google Maps"><ContactIcon name="location" /></a>
                </dd>
              </div>
            </dl>
          </article>

          <SiteFooter />
        </section>
      </div>
    </main>
  );
}
