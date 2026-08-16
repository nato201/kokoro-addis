"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function ReservationPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".booking-visual", { clipPath: "inset(0 100% 0 0)", duration: 1.1 })
        .from(".booking-title", { y: 60, opacity: 0, duration: 0.8 }, "-=0.45")
        .from(".booking-panel", { x: 44, opacity: 0, duration: 0.85 }, "-=0.55")
        .from(".booking-form .field, .booking-submit", { y: 24, opacity: 0, stagger: 0.07, duration: 0.55 }, "-=0.45");
    }, pageRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main ref={pageRef} className="detail-shell booking-page">
      <div className="booking-layout">
        <section className="booking-visual" aria-labelledby="booking-title">
          <SiteHeader pageMode />
          <div className="booking-visual-shade" />
          <h1 className="booking-title" id="booking-title">BOOK<br/>A TABLE</h1>
        </section>

        <div className="booking-right">
          <section className="booking-panel" aria-labelledby="reservation-heading">
            <div className="ornament-title booking-heading"><i />◆<h2 id="reservation-heading">RESERVATION</h2>◆<i /></div>
            <p className="booking-intro">Reserve your table at KOKORO Addis—fill in your details and we&apos;ll confirm your booking.</p>

            {submitted ? (
              <div className="booking-success" role="status">
                <span>✓</span>
                <h3>REQUEST RECEIVED</h3>
                <p>Thank you. Our reservations team will confirm your table shortly.</p>
                <button type="button" onClick={() => setSubmitted(false)}>Make another request</button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <label className="field"><span>Full name</span><input required name="name" placeholder="Your name" /></label>
                <label className="field"><span>Number of guests</span><select required name="guests" defaultValue=""><option value="" disabled>Select number of guests</option>{[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label>
                <label className="field"><span>Phone number</span><input required name="phone" type="tel" placeholder="+251 9XX XXX XXX" /></label>
                <label className="field"><span>Preferred date &amp; time</span><input required name="datetime" type="datetime-local" /></label>
                <button className="booking-submit" type="submit">Request reservation</button>
              </form>
            )}
          </section>
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
