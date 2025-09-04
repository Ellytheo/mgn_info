import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // 👈 for smooth scroll

// Vercel Analytics import
import { Analytics } from "@vercel/analytics/react";

// Images and components
import downloadImg from "./images/pic5.jpg";
import Home from "./components/Home";
import About from "./components/About";
import Location from "./components/Location";
import Products from "./components/Products";
import Impact from "./components/Impact";


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsAuthenticated(!!storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
    setMenuOpen(false);
  };

  const sectionLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "aboutus" },
    { label: "Location", id: "location" },
    { label: "Feedback", id: "feedback" },
    { label: "Our Products", id: "products" },
    { label: "Impact", id: "impact" },
  ];

  return (
    <div className="App">
      {/* Header with Hamburger */}
      <header className="header bg-light border-bottom">
        <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 px-3">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img
              src={downloadImg}
              alt="Magunas"
              className="img-fluid rounded"
              style={{ maxHeight: "80px", maxWidth: "200px" }}
            />
          </div>

          {/* Hamburger */}
          <div className="d-md-none">
            <button
              className="btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-1 text-dark"></i>
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              menuOpen ? "d-flex" : "d-none"
            } flex-column flex-md-row gap-3 align-items-md-center d-md-flex`}
          >
            {/* Scroll Links for in-page sections */}
            {sectionLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="header-link text-decoration-none fs-6"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ))}

            {/* Router links for separate pages */}
            {isAuthenticated && (
              <RouterLink
                to="/wp-administration"
                className="header-link text-decoration-none fs-6"
                onClick={() => setMenuOpen(false)}
              >
                Admin Page
              </RouterLink>
            )}

            {isAuthenticated && (
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Page Sections */}
      {/* Page Sections (scroll targets) */}
<section id="home">
  <Home />
</section>
<section id="aboutus">
  <About />
</section>
<section id="location">
  <Location />
</section>
<section id="products">
  <Products />
</section>
<section id="impact">
  <Impact />
</section>




      {/* Routes for real pages */}
      <Routes>
        <Route path="/wp-administration" element={<h2>Admin Page</h2>} />
        <Route path="/privacy" element={<h2>Privacy Policy</h2>} />
        <Route path="/terms" element={<h2>Terms of Service</h2>} />
        
      </Routes>

      {/* Footer */}
      <footer className="bg-success text-white mt-5 pt-5 pb-4">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3">
              <h5 className="text-warning">Maguna Andu Wholesalers</h5>
              <p>
                Trusted by Murang’a for over two decades. We deliver quality
                groceries, household goods, and merchandise with affordability
                and community focus.
              </p>
            </div>

            <div className="col-md-3">
              <h6 className="text-warning">Contact</h6>
              <p>
                <i className="bi bi-geo-alt-fill me-2" />
                Murang'a Town, Maguna Complex
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2" />
                +254(0)795629890
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2" />
                1.customercaregd@maguna-andu.co.ke
                <br />
                2.salesteam@maguna-andu.co.ke
              </p>
            </div>

            <div className="col-md-3">
              <h6 className="text-warning">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <ScrollLink
                    to="aboutus"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-white text-decoration-none"
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink
                    to="/offers"
                    className="text-white text-decoration-none"
                  >
                    Offers
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/opportunities"
                    className="text-white text-decoration-none"
                  >
                    Careers
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/feedback"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3 text-md-end text-center">
              <h6 className="text-warning">Follow Us</h6>
              <div className="d-flex justify-content-md-end justify-content-center">
                <a
                  href="https://facebook.com"
                  className="icon-facebook text-white me-3 fs-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook" />
                </a>
                <a
                  href="https://x.com"
                  className="icon-twitter text-white me-3 fs-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter-x" />
                </a>
                <a
                  href="https://instagram.com"
                  className="icon-instagram text-white me-3 fs-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram" />
                </a>
                <a
                  href="https://whatsapp.com"
                  className="icon-whatsapp text-white fs-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp" />
                </a>
              </div>
            </div>
          </div>

          <hr className="border-light my-4" />

          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">
                © {new Date().getFullYear()} Maguna Andu Wholesalers Ltd – All
                Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <RouterLink
                to="/privacy"
                className="text-warning text-decoration-none me-3"
              >
                Privacy Policy
              </RouterLink>
              <RouterLink
                to="/terms"
                className="text-warning text-decoration-none"
              >
                Terms of Service
              </RouterLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default AppWrapper;
