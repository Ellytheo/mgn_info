import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SECTIONS = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "services", label: "2. Our Services" },
  { id: "orders", label: "3. Orders & Pricing" },
  { id: "payment", label: "4. Payment Terms" },
  { id: "delivery", label: "5. Delivery & Risk" },
  { id: "returns", label: "6. Returns & Refunds" },
  { id: "consumer-rights", label: "7. Consumer Rights (CPA 2012)" },
  { id: "ip", label: "8. Intellectual Property" },
  { id: "liability", label: "9. Limitation of Liability" },
  { id: "force-majeure", label: "10. Force Majeure" },
  { id: "governing-law", label: "11. Governing Law" },
  { id: "amendments", label: "12. Amendments" },
  { id: "contact", label: "13. Contact Us" },
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
    <span style={{ color: "var(--g-500)", fontWeight: 700, marginTop: "2px", flexShrink: 0 }}>›</span>
    <span>{children}</span>
  </li>
);

const AlertBox = ({ type = "info", children }) => {
  const configs = {
    info: { bg: "rgba(47,163,98,0.07)", border: "var(--g-300)", icon: "bi-info-circle", color: "var(--g-700)" },
    warning: { bg: "rgba(245,166,35,0.08)", border: "var(--amber)", icon: "bi-exclamation-triangle", color: "var(--amber-dark)" },
    important: { bg: "rgba(7,31,16,0.06)", border: "var(--g-800)", icon: "bi-shield-exclamation", color: "var(--g-800)" },
  };
  const cfg = configs[type];
  return (
    <div style={{ background: cfg.bg, borderLeft: `4px solid ${cfg.border}`, borderRadius: "0 var(--r-sm) var(--r-sm) 0", padding: "1rem 1.25rem", margin: "1rem 0", fontSize: "0.91rem" }}>
      <i className={`bi ${cfg.icon} me-2`} style={{ color: cfg.color }} />
      {children}
    </div>
  );
};

