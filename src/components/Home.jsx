import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import pic2 from "../productsimages/mn-21.jpeg";

/* Icons via lucide-react style — using Bootstrap Icons instead (already imported) */

const whatWeDoCards = [
  {
    icon: "bi-bag-check-fill",
    title: "Affordable Quality Products",
    text: "Every time you walk into any of our stores, you find exactly what you need — quality products at prices that make life easier.",
  },
  {
    icon: "bi-people-fill",
    title: "Always At Your Service",
    text: "Dedicated staff work in unison — from sourcing and logistics to shelving and service — so every visit is seamless.",
  },
  {
    icon: "bi-stars",
    title: "Freshness & Variety",
    text: "Our catalogue is constantly refined based on real customer feedback. Freshness, Quality, Variety, and Affordability — always.",
  },
  {
    icon: "bi-heart-fill",
    title: "A Lifestyle Experience",
    text: "It's not just retail — it's an experience. We complement the lifestyles of those who seek our services through excellent customer care.",
  },
];

const mantras = [
  { icon: "bi-people-fill", title: "Teamwork", text: "Associates aligned around common goals through mutual support." },
  { icon: "bi-shield-check", title: "Quality", text: "Top-quality products and services, always." },
  { icon: "bi-trophy-fill", title: "Excellence", text: "A culture of continuous improvement." },
  { icon: "bi-hand-thumbs-up", title: "Respect", text: "Respecting each other and honouring diverse cultures." },
  { icon: "bi-patch-check", title: "Honesty", text: "Ethical, accountable and transparent in all dealings." },
];



