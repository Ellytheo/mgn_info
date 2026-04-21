import React from 'react';

const Location = () => {
  return (
    <section className="mg-section mg-section--white">
      <div className="mg-section__inner">

        {/* Header */}
        <div className="mg-section__header mg-section__header--center">
          <div className="mg-section__label reveal">Find Us</div>
          <h2 className="mg-section__title reveal delay-1">
            Visit Our <em>Store</em>
          </h2>
          <p className="mg-section__desc reveal delay-2">
            Located in the heart of Murang'a Town oppossite MUWASCO offices . Walk in any day
            and experience the quality and variety that has served Kenya for 30+ years.
          </p>
        </div>

        {/* Info pills */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
          className="reveal"
        >
          {[
            { icon: 'bi-geo-alt-fill', text: "Murang'a Town OPP MUWASCO offices" },
            { icon: 'bi-telephone-fill', text: '+254 795 629 890' },
            { icon: 'bi-clock-fill', text: 'Mon – Sat: 7:00 AM – 5:00 PM' },
            { icon: 'bi-envelope-fill', text: 'customercaregd@maguna-andu.com' },
          ].map((item, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                background: 'var(--white)',
                border: '1.5px solid rgba(7, 31, 16, 0.08)',
                borderRadius: 'var(--r-pill)',
                padding: '0.65rem 1.3rem',
                boxShadow: 'var(--clay-sm)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-700)',
                whiteSpace: 'nowrap',
              }}
            >
              <i
                className={`bi ${item.icon}`}
                style={{ color: 'var(--g-600)', fontSize: '1rem' }}
              />
              {item.text}
            </div>
          ))}
        </div>

        {/* Map embed — styled */}
        <div
          className="reveal"
          style={{
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--clay-lg)',
            border: '4px solid rgba(7, 31, 16, 0.08)',
            lineHeight: 0,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4970158014503!2d37.14886327345393!3d-0.7271473352674562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a30029112dd5%3A0x46225bc3166bb4bc!2sMaguna-Andu%20Wholesalers.(GODOWN)!5e0!3m2!1sen!2ske!4v1756453514708!5m2!1sen!2ske"
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maguna-Andu Wholesalers Location"
          />
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}
          className="reveal"
        >
          <a
            href="https://maps.google.com/?q=Maguna-Andu+Wholesalers+Murang'a"
            target="_blank"
            rel="noreferrer"
            className="btn-mg-green"
          >
            <i className="bi bi-map-fill" /> Open in Google Maps
          </a>
          <a
            href="https://wa.me/254795629890"
            target="_blank"
            rel="noreferrer"
            className="btn-mg-outline"
          >
            <i className="bi bi-whatsapp" /> WhatsApp Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Location;