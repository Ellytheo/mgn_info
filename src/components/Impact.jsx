import React from "react";
import pic5 from "../productsimages/mn-24.jpg";

const impactSections = [
  {
    num: "01",
    title: "Occupational Health & Safety (OHS)",
    items: [
      "Workplace Risk Assessments",
      "Joint Health and Safety Committees",
      "Routine Workplace Inspections",
      "Fire Safety Implementation",
      "Annual Third-Party Safety Audits",
      "Health & Safety off-days",
      "Pre-Annual & Exit Medical Exams",
      "Traffic and Transport Safety Management",
    ],
    note: "All workplace incidents must be reported within 24 hours. Immediate investigation and action follow each incident.",
  },
  {
    num: "02",
    title: "Corporate Social Responsibility (CSR)",
    items: [
      "Menstrual Hygiene Programs",
      "Charity Activations and Donations",
      "Coin Collection Drives",
      "Sourcing 2 Equal Project (Gender Equality in Procurement)",
    ],
  },
  {
    num: "03",
    title: "Food Safety & Hygiene",
    items: [
      "ISO 22000 Certification underway at select branches",
      "Standardized Food Safety and Hygiene Protocols",
      "Staff Training on Food Handling",
    ],
  },
  {
    num: "04",
    title: "ESG Achievements",
    items: [
      "ESMS Training across all branches",
      "Fire Safety Awareness Programs",
      "Traffic Control Training & Video Education",
      "Annual Compliance Audits (Environment, OHS, Fire)",
      "Medical Surveillance encouragement",
      "PPE Program (Training and Distribution)",
      "Annual Electrical Installation Inspections",
    ],
  },
];

const pillars = [
  { icon: "bi-tree-fill", label: "Environmental Management" },
  { icon: "bi-shield-fill-check", label: "Occupational Health & Safety" },
  { icon: "bi-people-fill", label: "Corporate Social Responsibility" },
  { icon: "bi-apple", label: "Food Safety" },
];

const Impact = () => {
  return (
    <section className="mg-section mg-section--light">
      <div className="mg-section__inner">
        {/* Header */}
        <div className="mg-section__header mg-section__header--center">
          <div className="mg-section__label reveal">Sustainability</div>
          <h2 className="mg-section__title reveal delay-1">
            ESG &amp; <em>Impact</em> Framework
          </h2>
          <p className="mg-section__desc reveal delay-2">
            Operating today with the future in mind — our ESG programme aligns
            workplace safety, community development, food integrity, and environmental
            responsibility.
          </p>
        </div>

        {/* ESG Pillars strip */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--white)",
                border: "1.5px solid rgba(7, 31, 16, 0.08)",
                borderRadius: "var(--r-pill)",
                padding: "0.6rem 1.25rem",
                boxShadow: "var(--clay-sm)",
                fontSize: "0.88rem",
                fontWeight: 700,
                color: "var(--text-700)",
              }}
            >
              <i className={`bi ${p.icon}`} style={{ color: "var(--g-600)", fontSize: "1rem" }} />
              {p.label}
            </div>
          ))}
        </div>

        {/* Impact image + intro */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "3rem",
          }}
          className="reveal"
        >
          <div
            style={{
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              boxShadow: "var(--clay-lg)",
              border: "4px solid rgba(7, 31, 16, 0.08)",
            }}
          >
            <img
              src={pic5}
              alt="Maguna-Andu Wholesalers ESG and Sustainability Program"
              style={{ width: "100%", height: "320px", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="mg-section__label" style={{ color: "var(--g-600)" }}>Our Commitment</div>
            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 900,
                color: "var(--text-900)",
                marginBottom: "1rem",
                letterSpacing: "-0.5px",
              }}
            >
              Beyond Compliance
            </h3>
            <p style={{ color: "var(--text-500)", lineHeight: "1.75", marginBottom: "1.5rem" }}>
              Our goal at Magunas is to go beyond compliance and create meaningful,
              long-term sustainability. We continuously reassess our priorities to
              stay impactful, future-forward, and responsible.
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--text-300)", fontStyle: "italic" }}>
              "Maguna-Andu Wholesalers — Price for Growth."
            </p>
          </div>
        </div>

        {/* Impact cards grid */}
        <div className="mg-impact-grid">
          {impactSections.map((sec, i) => (
            <div className={`mg-impact-card reveal-zoom delay-${(i % 2) + 1}`} key={i}>
              <div className="mg-impact-card__num">{sec.num} — {sec.title}</div>
              <h3 className="mg-impact-card__title">{sec.title}</h3>
              <ul className="mg-impact-card__list">
                {sec.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              {sec.note && (
                <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--g-600)", fontWeight: 600, lineHeight: 1.6 }}>
                  <i className="bi bi-info-circle me-1" />
                  {sec.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Impact;
