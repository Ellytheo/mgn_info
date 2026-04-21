import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SECTIONS = [
  { id: "data-controller", label: "1. Data Controller" },
  { id: "data-collected", label: "2. Data We Collect" },
  { id: "lawful-basis", label: "3. Lawful Basis" },
  { id: "data-use", label: "4. How We Use Data" },
  { id: "third-parties", label: "5. Third Parties" },
  { id: "rights", label: "6. Your Rights (DPA 2019)" },
  { id: "retention", label: "7. Retention & Security" },
  { id: "cookies", label: "8. Cookies" },
  { id: "complaints", label: "9. Complaints" },
  { id: "contact", label: "10. Contact DPO" },
];

const Section = ({ id, title, children }) => (
  <section id={id} style={{ marginBottom: "3rem", scrollMarginTop: "120px" }}>
    <h2
      style={{
        fontFamily: "var(--font-head)",
        fontSize: "1.3rem",
        fontWeight: 800,
        color: "var(--g-800)",
        marginBottom: "1rem",
        paddingBottom: "0.6rem",
        borderBottom: "2px solid var(--g-100)",
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      {title}
    </h2>
    <div style={{ color: "var(--text-700)", lineHeight: "1.85", fontSize: "0.97rem" }}>
      {children}
    </div>
  </section>
);

const Li = ({ children }) => (
  <li
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "0.6rem",
      marginBottom: "0.5rem",
      color: "var(--text-700)",
      fontSize: "0.95rem",
      lineHeight: "1.75",
    }}
  >
    <span style={{ color: "var(--g-500)", fontWeight: 700, marginTop: "2px", flexShrink: 0 }}>✓</span>
    <span>{children}</span>
  </li>
);

const RightCard = ({ title, desc }) => (
  <div
    style={{
      background: "var(--g-50)",
      border: "1.5px solid var(--g-100)",
      borderRadius: "var(--r-md)",
      padding: "1.25rem 1.5rem",
      transition: "border-color 0.2s, transform 0.2s",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--g-300)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--g-100)"; e.currentTarget.style.transform = "translateY(0)"; }}
  >
    <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--g-700)", marginBottom: "0.4rem" }}>{title}</div>
    <div style={{ fontSize: "0.88rem", color: "var(--text-500)", lineHeight: "1.65" }}>{desc}</div>
  </div>
);

