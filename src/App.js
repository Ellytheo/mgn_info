import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
  useNavigate,
} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Analytics } from "@vercel/analytics/react";

import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Impact from "./components/Impact";
import Home from "./components/Home";
import About from "./components/About";
import Location from "./components/Location";
import downloadImg from "./images/pic5.jpg";
import heroMain from "./productsimages/mn-21.jpeg";
import heroBack from "./productsimages/mn-20.jpg";
import heroSide from "./productsimages/mn-80.jpg";

const heroImages = [
  { src: heroMain, label: "Main Branch" },
  { src: heroBack, label: "Warehouse" },
  { src: heroSide, label: "Products" },
];




/* ── Scroll-reveal hook ───────────────────────── */
function useReveal() {
  useEffect(() => {
    let observer;
    const initReveal = () => {
      const els = document.querySelectorAll(".reveal");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "20px" }
      );
      els.forEach((el) => observer.observe(el));
    };

    const timeoutId = setTimeout(initReveal, 150);
    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone legal pages — no main site layout */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Everything else → full main site layout */}
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImg, setActiveImg] = useState(heroMain); // Slider state
  const [isSwitching, setIsSwitching] = useState(false); // Animation state



  const updateHeroImg = useCallback((newImg) => {
    if (newImg === activeImg) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveImg(newImg);
      setIsSwitching(false);
    }, 400); // Sync with CSS transition
  }, [activeImg]);




  const navigate = useNavigate();
  useReveal();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    setIsAuthenticated(!!stored);
  }, []);

  /* ── Auto-rotate Hero Images (Every 15s) ────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = heroImages.findIndex(img => img.src === activeImg);
      const nextIndex = (currentIndex + 1) % heroImages.length;
      updateHeroImg(heroImages[nextIndex].src);
    }, 15000);
    return () => clearInterval(interval);
  }, [activeImg, updateHeroImg]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "aboutus" },
    { label: "Location", id: "location" },
    { label: "Impact", id: "impact" },
  ];

  return (
    <div className="App">

      {/* ════════════════════════════════════════
          GLASSMORPHISM NAVBAR
          ════════════════════════════════════════ */}
      <header className={`mg-navbar${scrolled ? " scrolled" : ""}`}>
        {/* Brand */}
        <a href="#home" className="mg-nav__brand">
          <img src={downloadImg} alt="Maguna-Andu Wholesalers Logo" className="mg-nav__logo-img" />
          <span className="mg-nav__brand-text">
            <span> Maguna-Andu Wholesalers(k)ltd</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={`mg-nav__links${menuOpen ? " open" : ""}`}>
          {navLinks.map((l) => (
            <ScrollLink
              key={l.id}
              to={l.id}
              smooth
              duration={500}
              offset={-80}
              className="mg-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </ScrollLink>
          ))}
          {isAuthenticated && (
            <RouterLink
              to="/wp-administration"
              className="mg-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </RouterLink>
          )}
          {isAuthenticated && (
            <button
              className="mg-nav__link"
              onClick={handleLogout}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Logout
            </button>
          )}
          <a href="tel:+254795629890" className="mg-nav__cta">
            <i className="bi bi-telephone-fill" />
            Call Us
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="mg-nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
        </button>
      </header>

      {/* ════════════════════════════════════════
          IMMERSIVE HERO — LIQUID GLASS + 3D CARDS
          ════════════════════════════════════════ */}
      <section className="mg-hero" id="home">
        {/* Background */}
        <div className="mg-hero__bg">
          <img
            key={activeImg}
            src={activeImg}
            alt="active images"
            className={`mg-hero__bg-img ${isSwitching ? "switching" : ""}`}
            loading="eager"
          />
        </div>
        <div className="mg-hero__overlay" />
        <div className="mg-hero__orb mg-hero__orb--1" />
        <div className="mg-hero__orb mg-hero__orb--2" />
        <div className="mg-hero__orb mg-hero__orb--3" />
        <div className="mg-hero__grid" />

        {/* Content */}
        <div className="mg-hero__content">

          {/* Left */}
          <div className="mg-hero__left">
            <div className="mg-hero__badge">
              <span className="mg-hero__badge-dot" />
              Kenya's Trusted Wholesale distributor
            </div>

            <h1 className="mg-hero__title">
              Quality &amp; Value,{" "}
              <em>Every Single Day</em>
            </h1>

            <p className="mg-hero__sub">
              Serving Kenyans for over <strong>30 years</strong> — from our humble
              beginnings in Murang'a to a nationwide wholesale &amp; retail
              network you can trust.
            </p>

            <div className="mg-hero__actions">
              <ScrollLink
                to="aboutus"
                smooth
                duration={500}
                offset={-80}
                className="btn-mg-primary"
              >
                Discover Our Story <i className="bi bi-arrow-right" />
              </ScrollLink>
              <ScrollLink
                to="location"
                smooth
                duration={500}
                offset={-80}
                className="btn-mg-glass"
              >
                <i className="bi bi-geo-alt" /> Find a Branch
              </ScrollLink>
            </div>

            <div className="mg-hero__stats">
              <div className="mg-stat-pill">
                <span className="mg-stat-pill__value">30+</span>
                <span className="mg-stat-pill__label">Years</span>
              </div>
              <div className="mg-stat-pill">
                <span className="mg-stat-pill__value">5+</span>
                <span className="mg-stat-pill__label">Branches</span>
              </div>
              <div className="mg-stat-pill">
                <span className="mg-stat-pill__value">500+</span>
                <span className="mg-stat-pill__label">Products</span>
              </div>
              <div className="mg-stat-pill">
                <span className="mg-stat-pill__value">1000s</span>
                <span className="mg-stat-pill__label">Employees</span>
              </div>
            </div>
          </div>

          {/* Right — Interactive Slider */}
          <div className="mg-hero__right">
            <div className="mg-hero__card-3d mg-hero__card-3d--main">
              <img
                key={activeImg}
                src={activeImg}
                alt="Maguna-Andu Wholesalers Branch"
                className={isSwitching ? "switching" : ""}
                loading="eager"
              />
              <div className="mg-hero__card-label">
                <i className="bi bi-shop me-2" />
                Maguna-Andu Wholesalers — Est. 1990
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mg-hero__thumbs">
              {heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`mg-hero__thumb${activeImg === img.src ? " active" : ""}`}
                  onClick={() => updateHeroImg(img.src)}
                >
                  <img src={img.src} alt={img.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PAGE SECTIONS
          ════════════════════════════════════════ */}
      <section id="home-content">
        <Home />
      </section>

      <section id="aboutus">
        <About />
      </section>

      <section id="location">
        <Location />
      </section>

      <section id="impact">
        <Impact />
      </section>

      {/* ════════════════════════════════════════
          ROUTES (Admin page only)
          ════════════════════════════════════════ */}
      <Routes>
        {/* Root route — renders null (main content is above, outside Routes) */}
        <Route path="/" element={null} />
        <Route
          path="/wp-administration"
          element={
            <div style={{ padding: "6rem 5%", minHeight: "60vh" }}>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "2rem", color: "var(--g-700)" }}>
                Admin Portal
              </h2>
              <p style={{ color: "var(--text-500)", marginTop: "0.5rem" }}>
                Administrative tools coming soon.
              </p>
            </div>
          }
        />
      </Routes>

      {/* ════════════════════════════════════════
          PROFESSIONAL DARK FOOTER
          ════════════════════════════════════════ */}
      <footer className="mg-footer">
        <div className="mg-footer__inner">
          {/* Brand */}
          <div className="mg-footer__brand">
            <div className="mg-footer__logo">
              <img src={downloadImg} alt="Maguna-Andu Wholesalers Footer Logo" className="mg-footer__logo-img" />
              <span className="mg-footer__logo-text">
                Maguna<span>-Andu</span>
              </span>
            </div>
            <p className="mg-footer__tagline">
              Trusted by Kenya for over three decades. Quality groceries,
              household goods &amp; wholesale merchandise at prices that make sense.
            </p>
            <div className="mg-footer__contact-item">
              <i className="bi bi-geo-alt-fill" />
              Murang'a Town,oppossite MUWASCO Murang'a
            </div>
            <div className="mg-footer__contact-item">
              <i className="bi bi-telephone-fill" />
              <a href="tel:+254795629890">+254 795 629 890</a>
            </div>
            <div className="mg-footer__contact-item">
              <i className="bi bi-envelope-fill" />
              <div>
                <a href="mailto:customercaregd@maguna-andu.co.ke">
                  customercaregd@maguna-andu.co.ke
                </a>
                <br />
                <a href="mailto:salesteam@maguna-andu.co.ke">
                  salesteam@maguna-andu.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="mg-footer__col-title">Navigate</h5>
            <ul className="mg-footer__links">
              {["home", "home-content", "aboutus", "location", "impact"].map((id, i) => (
                <li key={id}>
                  <ScrollLink to={id} smooth duration={500} offset={-80} className="mg-footer__link">
                    {["Home", "What We Do", "About Us", "Our Location", "ESG & Impact"][i]}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="mg-footer__col-title">Company</h5>
            <ul className="mg-footer__links">
              <li><RouterLink to="/privacy" className="mg-footer__link">Privacy Policy</RouterLink></li>
              <li><RouterLink to="/terms" className="mg-footer__link">Terms of Service</RouterLink></li>
              <li><a href="https://wa.me/254795629890" target="_blank" rel="noreferrer" className="mg-footer__link">Report a Route</a></li>
              <li><span className="mg-footer__link">Safety Tips</span></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="mg-footer__col-title">Follow Us</h5>
            <div className="mg-footer__social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mg-footer__social-icon"><i className="bi bi-facebook" /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="mg-footer__social-icon"><i className="bi bi-twitter-x" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mg-footer__social-icon"><i className="bi bi-instagram" /></a>
              <a href="https://wa.me/254795629890" target="_blank" rel="noreferrer" className="mg-footer__social-icon"><i className="bi bi-whatsapp" /></a>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <h5 className="mg-footer__col-title">Certification</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <i className="bi bi-shield-check" style={{ color: "var(--amber-light)" }} />
                  ISO 22000 (In Progress)
                </span>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <i className="bi bi-award" style={{ color: "var(--amber-light)" }} />
                  Est. 1990 — 30+ Years
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mg-footer__bottom">
          <span>© {new Date().getFullYear()} Maguna-Andu Wholesalers Ltd — All Rights Reserved.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <RouterLink to="/privacy" className="">Privacy Policy</RouterLink>
            <RouterLink to="/terms" className="">Terms of Service</RouterLink>
          </div>
        </div>
      </footer>

      {/* ════════════════════════════════════════
          WHATSAPP FLOAT BUTTON
          ════════════════════════════════════════ */}
      <a
        href="https://wa.me/254795629890"
        target="_blank"
        rel="noreferrer"
        className="mg-wa-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" />
      </a>

      <Analytics />
    </div>
  );
}

export default AppWrapper;
