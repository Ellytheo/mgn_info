import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js"; // ✅ Correct import for v3
import pic1 from "../productsimages/mn-21.jpg";
import pic2 from "../productsimages/mn-20.jpg";

const Home = () => {
  useEffect(() => {
    // Heading animations
    anime({
      targets: ".flashy-heading",
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".flashy-subheading",
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: 400,
      easing: "easeOutExpo",
    });

    // Card animations (staggered)
    anime({
      targets: ".hover-card, .mantra-card",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(200, { start: 600 }),
      easing: "easeOutExpo",
    });

    // Image animations
    anime({
      targets: ".animated-image",
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutElastic(1, .6)",
    });
  }, []);

  return (
    <div className="container-fluid py-3 px-0">
      <div className="container pb-0 pt-0 px-0 mb-0 animated-section">
        {/* Section 1: Center Aligned */}
        <div
          className="mb-3 text-center"
          style={{
            background:
              "linear-gradient(135deg,rgb(98, 199, 131),rgb(96, 204, 134))",
          }}
        >
          <h2 className="text-uppercase animated-section text-danger fw-bold flashy-heading">
            How It All Began
          </h2>
          <i>
            <h4 className="text-danger flashy-subheading">
              "The Journey From Early 1990's"
            </h4>
          </i>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg,rgb(130, 233, 188),rgb(17, 173, 93))",
            animation: "gradientShift 12s ease infinite",
          }}
        >
          <div className="container py-5 pt-0">
            <div
              className="row align-items-center"
              style={{ minHeight: "400px" }}
            >
              {/* Left Side: Text Centered Vertically */}
              <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-end pe-md-5">
                <h4 className="fw-bold text-danger display-6">
                  We Started As Maguna-Andu Stores
                </h4>
                <p className="fs-5 text-dark">
                  Maguna-Andu Wholesalers began as a small family-run business
                  with a mission to serve local communities with quality
                  products at competitive prices. <br />
                  Starting from a modest storefront in central Kenya, we
                  steadily grew through dedication to customer service and
                  trusted partnerships with suppliers. <br />
                  Over the years, our footprint expanded across counties,
                  becoming a cornerstone in wholesale distribution for small
                  retailers, farmers, and institutions. <br />
                  <a
                    href="#aboutus"
                    className="text-decoration-none learn-more-link text-primary"
                  >
                    Learn more about our journey here.
                  </a>
                </p>
              </div>

              {/* Right Side: Larger Image */}
              <div className="col-md-6 text-center">
                <img
                  src={pic2}
                  alt="Magunas"
                  className="img-fluid rounded shadow-lg animated-image"
                  style={{
                    maxHeight: "360px",
                    objectFit: "cover",
                    width: "90%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: What Do We Do */}
      <div className="container-fluid py-0 px-0 pb-5 mb-3">
        <div
          className="text-center mb-3 mt-2 pt-1"
          style={{
            background:
              "linear-gradient(135deg,rgb(59, 163, 94),rgb(151, 228, 178))",
          }}
        >
          <h2 className="text-danger fw-bold display-5">What Do We Do?</h2>
        </div>

        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6">
              <div
                className="p-4 rounded shadow-lg h-100 hover-card"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5 className="text-success fw-bold mb-3 fs-4">
                  We're committed to offering quality products at affordable
                  prices
                </h5>
                <p
                  className="text-dark"
                  style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
                >
                  Every time you walk into any of our stores, you don't think
                  about how the product got onto our shelf for you to place it
                  in your shopping cart because that's for us to worry about.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6">
              <div
                className="p-4 rounded shadow-lg h-100 hover-card"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5 className="text-success fw-bold mb-3 fs-4">
                  We're always there for you and always at your service
                </h5>
                <p
                  className="text-dark"
                  style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
                >
                  Every day, dedicated staff members work together with each one
                  complementing the efforts of the next to make sure that a
                  customer walking into our stores gets all they need in one
                  convenient location: from sourcing the right mix of products,
                  negotiating for the best prices, transporting them to the
                  various stores and meticulously arranging them for easy
                  access. We act as the gatekeepers between the Suppliers and
                  our Shoppers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6">
              <div
                className="p-4 rounded shadow-lg h-100 hover-card"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5 className="text-success fw-bold mb-3 fs-4">
                  Freshness, Quality, Variety and Affordability is the only
                  language we speak
                </h5>
                <p
                  className="text-dark"
                  style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
                >
                  Before stocking anything on our shelves there is always a very
                  well thought out catalogue based on the demand and customer
                  preference from the feedback we get because we are a brand
                  that endeavors to always meet and exceed Customer's need.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6">
              <div
                className="p-4 rounded shadow-lg h-100 hover-card"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5 className="text-success fw-bold mb-3 fs-4">
                  It's not just retail—it's a lifestyle experience
                </h5>
                <p
                  className="text-dark"
                  style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
                >
                  For us, it is not just about providing a platform for retail
                  trade but complementing the lifestyles of those who seek our
                  services and offering an experience through our excellent
                  customer service.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-12">
              <div
                className="p-4 rounded shadow-lg hover-card"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5 className="text-success fw-bold mb-3 fs-4">
                  Our Collective Growth
                </h5>
                <p
                  className="text-dark"
                  style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
                >
                  And with every sale we make we get to grow our contribution to
                  the Kenyan economy by supporting industries, farmers,
                  supporting talent and making an overall impact to the
                  community at large.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Why Do We Exist */}
      <div
        className="container-fluid py-0 px-0 pb-1"
        style={{
          background:
            "linear-gradient(135deg,rgb(237, 243, 239),rgb(10, 216, 82))",
        }}
      >
        <div
          className="text-center mb-0 pb-1"
          style={{
            background:
              "linear-gradient(135deg,rgb(72, 189, 111),rgb(151, 240, 182))",
          }}
        >
          <h2 className="display-5 fw-bold text-danger section-title">
            Why Do We Exist?
          </h2>
        </div>

        <div className="container px-5 py-1">
          <div className="row align-items-center justify-content-between">
            {/* Left: Image */}
            <div className="col-md-5 text-center mb-4 mb-md-0 px-5">
              <div className="parallelogram-wrapper mx-auto">
                <img
                  src={pic1}
                  alt="Mission Visual"
                  className="img-fluid parallelogram-img animated-image"
                />
              </div>
            </div>

            {/* Right: Mission & Vision */}
            <div className="col-md-5">
              <div className="bg-white bg-opacity-75 rounded p-4 shadow-sm mb-4 mission-card hover-card">
                <h4 className="text-warning fw-bold fs-4 mb-2">Our Mission</h4>
                <p className="fst-italic fs-5 mb-0">
                  "To provide affordable world-class shopping experience"
                </p>
              </div>

              <div className="bg-white bg-opacity-75 rounded p-4 shadow-sm mission-card hover-card">
                <h4 className="text-warning fw-bold fs-4 mb-2">Our Vision</h4>
                <p className="fst-italic fs-5 mb-0">
                  "To be a leading retail chain in Eastern Africa"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Our Mantra */}
      <div className="container py-5">
        <div className="text-center mb-5 bootstrap-font">
          <h2 className="text-uppercase text-success fw-bold">Our Mantra</h2>
          <h5 className="fst-italic text-muted">
            "Your Trusted Wholesale Partner Since Day One."
          </h5>
        </div>

        <div className="row g-4">
          {/* Values */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mantra-card">
            <div className="p-4 border rounded bg-light h-100 text-center">
              <h3>👨‍👨‍👧‍👦</h3>
              <h5 className="text-warning fw-bold">Teamwork</h5>
              <p>
                Company associates working towards common organizational goals
                through mutual support.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 col-xl-2 mantra-card">
            <div className="p-4 border rounded bg-light h-100 text-center">
              <h3>✔</h3>
              <h5 className="text-warning fw-bold">Quality</h5>
              <p>
                The company shall strive to provide quality products and
                services to its customers.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 col-xl-2 mantra-card">
            <div className="p-4 border rounded bg-light h-100 text-center">
              <h3>🌟</h3>
              <h5 className="text-warning fw-bold">Excellence</h5>
              <p>Setting a culture of continuous improvement.</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 col-xl-2 mantra-card">
            <div className="p-4 border rounded bg-light h-100 text-center">
              <h3>🤝🏾</h3>
              <h5 className="text-warning fw-bold">Respect</h5>
              <p>
                Respect for each other and acknowledgment of diverse cultures in
                the company.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mantra-card col-xl-3">
            <div className="p-4 border rounded bg-light h-100 text-center">
              <h3>😇</h3>
              <h5 className="text-warning fw-bold">Honesty</h5>
              <p>
                The company will be ethical, accountable, and transparent in its
                dealings with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