const Terms = () => {
  const [activeId, setActiveId] = useState("acceptance");
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
        <title>Terms of Service | Maguna-Andu Wholesalers</title>
        <meta
          name="description"
          content="Read the Maguna-Andu Wholesalers Terms of Service. Governed by the laws of Kenya, including the Consumer Protection Act and Sale of Goods Act."
        />
        <link rel="canonical" href="https://maguna-andu.com/terms" />
      </Helmet>
      <style>{`
        /* Nav */
        .legal-nav { position: sticky; top: 0; z-index: 100; padding: 0.85rem 5%; display: flex; align-items: center; justify-content: space-between; background: linear-gradient(90deg, rgba(14,40,25,0.96), rgba(26,61,40,0.96)); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.08); }
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

        /* Data grids */
        .legal-pay-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.25rem; }
        .legal-rights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .legal-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .legal-dispute-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }

        /* Table */
        .legal-table-wrap { border: 1.5px solid var(--g-100); border-radius: var(--r-md); overflow-x: auto; margin-bottom: 1.5rem; }
        .legal-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 520px; }

        /* === RESPONSIVE =============================================== */
        @media (max-width: 1024px) {
          .legal-layout { grid-template-columns: 220px 1fr; gap: 2.5rem; }
          .legal-dispute-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .legal-layout { grid-template-columns: 1fr; gap: 2rem; padding: 2rem 5%; }
          .legal-sidebar { display: none; }
          .legal-pay-grid { grid-template-columns: 1fr; }
          .legal-rights-grid { grid-template-columns: 1fr; }
          .legal-contact-grid { grid-template-columns: 1fr; }
          .legal-dispute-grid { grid-template-columns: 1fr; }
          .legal-hero { padding: 3rem 5% 2.5rem; }
          .legal-hero__meta { gap: 1.25rem; }
        }
        @media (max-width: 600px) {
          .legal-nav__brand { font-size: 0.88rem; }
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
          background: "linear-gradient(135deg, #0e2a1a 0%, #1a3d28 60%, var(--g-700) 100%)",
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
            <i className="bi bi-file-earmark-text" /> Kenya Consumer Protection Act 2012
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
            Terms of{" "}
            <span style={{ background: "linear-gradient(90deg, var(--amber-light), var(--g-300))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Service</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "620px", lineHeight: 1.75, fontSize: "1.05rem" }}>
            These Terms govern your relationship with <strong style={{ color: "#fff" }}>Maguna-Andu Wholesalers (K) Ltd</strong> and comply with the{" "}
            <strong style={{ color: "#fff" }}>Kenya Consumer Protection Act, 2012</strong>,{" "}
            <strong style={{ color: "#fff" }}>Sale of Goods Act (Cap. 31)</strong>, and all applicable Kenyan commercial law.
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
          <div className="legal-sidebar__head" style={{ background: "linear-gradient(135deg, #1a3d28, var(--g-800))", color: "#fff" }}>
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
          <Section id="acceptance" title="1. Acceptance of Terms">
            <p style={{ marginBottom: "1rem" }}>
              By visiting our stores, accessing our website at <strong>maguna-andu.com</strong>, placing an order, or entering into any business arrangement with Maguna-Andu Wholesalers (K) Ltd, you confirm that you have read, understood, and agree to be legally bound by these Terms of Service.
            </p>
            <p>
              These Terms apply to all customers — including retail shoppers, wholesale buyers, institutional clients, and B2B partners. If you do not agree with any part of these Terms, you should not use our services.
            </p>
            <AlertBox type="important">
              These Terms constitute a legally binding agreement under the <strong>Laws of Kenya</strong>, including the Kenya Consumer Protection Act 2012, Sale of Goods Act (Cap. 31), and the Law of Contract Act (Cap. 23).
            </AlertBox>
          </Section>

          <Section id="services" title="2. Our Services">
            <p style={{ marginBottom: "1rem" }}>Maguna-Andu Wholesalers (K) Ltd provides the following services:</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Li><strong>Wholesale Distribution:</strong> Bulk supply of FMCG goods, household products, and food items to registered retailers, institutions, and businesses.</Li>
              <Li><strong>Retail Commerce:</strong> Direct consumer sales from our branch network across Kenya.</Li>
              <Li><strong>Credit Account Facilities:</strong> Wholesale credit terms extended to pre-qualified business customers subject to a separate credit agreement.</Li>
              <Li><strong>Delivery Services:</strong> Transport and logistics of goods to customer-specified addresses within our service coverage area.</Li>
              <Li><strong>Digital Platform:</strong> This website provides product information and a means of communication. It is not a full e-commerce checkout platform.</Li>
            </ul>
          </Section>

          <Section id="orders" title="3. Orders &amp; Pricing">
            <p style={{ marginBottom: "1rem" }}>
              Placing an order with Maguna-Andu — whether in-person, by phone, WhatsApp, or through our website — constitutes an <strong>offer to purchase</strong>. An order is only accepted and a binding contract formed upon our written or electronic confirmation.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <Li><strong>Pricing:</strong> All prices displayed are in Kenya Shillings (KES) and are inclusive of applicable VAT at the standard Kenya Revenue Authority (KRA) rate, unless stated otherwise.</Li>
              <Li><strong>Price Changes:</strong> Wholesale prices are subject to periodic revision due to market conditions, exchange rates, or supplier pricing changes. Confirmed orders will not be affected by subsequent price changes.</Li>
              <Li><strong>Minimum Order Quantities (MOQ):</strong> Wholesale orders are subject to MOQs as communicated by our sales team at the time of ordering.</Li>
              <Li><strong>Stock Availability:</strong> We reserve the right to cancel or partially fulfil orders where stock is unavailable, with prompt notification and a full refund for unfulfilled items.</Li>
            </ul>
            <AlertBox type="warning">
              ETR receipts and VAT invoices are issued for all transactions in compliance with KRA requirements under the Value Added Tax Act, 2013 and the Tax Procedures Act, 2015.
            </AlertBox>
          </Section>

          <Section id="payment" title="4. Payment Terms">
            <p style={{ marginBottom: "1rem" }}>We accept the following payment methods:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
              {[
                { icon: "bi-phone", method: "M-PESA", detail: "Paybill / Till number payments accepted" },
                { icon: "bi-bank", method: "Bank Transfer", detail: "Direct to our KCB / Equity bank accounts" },
                { icon: "bi-cash-stack", method: "Cash", detail: "Accepted at all branch locations" },
                { icon: "bi-credit-card", method: "Cheque", detail: "Accepted from pre-approved business accounts" },
              ].map(p => (
                <div key={p.method} style={{ background: "#fff", border: "1.5px solid var(--g-100)", borderRadius: "var(--r-md)", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--g-50)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--g-700)", fontSize: "1.2rem", flexShrink: 0 }}>
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--text-900)", fontSize: "0.88rem" }}>{p.method}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-500)" }}>{p.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <Li><strong>Credit Accounts:</strong> Payment terms for approved credit customers are Net 30 days from invoice date unless a different arrangement is agreed in writing.</Li>
              <Li><strong>Late Payment:</strong> Overdue balances accrue interest at the rate of 2% per month. Accounts in arrears may have credit facilities suspended.</Li>
              <Li><strong>Payment in Full:</strong> Retail customers must pay in full before collection or delivery of goods.</Li>
            </ul>
          </Section>

          <Section id="delivery" title="5. Delivery &amp; Passing of Risk">
            <p style={{ marginBottom: "1rem" }}>
              We offer delivery services to designated areas across Kenya. All deliveries are subject to the following:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <Li><strong>Delivery Timelines:</strong> Estimated delivery windows are provided at order confirmation. These are estimates and not binding commitments. We are not liable for delays caused by third-party logistics, traffic, weather, or Acts of God.</Li>
              <Li><strong>Risk Transfer (Sale of Goods Act, Cap. 31):</strong> Risk of loss or damage to goods passes to the buyer upon physical delivery at the specified address, or upon collection from our premises — whichever occurs first.</Li>
              <Li><strong>Delivery Acceptance:</strong> The buyer or their authorised representative must sign the delivery note upon receipt. Signing confirms that goods were received in apparent good order and condition.</Li>
              <Li><strong>Shortages &amp; Transit Damage:</strong> Any shortage or visible damage must be noted on the delivery note at the time of delivery. Claims made after signing an unendorsed delivery note will not be entertained.</Li>
              <Li><strong>Failed Deliveries:</strong> If delivery cannot be completed due to customer absence or inaccessibility, a re-delivery fee may apply.</Li>
            </ul>
          </Section>

          <Section id="returns" title="6. Returns &amp; Refunds Policy">
            <AlertBox type="info">
              Our Returns Policy complies with the <strong>Kenya Consumer Protection Act, 2012 (Part V)</strong> which guarantees your right to a refund, replacement, or repair for defective goods.
            </AlertBox>
            <p style={{ marginBottom: "1.25rem", marginTop: "1rem" }}>
              We are committed to your satisfaction. Our returns policy is as follows:
            </p>
            <div style={{ border: "1.5px solid var(--g-100)", borderRadius: "var(--r-md)", overflow: "hidden", marginBottom: "1.5rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, #1a3d28, var(--g-800))", color: "#fff" }}>
                    <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontFamily: "var(--font-head)" }}>Scenario</th>
                    <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontFamily: "var(--font-head)" }}>Time Limit</th>
                    <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontFamily: "var(--font-head)" }}>Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Defective / spoiled goods", "Report immediately at delivery", "Replacement or full refund"],
                    ["Wrong item delivered", "48 hours from delivery", "Exchange or full refund"],
                    ["Quantity shortage", "Note on delivery note at time of delivery", "Replacement of missing items"],
                    ["Change of mind (sealed goods)", "7 days, original packaging", "Credit note or exchange"],
                    ["Perishable / fresh produce", "Non-returnable once accepted", "Only if demonstrably defective"],
                  ].map(([s, t, r], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "var(--g-50)" }}>
                      <td style={{ padding: "0.75rem 1rem", color: "var(--text-700)", borderBottom: "1px solid var(--g-100)" }}>{s}</td>
                      <td style={{ padding: "0.75rem 1rem", color: "var(--amber-dark)", fontWeight: 700, borderBottom: "1px solid var(--g-100)" }}>{t}</td>
                      <td style={{ padding: "0.75rem 1rem", color: "var(--g-700)", fontWeight: 600, borderBottom: "1px solid var(--g-100)" }}>{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <Li>Approved refunds are processed within <strong>7 working days</strong> via the original payment method.</Li>
              <Li>Wholesale refunds may be settled via <strong>credit notes</strong> applicable to future orders, unless a cash refund is agreed in writing.</Li>
              <Li>To initiate a return, contact: <strong>customercaregd@maguna-andu.com</strong> or call <strong>+254 795 629 890</strong>.</Li>
            </ul>
          </Section>

          <Section id="consumer-rights" title="7. Consumer Rights (Kenya Consumer Protection Act 2012)">
            <p style={{ marginBottom: "1.25rem" }}>
              Under the <strong>Kenya Consumer Protection Act, 2012 (Act No. 46 of 2012)</strong>, as a consumer you have the following statutory rights which we fully uphold:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { title: "Right to Safety", desc: "Products sold by Maguna-Andu comply with KEBS (Kenya Bureau of Standards) quality standards and applicable food safety regulations." },
                { title: "Right to Information", desc: "All products are accurately labelled with ingredients, expiry dates, country of origin, and pricing as required by law." },
                { title: "Right to Choose", desc: "We do not engage in misleading advertising, bait-and-switch, or unfair pressure selling tactics." },
                { title: "Right to Redress", desc: "You are entitled to a remedy (refund, replacement, or repair) for goods that are defective, misdescribed, or unfit for purpose." },
                { title: "Right to Fair Treatment", desc: "We do not discriminate against any customer on the basis of gender, ethnicity, religion, disability, or any other protected characteristic." },
                { title: "Right to Complaint", desc: "Unresolved complaints may be escalated to the Competition Authority of Kenya (CAK) at cak.go.ke." },
              ].map(r => (
                <div key={r.title} style={{ background: "var(--g-50)", border: "1.5px solid var(--g-100)", borderRadius: "var(--r-md)", padding: "1.25rem 1.5rem", transition: "border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--g-300)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--g-100)"}
                >
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--g-700)", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                    <i className="bi bi-check-circle-fill me-2" style={{ color: "var(--g-500)", fontSize: "0.85rem" }} />{r.title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-500)", lineHeight: "1.65" }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="ip" title="8. Intellectual Property">
            <p style={{ marginBottom: "1rem" }}>
              All content on this website and in our marketing materials — including the <strong>Maguna-Andu</strong> name, logo, brand guidelines, product photography, text, and graphics — is the intellectual property of Maguna-Andu Wholesalers (K) Ltd or its licensed partners, protected under:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <Li>The <strong>Kenya Copyright Act (Cap. 130)</strong></Li>
              <Li>The <strong>Kenya Trade Marks Act (Cap. 506)</strong></Li>
              <Li>International IP conventions to which Kenya is a signatory</Li>
            </ul>
            <AlertBox type="important">
              Unauthorised reproduction, adaptation, distribution, or commercial use of our intellectual property is a criminal offence and will be pursued through the courts.
            </AlertBox>
          </Section>

          <Section id="liability" title="9. Limitation of Liability">
            <p style={{ marginBottom: "1rem" }}>
              To the maximum extent permitted by the <strong>Laws of Kenya</strong>:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Li>Maguna-Andu's total liability to you for any claim shall not exceed the <strong>price paid for the specific goods or services</strong> giving rise to the claim.</Li>
              <Li>We are not liable for <strong>indirect, incidental, or consequential loss</strong>, including loss of profit, loss of business, or economic loss.</Li>
              <Li>We <strong>do not exclude</strong> liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any statutory rights that cannot legally be excluded under the Kenya Consumer Protection Act, 2012.</Li>
              <Li>Our website is provided "as is" without warranties of any kind. We do not guarantee uninterrupted, error-free access to our digital platforms.</Li>
            </ul>
          </Section>

          <Section id="force-majeure" title="10. Force Majeure">
            <p>
              Neither party shall be liable for delays or failure to perform any obligation under these Terms caused by circumstances beyond their reasonable control, including but not limited to: acts of God, natural disasters, strikes, government-imposed lockdowns, pandemics, civil unrest, infrastructure failure, or acts of war. The affected party must notify the other in writing within <strong>5 business days</strong> of the event arising.
            </p>
          </Section>

          <Section id="governing-law" title="11. Governing Law &amp; Dispute Resolution">
            <p style={{ marginBottom: "1rem" }}>
              These Terms of Service are governed exclusively by the <strong>Laws of the Republic of Kenya</strong>. Any dispute arising out of or in connection with these Terms shall be resolved as follows:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
              {[
                { step: "01", title: "Direct Negotiation", desc: "Parties shall first attempt to resolve the dispute amicably within 14 days of written notice." },
                { step: "02", title: "Mediation", desc: "If unresolved, either party may refer the dispute to a mediator under the Nairobi Centre for International Arbitration (NCIA) rules." },
                { step: "03", title: "Litigation", desc: "Disputes not settled by mediation are subject to the exclusive jurisdiction of the courts in Murang'a County or Nairobi." },
              ].map(s => (
                <div key={s.step} style={{ background: "#fff", border: "1.5px solid var(--g-100)", borderRadius: "var(--r-md)", padding: "1.5rem" }}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: "1.8rem", fontWeight: 900, color: "var(--g-100)", lineHeight: 1, marginBottom: "0.5rem" }}>{s.step}</div>
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--g-700)", marginBottom: "0.4rem", fontSize: "0.95rem" }}>{s.title}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-500)", lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="amendments" title="12. Amendments to These Terms">
            <p>
              We reserve the right to amend these Terms of Service at any time. Updated Terms will be published on this page with a revised effective date. Continued use of our services after such changes constitutes your acceptance of the new Terms. We recommend reviewing this page periodically.
            </p>
            <AlertBox type="info">
              For material changes affecting consumer rights, we will provide at least <strong>30 days' advance notice</strong> via our website or by direct communication where possible.
            </AlertBox>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p style={{ marginBottom: "1.5rem" }}>
              For any questions about these Terms, to raise a complaint, or to exercise your statutory rights, please contact us:
            </p>
            <div
              style={{
                background: "linear-gradient(135deg, #1a3d28, var(--g-800))",
                borderRadius: "var(--r-xl)",
                padding: "2.5rem",
                color: "#fff",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--amber-light)" }}>
                  <i className="bi bi-building me-2" />Maguna-Andu Wholesalers (K) Ltd
                </div>
                {[
                  ["bi-geo-alt", "Murang'a Town, opposite MUWASCO, Murang'a County, Kenya"],
                  ["bi-envelope", "customercaregd@maguna-andu.com"],
                  ["bi-envelope-fill", "salesteam@maguna-andu.com"],
                  ["bi-telephone", "+254 795 629 890"],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.65rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.78)" }}>
                    <i className={`bi ${icon}`} style={{ color: "var(--amber-light)", marginTop: "2px", flexShrink: 0 }} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, color: "var(--amber-light)", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>Regulatory Bodies</div>
                {[
                  ["Competition Authority of Kenya", "cak.go.ke"],
                  ["Kenya Revenue Authority", "kra.go.ke"],
                  ["Kenya Bureau of Standards (KEBS)", "kebs.org"],
                  ["ODPC (Data Complaints)", "odpc.go.ke"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "0.8rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>{k}</span>
                    <a href={`https://${v}`} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: "var(--amber-light)", textDecoration: "none" }}>{v}</a>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Footer note */}
          <div style={{ borderTop: "1.5px solid var(--g-100)", paddingTop: "1.5rem", fontSize: "0.82rem", color: "var(--text-300)", textAlign: "center" }}>
            <i className="bi bi-file-earmark-check me-2" style={{ color: "var(--g-500)" }} />
            Maguna-Andu Wholesalers (K) Ltd — Terms of Service © {new Date().getFullYear()}. Governed by the Laws of the Republic of Kenya.
            Compliant with the Consumer Protection Act 2012 &amp; Sale of Goods Act (Cap. 31).
          </div>
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          aside { display: none !important; }
          div[style*="gridTemplateColumns: 260px"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: 1fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Terms;