const Home = () => {

  useEffect(() => {
    // Heading reveal
    anime({
      targets: ".mg-hero-anim",
      translateY: [-40, 0],
      opacity: [0, 1],
      duration: 900,
      delay: anime.stagger(120),
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          HOW IT ALL BEGAN — Split layout
          ════════════════════════════════════════ */}
      <section className="mg-section mg-section--white">
        <div className="mg-section__inner">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="reveal"
          >
            {/* Text */}
            <div className="reveal-left">
              <div className="mg-section__label">Our Story</div>
              <h2 className="mg-section__title reveal delay-1">
                How It All <em>Began</em>
              </h2>
              <p className="mg-section__desc">
                Maguna-Andu Wholesalers began as a small family-run business with a mission to
                serve local communities with quality products at competitive prices. Starting from
                a modest storefront in central Kenya, we steadily grew through dedication to
                customer service and trusted supplier partnerships.
              </p>
              <p style={{ color: "var(--text-500)", lineHeight: "1.75", marginBottom: "2.5rem" }}>
                Over the years, our footprint expanded across counties, becoming a cornerstone in
                wholesale distribution for small retailers, farmers, and institutions.
              </p>
              <a href="#aboutus" className="btn-mg-green reveal" style={{ textDecoration: "none" }}>
                Full Story <i className="bi bi-arrow-right ms-1" />
              </a>
            </div>

            {/* Image with clay shadow */}
            <div
              className="reveal-right"
              style={{
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                boxShadow: "var(--clay-lg)",
                border: "4px solid rgba(7, 31, 16, 0.08)",
                transform: "perspective(1200px) rotateY(-8deg)",
                transition: "all 0.6s var(--ease-spring)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "perspective(1200px) rotateY(-8deg) scale(1)")}
            >
              <img src={pic2} alt="Maguna-Andu Wholesalers original storefront in Murang'a" style={{ width: "100%", height: "420px", objectFit: "cover" }} />
              <div className="mg-hero__card-label" style={{ background: "rgba(7,31,16,0.85)", backdropFilter: "blur(8px)" }}>
                <i className="bi bi-calendar-event me-2" /> Since 1990 — A Legacy of Trust
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ════════════════════════════════════════
          WHAT DO WE DO — Claymorphism cards
          ════════════════════════════════════════ */}
      <section className="mg-section mg-section--light">
        <div className="mg-section__inner">
          <div className="mg-section__header mg-section__header--center">
            <div className="mg-section__label">What We Do</div>
            <h2 className="mg-section__title reveal delay-1">Built Around <em>You</em></h2>
            <p className="mg-section__desc">
              From sourcing to shelving, every step we take is designed to make your
              shopping experience effortless and rewarding.
            </p>
          </div>

          <div className="mg-clay-grid">
            {whatWeDoCards.map((card, i) => (
              <div className={`mg-clay-card reveal delay-${(i % 3) + 1}`} key={i}>
                <div className="mg-clay-card__icon">
                  <i className={`bi ${card.icon}`} style={{ fontSize: "1.4rem" }} />
                </div>
                <h3 className="mg-clay-card__title">{card.title}</h3>
                <p className="mg-clay-card__text">{card.text}</p>
                <div className="mg-card-glass-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY DO WE EXIST — Dark glass (Mission/Vision)
          ════════════════════════════════════════ */}
      <section className="mg-section mg-section--green">
        <div className="mg-section__inner">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="reveal"
          >
            {/* Mission + Vision */}
            <div>
              <div className="mg-section__label">Why We Exist</div>
              <h2 className="mg-section__title">
                Driven by <em>Purpose</em>
              </h2>
              <p className="mg-section__desc">
                Our mission and vision shape every decision — from the brands we stock to
                the communities we serve.
              </p>
              <div className="mg-mission-grid" style={{ marginTop: "1.5rem" }}>
                <div className="mg-glass-card reveal delay-2">
                  <div className="mg-glass-card__label">Our Mission</div>
                  <div className="mg-glass-card__title">Affordable World-Class Shopping</div>
                  <p className="mg-glass-card__text">
                    "To provide an affordable, world-class shopping experience for every Kenyan."
                  </p>
                </div>
                <div className="mg-glass-card reveal delay-3">
                  <div className="mg-glass-card__label">Our Vision</div>
                  <div className="mg-glass-card__title">Leading Retail Chain in East Africa</div>
                  <p className="mg-glass-card__text">
                    "To be the most trusted and dependable retail chain across Eastern Africa."
                  </p>
                </div>
              </div>
            </div>

            {/* Collective Growth card */}
            <div
              className="reveal delay-2"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "var(--r-xl)",
                padding: "2.5rem",
              }}
            >
              <div
                style={{
                  width: "52px", height: "52px",
                  borderRadius: "var(--r-md)",
                  background: "rgba(245,166,35,0.2)",
                  border: "1px solid rgba(245,166,35,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--amber-light)",
                  fontSize: "1.5rem",
                  marginBottom: "1.25rem",
                }}
              >
                <i className="bi bi-graph-up-arrow" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-head)", fontSize: "1.3rem",
                  fontWeight: 800, color: "#fff", marginBottom: "1rem",
                }}
              >
                Our Collective Growth
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: "1.75" }}>
                With every sale we make, we grow our contribution to the Kenyan economy
                by supporting industries, farmers, and talent — creating an overall positive
                impact on the community at large.
              </p>
              <div
                style={{
                  display: "flex", gap: "1.5rem", marginTop: "2rem",
                  padding: "1.25rem", background: "rgba(255,255,255,0.06)",
                  borderRadius: "var(--r-md)", border: "1px solid rgba(255,255,255,0.1)",
                  flexWrap: "wrap",
                }}
              >
                {[["KSh B+", "Revenue Impact"], ["1000s", "Jobs Created"], ["35+", "Counties Served"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>{val}</div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .mg-mission-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR MANTRA — Claymorphism pills
          ════════════════════════════════════════ */}
      <section className="mg-section mg-section--white">
        <div className="mg-section__inner">
          <div className="mg-section__header mg-section__header--center">
            <div className="mg-section__label">Our Values</div>
            <h2 className="mg-section__title reveal delay-1">Our <em>Mantra</em></h2>
            <p className="mg-section__desc reveal delay-2">
              "Your Trusted Wholesale Partner Since Day One." These five values guide everything we do.
            </p>
          </div>

          <div className="mg-mantra-grid">
            {mantras.map((m, i) => (
              <div className="mg-mantra-pill reveal" key={i}>
                <div className="mg-mantra-pill__icon">
                  <i className={`bi ${m.icon}`} />
                </div>
                <div className="mg-mantra-pill__title">{m.title}</div>
                <p className="mg-mantra-pill__text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