const Privacy = () => {
  const [activeId, setActiveId] = useState("data-controller");
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handler = () => {
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveId(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ background: "var(--page-bg)", minHeight: "100vh" }}>
      <Helmet>
        <title>Privacy Policy | Maguna-Andu Wholesalers</title>
        <meta
          name="description"
          content="Review the Maguna-Andu Wholesalers Privacy Policy. Our commitment to protecting your personal data in compliance with the Kenya Data Protection Act (DPA 2019)."
        />
        <link rel="canonical" href="https://maguna-andu.com/privacy" />
      </Helmet>
      <style>{`
        .legal-page { background: var(--page-bg); min-height: 100vh; }

        /* Nav */
        .legal-nav { position: sticky; top: 0; z-index: 100; padding: 0.85rem 5%; display: flex; align-items: center; justify-content: space-between; background: rgba(7,31,16,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .legal-nav__brand { font-family: var(--font-head); font-weight: 900; color: #fff; font-size: 1.05rem; }
        .legal-nav__brand span { color: var(--amber-light); }
        .legal-back-btn { display: inline-flex; align-items: center; gap: 0.45rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.22); color: #fff; padding: 0.45rem 1.1rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; text-decoration: none; transition: all 0.22s ease; }
        .legal-back-btn:hover { background: var(--amber); border-color: var(--amber); color: #fff; transform: translateX(-3px); box-shadow: 0 4px 16px rgba(245,166,35,0.35); }

        /* Hero */
        .legal-hero { padding: 5rem 5% 4rem; color: #fff; position: relative; overflow: hidden; }
        .legal-hero__meta { display: flex; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }

        /* Layout */
        .legal-layout { max-width: 1280px; margin: 0 auto; padding: 4rem 5%; display: grid; grid-template-columns: 260px 1fr; gap: 4rem; align-items: flex-start; }
        .legal-sidebar { position: sticky; top: 80px; background: #fff; border-radius: var(--r-lg); box-shadow: var(--clay-md); overflow: hidden; }
        .legal-sidebar__head { padding: 1.25rem 1.5rem; }
        .legal-sidebar__nav { padding: 1rem; }
        .legal-sidebar__link { display: block; padding: 0.5rem 0.75rem; border-radius: var(--r-sm); font-size: 0.82rem; text-decoration: none; transition: all 0.2s; margin-bottom: 2px; }

        /* Data grids */
        .legal-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
        .legal-rights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .legal-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

        /* Table */
        .legal-table-wrap { border: 1.5px solid var(--g-100); border-radius: var(--r-md); overflow-x: auto; margin-bottom: 1.5rem; }
        .legal-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 500px; }

        /* === RESPONSIVE =============================================== */
        @media (max-width: 1024px) {
          .legal-layout { grid-template-columns: 220px 1fr; gap: 2.5rem; }
        }
        @media (max-width: 900px) {
          .legal-layout { grid-template-columns: 1fr; gap: 2rem; padding: 2rem 5%; }
          .legal-sidebar { display: none; }
          .legal-card-grid { grid-template-columns: 1fr; }
          .legal-rights-grid { grid-template-columns: 1fr; }
          .legal-contact-grid { grid-template-columns: 1fr; }
          .legal-hero { padding: 3rem 5% 2.5rem; }
          .legal-hero__meta { gap: 1.25rem; }
        }
        @media (max-width: 600px) {
          .legal-nav__brand { font-size: 0.9rem; }
          .legal-back-btn { font-size: 0.78rem; padding: 0.4rem 0.9rem; }
          .legal-layout { padding: 1.5rem 1rem; }
          .legal-hero { padding: 2.5rem 1rem 2rem; }
        }
      `}</style>

      {/* Minimal standalone navbar */}
      <nav className="legal-nav">
        <div className="legal-nav__brand">
          Maguna-Andu <span>Wholesalers</span>
        </div>
        <Link
          to="/"
          className="legal-back-btn"
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={btnHovered ? { background: "var(--amber)", borderColor: "var(--amber)", transform: "translateX(-3px)", boxShadow: "0 4px 16px rgba(245,166,35,0.35)" } : {}}
        >
          <i className="bi bi-arrow-left" /> Back to Home
        </Link>
      </nav>
      {/* ── Hero Banner ─────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--g-900) 0%, var(--g-800) 60%, #1a3d2a 100%)",
          padding: "5rem 5% 4rem",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(245,166,35,0.18)",
              border: "1px solid rgba(245,166,35,0.35)",
              color: "var(--amber-light)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              marginBottom: "1.5rem",
            }}
          >
            <i className="bi bi-shield-check" /> Kenya DPA 2019 Compliant
          </div>
          <h1
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Privacy <span style={{ background: "linear-gradient(90deg, var(--amber-light), var(--g-300))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Policy</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "600px", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Maguna-Andu Wholesalers Ltd is committed to protecting and respecting your privacy
            in accordance with the <strong style={{ color: "#fff" }}>Kenya Data Protection Act, 2019 (No. 24 of 2019)</strong> and
            all applicable Kenyan laws.
          </p>
          <div className="legal-hero__meta">
            {[["Last Updated", "April 2025"], ["Effective Date", "April 2025"], ["Governing Law", "Republic of Kenya"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "2px" }}>{k}</div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "#fff" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content + Sidebar ──────────────────── */}
      <div className="legal-layout">
        {/* Sticky sidebar TOC */}
        <aside className="legal-sidebar">
          <div className="legal-sidebar__head" style={{ background: "var(--g-900)", color: "#fff" }}>
            <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase" }}>
              <i className="bi bi-list-ul me-2" />Table of Contents
            </div>
          </div>
          <nav className="legal-sidebar__nav">
            {SECTIONS.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  display: "block",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "var(--r-sm)",
                  fontSize: "0.82rem",
                  fontWeight: activeId === s.id ? 700 : 500,
                  color: activeId === s.id ? "var(--g-700)" : "var(--text-500)",
                  background: activeId === s.id ? "var(--g-50)" : "transparent",
                  borderLeft: activeId === s.id ? "3px solid var(--g-600)" : "3px solid transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  marginBottom: "2px",
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main>
          <Section id="data-controller" title="1. Data Controller Identity">
            <p style={{ marginBottom: "1rem" }}>
              <strong>Maguna-Andu Wholesalers (K) Ltd</strong> ("we," "us," or "our"), registered and operating under the laws of Kenya, acts as the <strong>Data Controller</strong> as defined under Section 2 of the Kenya Data Protection Act, 2019.
            </p>
            <div style={{ background: "var(--g-50)", border: "1px solid var(--g-100)", borderRadius: "var(--r-md)", padding: "1.25rem 1.5rem" }}>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--g-800)", marginBottom: "0.75rem" }}>Registered Details</div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  ["Entity Name", "Maguna-Andu Wholesalers (K) Ltd"],
                  ["Physical Address", "Murang'a Town, opposite MUWASCO, Murang'a County, Kenya"],
                  ["Customer Email", "customercaregd@maguna-andu.co.ke"],
                  ["Sales Email", "salesteam@maguna-andu.co.ke"],
                  ["Phone", "+254 795 629 890"],
                ].map(([k, v]) => (
                  <li key={k} style={{ display: "flex", gap: "0.75rem", fontSize: "0.88rem" }}>
                    <span style={{ fontWeight: 700, color: "var(--text-900)", minWidth: "130px", flexShrink: 0 }}>{k}:</span>
                    <span style={{ color: "var(--text-500)" }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="data-collected" title="2. Personal Data We Collect">
            <p style={{ marginBottom: "1.25rem" }}>
              We collect personal data when you interact with our stores, website, delivery services, or apply for wholesale credit accounts. The categories of data we collect include:
            </p>
            <div className="legal-card-grid">
              {[
                { icon: "bi-person-badge", label: "Identity Data", desc: "Full name, National ID No., KRA PIN, date of birth" },
                { icon: "bi-telephone", label: "Contact Data", desc: "Physical address, phone number, email address" },
                { icon: "bi-building", label: "Business Data", desc: "Business name, business registration number, trade sector" },
                { icon: "bi-credit-card", label: "Financial Data", desc: "Bank account details, M-PESA number, credit history" },
                { icon: "bi-pc-display", label: "Technical Data", desc: "IP address, browser type, device info, cookies" },
                { icon: "bi-cart3", label: "Transaction Data", desc: "Purchase history, invoices, delivery records" },
              ].map(c => (
                <div key={c.label} style={{ background: "#fff", border: "1.5px solid var(--g-100)", borderRadius: "var(--r-md)", padding: "1rem 1.25rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--g-50)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--g-700)", fontSize: "1.1rem", flexShrink: 0 }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--text-900)", fontSize: "0.88rem", marginBottom: "2px" }}>{c.label}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-500)" }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-500)", background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.2)", borderRadius: "var(--r-sm)", padding: "0.75rem 1rem" }}>
              <i className="bi bi-info-circle me-2" style={{ color: "var(--amber-dark)" }} />
              We do not collect <strong>sensitive personal data</strong> (health, biometric, or political data) unless strictly required by law and with your explicit consent.
            </p>
          </Section>

          <Section id="lawful-basis" title="3. Lawful Basis for Processing (Section 30, DPA 2019)">
            <p style={{ marginBottom: "1.25rem" }}>
              We only process your personal data where we have a lawful basis to do so. Under the Data Protection Act 2019, our lawful bases are:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <Li><strong>Performance of Contract:</strong> Processing is necessary to fulfil your purchase orders, wholesale transactions, and delivery arrangements.</Li>
              <Li><strong>Legal Obligation:</strong> We must process data to comply with KRA requirements, KEBS standards, county licensing regulations, and anti-money laundering laws.</Li>
              <Li><strong>Legitimate Interests:</strong> To improve service quality, prevent fraud, conduct credit assessments, and protect our business from loss — where these interests are not overridden by your rights.</Li>
              <Li><strong>Consent (Section 32, DPA 2019):</strong> For direct marketing communications (SMS, email newsletters, WhatsApp). You may withdraw consent at any time without detriment.</Li>
            </ul>
          </Section>

          <Section id="data-use" title="4. How We Use Your Data">
            <p style={{ marginBottom: "1.25rem" }}>We use your personal data for the following purposes:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Li>Processing and fulfilling wholesale and retail orders</Li>
              <Li>Managing your account and credit facility</Li>
              <Li>Delivering goods to your specified address</Li>
              <Li>Issuing tax invoices and ETR receipts as required by KRA</Li>
              <Li>Sending transactional notifications (order confirmations, delivery alerts)</Li>
              <Li>Conducting credit risk assessments for wholesale accounts</Li>
              <Li>Resolving disputes, complaints, and returns</Li>
              <Li>Complying with statutory audits, court orders, or regulatory investigations</Li>
              <Li>Improving our website, product range, and service offerings based on usage data</Li>
              <Li>Marketing our products and promotions — <strong>only where you have given consent</strong></Li>
            </ul>
          </Section>

          <Section id="third-parties" title="5. Sharing Data with Third Parties">
            <p style={{ marginBottom: "1.25rem" }}>
              We do not sell your data. We may share it only in the following limited circumstances, under strict confidentiality obligations:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <Li><strong>Logistics Partners:</strong> Courier and transport companies engaged to deliver your wholesale orders.</Li>
              <Li><strong>Payment Processors:</strong> Banks, M-PESA (Safaricom), and other licensed payment service providers.</Li>
              <Li><strong>KRA (Kenya Revenue Authority):</strong> Tax authorities as legally required for VAT and income tax compliance.</Li>
              <Li><strong>Cloud Infrastructure:</strong> Secure, GDPR-and-DPA-compliant servers hosting our platform (e.g., Vercel, AWS).</Li>
              <Li><strong>Legal & Regulatory Bodies:</strong> Courts, police, or government agencies where required by law or court order.</Li>
              <Li><strong>Professional Advisors:</strong> Lawyers and auditors bound by professional confidentiality obligations.</Li>
            </ul>
            <div style={{ background: "rgba(245,166,35,0.08)", borderLeft: "4px solid var(--amber)", borderRadius: "0 var(--r-sm) var(--r-sm) 0", padding: "1rem 1.25rem", fontSize: "0.9rem" }}>
              All third-party data processors are contractually required to handle your data in compliance with the Kenya Data Protection Act 2019 and maintain equivalent security standards.
            </div>
          </Section>

          <Section id="rights" title="6. Your Rights Under the Data Protection Act 2019">
            <p style={{ marginBottom: "1.5rem" }}>
              You have the following rights under <strong>Part IV of the Kenya Data Protection Act, 2019</strong>. To exercise any of these rights, contact our Data Protection Officer (see Section 10):
            </p>
            <div className="legal-rights-grid">
              <RightCard title="Right to be Informed (S.26)" desc="You have the right to know what data we collect about you, why we collect it, and how it will be used — at the point of collection." />
              <RightCard title="Right of Access (S.26)" desc="You may request a copy of all personal data we hold about you. We will respond within 21 days." />
              <RightCard title="Right to Rectification (S.26)" desc="You may request correction of inaccurate or incomplete personal data without undue delay." />
              <RightCard title="Right to Erasure (S.26)" desc="Also known as the 'right to be forgotten.' You may request deletion of your data where it is no longer necessary, subject to legal retention obligations." />
              <RightCard title="Right to Object (S.26)" desc="You may object to processing for direct marketing purposes at any time. We will stop processing immediately upon receipt of your objection." />
              <RightCard title="Right to Data Portability (S.26)" desc="You may request your data in a structured, machine-readable format to transfer to another service provider." />
              <RightCard title="Right to Withdraw Consent" desc="Where processing is based on consent, you may withdraw it at any time without affecting past processing." />
              <RightCard title="Right to Lodge a Complaint" desc="You may file a complaint with the Office of the Data Protection Commissioner (ODPC) at odpc.go.ke if you believe your rights have been violated." />
            </div>
          </Section>

          <Section id="retention" title="7. Data Retention &amp; Security">
            <p style={{ marginBottom: "1rem" }}>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected. Our standard retention periods are:
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr style={{ background: "var(--g-800)", color: "#fff" }}>
                    <th style={{ padding: "0.85rem 1.25rem", textAlign: "left", fontFamily: "var(--font-head)" }}>Data Category</th>
                    <th style={{ padding: "0.85rem 1.25rem", textAlign: "left", fontFamily: "var(--font-head)" }}>Retention Period</th>
                    <th style={{ padding: "0.85rem 1.25rem", textAlign: "left", fontFamily: "var(--font-head)" }}>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Transaction & Invoice Records", "7 years", "KRA Tax Compliance (Income Tax Act)"],
                    ["Customer Account Data", "5 years after last activity", "Credit history & fraud prevention"],
                    ["Website Technical Logs", "12 months", "Security monitoring"],
                    ["Marketing Consent Records", "Until withdrawn + 3 years", "Legal evidence of consent (DPA 2019)"],
                    ["Employee Data", "7 years post-employment", "Employment Act, 2007"],
                  ].map(([cat, period, reason], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "var(--g-50)" }}>
                      <td style={{ padding: "0.75rem 1.25rem", color: "var(--text-700)", borderBottom: "1px solid var(--g-100)" }}>{cat}</td>
                      <td style={{ padding: "0.75rem 1.25rem", color: "var(--g-700)", fontWeight: 700, borderBottom: "1px solid var(--g-100)" }}>{period}</td>
                      <td style={{ padding: "0.75rem 1.25rem", color: "var(--text-500)", borderBottom: "1px solid var(--g-100)" }}>{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginBottom: "0.75rem" }}>We implement the following technical and organisational security measures:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <Li>SSL/TLS encryption for all data transmitted via our website</Li>
              <Li>Role-based access control (RBAC) ensuring staff only access data necessary for their role</Li>
              <Li>Regular internal security audits and staff data protection training</Li>
              <Li>Physical security measures at all branch locations and warehouses</Li>
              <Li>Incident response procedures for data breaches, including 72-hour notification to the ODPC as required by the DPA 2019</Li>
            </ul>
          </Section>

          <Section id="cookies" title="8. Cookies &amp; Tracking Technologies">
            <p style={{ marginBottom: "1rem" }}>
              Our website uses cookies and similar tracking technologies in accordance with the <strong>Kenya Information and Communications Act (Cap. 411A)</strong> and the DPA 2019. Cookies help us improve your experience. We use:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Li><strong>Strictly Necessary Cookies:</strong> Required for basic website functionality. These cannot be disabled.</Li>
              <Li><strong>Analytics Cookies (Vercel Analytics):</strong> Help us understand how visitors use our site (page views, bounce rate). Data is anonymised and aggregated. You may opt out.</Li>
              <Li><strong>Preference Cookies:</strong> Remember your settings (language, branch preference) to personalise your experience.</Li>
            </ul>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-500)" }}>
              You can control and manage cookies through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </Section>

          <Section id="complaints" title="9. Filing a Complaint (ODPC)">
            <p style={{ marginBottom: "1rem" }}>
              If you believe we have not handled your data in compliance with the Kenya Data Protection Act 2019, you have the right to lodge a complaint with the:
            </p>
            <div style={{ background: "linear-gradient(135deg, var(--g-50), #fff)", border: "2px solid var(--g-200)", borderRadius: "var(--r-lg)", padding: "1.75rem 2rem" }}>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "1.1rem", color: "var(--g-800)", marginBottom: "0.75rem" }}>
                <i className="bi bi-bank2 me-2" />Office of the Data Protection Commissioner (ODPC)
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {[
                  ["Website", "odpc.go.ke"],
                  ["Physical Address", "Nairobi, Kenya"],
                  ["Legal Basis", "Section 56, Kenya Data Protection Act 2019"],
                ].map(([k, v]) => (
                  <li key={k} style={{ display: "flex", gap: "0.75rem", fontSize: "0.88rem" }}>
                    <span style={{ fontWeight: 700, color: "var(--text-900)", minWidth: "110px" }}>{k}:</span>
                    <span style={{ color: "var(--text-500)" }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-500)" }}>
              We ask that you first raise your concern directly with us so we can investigate and resolve it before escalating to the ODPC.
            </p>
          </Section>

          <Section id="contact" title="10. Contact Our Data Protection Officer">
            <p style={{ marginBottom: "1.5rem" }}>
              For any data protection queries, access requests, or to exercise your rights under the DPA 2019, please contact our designated Data Protection Officer:
            </p>
            <div
              className="legal-contact-grid"
              style={{
                background: "linear-gradient(135deg, var(--g-900), var(--g-800))",
                borderRadius: "var(--r-xl)",
                padding: "2.5rem",
                color: "#fff",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "1.15rem", marginBottom: "1.25rem", color: "var(--amber-light)" }}>
                  <i className="bi bi-person-badge me-2" />Data Protection Officer
                </div>
                {[
                  ["bi-building", "Maguna-Andu Wholesalers (K) Ltd"],
                  ["bi-geo-alt", "Murang'a Town, opposite MUWASCO, Murang'a County"],
                  ["bi-envelope", "customercaregd@maguna-andu.co.ke"],
                  ["bi-telephone", "+254 795 629 890"],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.65rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.78)" }}>
                    <i className={`bi ${icon}`} style={{ color: "var(--amber-light)", marginTop: "2px", flexShrink: 0 }} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--amber-light)", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>Response Timelines</div>
                {[
                  ["Subject Access Request", "21 days"],
                  ["Rectification Request", "21 days"],
                  ["Erasure Request", "30 days"],
                  ["Complaint Response", "14 days"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "0.85rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>{k}</span>
                    <span style={{ fontWeight: 700, color: "#fff" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Footer note */}
          <div style={{ borderTop: "1.5px solid var(--g-100)", paddingTop: "1.5rem", fontSize: "0.82rem", color: "var(--text-300)", textAlign: "center" }}>
            <i className="bi bi-shield-check me-2" style={{ color: "var(--g-500)" }} />
            Maguna-Andu Wholesalers (K) Ltd — Privacy Policy © {new Date().getFullYear()}. All rights reserved. Compliant with the Kenya Data Protection Act, 2019 (Act No. 24 of 2019).
          </div>
        </main>
      </div>


    </div>
  );
};

export default Privacy;
