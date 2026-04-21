import React from "react";

const storyCards = [
  {
    num: "01",
    title: "Our Business",
    text: "Founded in early 1990, Magunas has grown into a trusted name in wholesale and distribution across Kenya. With a steadily growing network of outlets, we've built our reputation on reliability, affordability, and community connection. We proudly employ thousands of Kenyans united by a shared vision.",
  },
  {
    num: "02",
    title: "Our Leadership",
    text: "Under the leadership of John Mwangi, son of founder Simon Wachira, Magunas is pushing forward with fresh ideas, community-first values, and a dedication to operational excellence. John has been groomed within the business and brings a new generation's energy to the company's continued expansion.",
  },
  {
    num: "03",
    title: "Our Founding Story",
    text: "Magunas was founded by Simon Wachira in 1990. His journey began as a hawker at Mukuyu market in Murang'a. Through hard work and vision, he grew from street vending to owning a small shop — which became the first outlet of what would become a respected wholesale empire across Central Kenya.",
  },
  {
    num: "04",
    title: "Community Impact",
    text: "At Magunas, we understand that our business touches lives far beyond transactions. We actively support farmers, small-scale manufacturers, youth, and community programs that create positive change across Kenya.",
  },
  {
    num: "05",
    title: "Environmental Responsibility",
    text: "We focus on reducing our environmental footprint through sustainable practices, eco-friendly packaging, and waste reduction initiatives — because a healthy planet supports healthy communities.",
  },
  {
    num: "06",
    title: "Magunas Accolades",
    text: "Thank you for making Magunas one of Kenya's most trusted wholesale and retail brands. With 30+ years of experience and continued national growth, we're committed to serving you even better.",
  },
];

const About = () => {
  return (
    <section className="mg-section mg-section--sage">
      <div className="mg-section__inner">
        {/* Header */}
        <div className="mg-section__header mg-section__header--center">
          <div className="mg-section__label reveal">About Us</div>
          <h2 className="mg-section__title reveal delay-1">
            Over <i className="mg-story-card__num">30 Years</i> of Service to Kenyans
          </h2>
          <p className="mg-section__desc">
            Magunas Wholesalers and Distributors is a proudly Kenyan, family-owned business.
            At our core is a deep commitment to exceeding customer expectations —
            guided by our principle: <em>"We exist to make other people's lives better."</em>
          </p>
        </div>

        {/* Story grid */}
        <div className="mg-about-grid">
          {storyCards.map((card, i) => (
            <div className={`mg-story-card reveal delay-${(i % 3) + 1}`} key={i}>
              <div className="mg-story-card__num">{card.num}</div>
              <div className="mg-story-card__title">{card.title}</div>
              <p className="mg-story-card__text">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Founder quotes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <div className="mg-blockquote reveal reveal-left">
            In the early days, we strived to build a wholesale and retail network that
            truly met the needs of the mwananchi. That goal still guides us today.
            <cite>— Simon Wachira, Founder</cite>
          </div>
          <div className="mg-blockquote reveal reveal-right">
            In the early days, we set out to build something that worked for every
            Kenyan. That vision still drives everything we do.
            <cite>— John Mwangi, DIRECTOR</cite>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mg-about-grid { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
