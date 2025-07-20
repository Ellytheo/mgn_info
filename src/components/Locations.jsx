import React from 'react';

const Locations = () => {
  return (
    <div
      className="row py-4 gx-0 "
      style={{
        background: "linear-gradient(135deg, rgb(40, 231, 104), rgb(26, 109, 55))",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Left Column: Map */}
      <div className="col-12 col-md-6 ">
        <div className="h-100 w-100">
          <div className="ratio ratio-4x3 h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.497015801449!2d37.148863273970825!3d-0.7271473352685376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a30029112dd5%3A0x46225bc3166bb4bc!2sMaguna-Andu%20Wholesalers.(GODOWN)!5e0!3m2!1sen!2ske!4v1752995184268!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maguna-Andu Godown Location"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Info Cards */}
      <div className="col-12 col-md-6 py-4 px-5 d-flex flex-column justify-content-center">
        {/* Location Header */}
        <div className="bg-white bg-opacity-75 rounded p-3 mb-3 shadow-sm mission-card hover-card animated-card">
          <h2 className="text-danger">Locate Us</h2>
          <hr className="divider" />
          <strong className="location-text">
            🔍 Search for Maguna's Godown (Murang'a) on Google Maps
          </strong>
        </div>

        {/* Contact & Social Info */}
        <div className="bg-white bg-opacity-75 rounded p-3 shadow-sm mission-card hover-card animated-card">
          <h4 className="text-warning fw-bold fs-4 mb-1">More Info</h4>
          <hr className="w-100 border-2 border-dark mb-2" />
          <p className="fst-italic fs-5 text-dark">
            “For more info on our whereabouts, contact us through the following platforms:
          </p>
          <hr className="w-100 border-2 border-dark mb-2" />

          <div className="d-flex align-items-center mb-2 location-link">
            <i className="bi bi-facebook me-2 fs-5 text-primary"></i>
            <a
              href="https://www.facebook.com/p/Maguna-andu-wholesalers-100057578495074/"
              className="text-dark text-decoration-none contact-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Page
            </a>
          </div>

          <div className="d-flex align-items-center mb-2 location-link">
            <i className="bi bi-twitter-x me-2 fs-5 text-dark"></i>
            <a
              href="https://x.com/maguna_godown?t=kjWznjDwYXIWphj7Ogyaug&s=09"
              className="text-dark text-decoration-none contact-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
          </div>

          <div className="d-flex align-items-center mb-2 location-link">
            <i className="bi bi-instagram me-2 fs-5 text-danger"></i>
            <a
              href="https://www.instagram.com/maguna_andu_godown_bulk/"
              className="text-dark text-decoration-none contact-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <div className="d-flex align-items-center mb-2 location-link">
            <i className="bi bi-whatsapp me-2 fs-5 text-success"></i>
            <a
              href="https://whatsapp.com/channel/0029VbAkfTk9Gv7UjMfPcJ1F"
              className="text-dark text-decoration-none contact-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              +254 795 629 890
            </a>
          </div>

          <div className="d-flex align-items-center location-link">
            <i className="bi bi-envelope-fill me-2 fs-5 text-secondary"></i>
            <a
              href="mailto:customercaregd@maguna-andu.co.ke"
              className="text-dark text-decoration-none contact-text"
            >
              customercaregd@maguna-andu.co.ke
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
