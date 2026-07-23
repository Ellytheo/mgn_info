import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/pic5.jpg";

const NotFound = () => (
  <div className="mg-notfound">
    <div className="mg-notfound__card">
      <img src={logo} alt="Maguna-Andu Wholesalers Logo" className="mg-notfound__logo" />
      <div className="mg-notfound__code">404</div>
      <h1 className="mg-notfound__title">Page Not Found</h1>
      <p className="mg-notfound__desc">
        Oops! The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <div className="mg-notfound__actions">
        <Link to="/" className="btn-mg-green">
          <i className="bi bi-house-fill" /> Back to Home
        </Link>
        <a
          href="https://wa.me/254703582787"
          target="_blank"
          rel="noreferrer"
          className="btn-mg-outline"
        >
          <i className="bi bi-whatsapp" /> WhatsApp Us
        </a>
      </div>
      <p className="mg-notfound__contact">
        Need help?{" "}
        <a href="tel:+254703582787">Call +254 703 582 787</a>
      </p>
    </div>
  </div>
);

export default NotFound;
