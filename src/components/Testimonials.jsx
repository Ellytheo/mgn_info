import React, { useState, useEffect, useRef } from "react";

const reviews = [
  { initials: "JK", name: "James Kariuki", role: "Retailer, Murang'a Town", stars: 5, text: "I have been stocking my shop from Maguna-Andu for over 10 years. The prices are unbeatable and the variety is incredible. Their staff always go the extra mile." },
  { initials: "FW", name: "Faith Wanjiru", role: "Household Customer, Kenol", stars: 5, text: "Shopping at Maguna-Andu feels like family. You walk in and you are welcomed. The freshness of their products and their affordable prices keep me coming back every week." },
  { initials: "PM", name: "Peter Mwangi", role: "Small Business Owner, Murang'a", stars: 5, text: "As a small business owner, finding a reliable wholesale supplier was a challenge — until I discovered Maguna-Andu. They have been our backbone for 7 years running." },
  { initials: "GN", name: "Grace Njoki", role: "Caterer, Thika", stars: 5, text: "The range of products, especially cooking oils and dry goods, is outstanding. I source all my bulk ingredients from Maguna-Andu and have never been disappointed." },
  { initials: "DK", name: "David Kamau", role: "School Supplier, Kirinyaga", stars: 5, text: "Supplying schools requires consistency and trust. Maguna-Andu has delivered on both counts every single time. Their delivery fleet is fast and the products are always fresh." },
  { initials: "AW", name: "Anne Wairimu", role: "Kiosk Owner, Sagana", stars: 5, text: "Prices For Growth is not just a tagline — it is a reality I experience every time I restock. My kiosk profits have grown because of the margins I get at Maguna-Andu." },
];

// slides are now computed dynamically inside the component based on screen size

const ReviewCard = ({ r }) => (
  <div className="mg-testi-card">
    <span className="mg-testi-card__quote">"</span>
    <div className="mg-testi-card__stars">
      {Array.from({ length: r.stars }).map((_, i) => (
        <i key={i} className="bi bi-star-fill" />
      ))}
    </div>
    <p className="mg-testi-card__text">{r.text}</p>
    <div className="mg-testi-card__author">
      <div className="mg-testi-card__avatar">{r.initials}</div>
      <div>
        <div className="mg-testi-card__name">{r.name}</div>
        <div className="mg-testi-card__role">{r.role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 2);
  const outerRef = useRef(null);
  const timerRef = useRef(null);

  // Compute slides dynamically
  const slides = [];
  for (let i = 0; i < reviews.length; i += itemsPerSlide) {
    slides.push(reviews.slice(i, i + itemsPerSlide));
  }

  // Measure container width and update items per slide
  useEffect(() => {
    const measure = () => {
      if (outerRef.current) setSlideWidth(outerRef.current.offsetWidth);
      setItemsPerSlide(window.innerWidth <= 768 ? 1 : 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Ensure page stays within bounds when itemsPerSlide changes
  useEffect(() => {
    if (page >= slides.length) {
      setPage(Math.max(0, slides.length - 1));
    }
  }, [slides.length, page]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i) => {
    setPage(i);
    startTimer(); // reset timer on manual nav
  };

  return (
    <section className="mg-testi-section">
      <div className="mg-testi-wrap">

        <div className="mg-section__header mg-section__header--center">
          <div className="mg-section__label reveal">What Customers Say</div>
          <h2 className="mg-section__title reveal delay-1">
            Trusted by <em>Thousands</em>
          </h2>
        </div>

        {/* Sliding viewport */}
        <div
          className="mg-testi-outer"
          ref={outerRef}
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={startTimer}
        >
          <div
            className="mg-testi-track"
            style={{ transform: `translateX(-${page * slideWidth}px)` }}
          >
            {slides.map((pair, si) => (
              <div
                key={si}
                className="mg-testi-slide"
                style={{ width: slideWidth ? `${slideWidth}px` : "100%" }}
              >
                {pair.map((r, ri) => <ReviewCard key={ri} r={r} />)}
              </div>
            ))}
          </div>
        </div>

        {/* Dots — 3 dots for 3 pages */}
        <div className="mg-testi-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`mg-testi-dot${i === page ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mg-testi-cta">
          <a
            href="https://maps.app.goo.gl/i9umpBGcxeqHNDnH8"
            target="_blank"
            rel="noreferrer"
            className="mg-testi-cta__btn"
          >
            <i className="bi bi-google" /> Leave Us a Review on Google
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
