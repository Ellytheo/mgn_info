import React from "react";

const brands = [
  { name: "Pwani",              icon: "bi-droplet-fill" },
  { name: "Unilever",           icon: "bi-stars" },
  { name: "Ketepa",             icon: "bi-cup-hot-fill" },
  { name: "Bidco Africa",       icon: "bi-droplet-half" },
  { name: "MMM",                icon: "bi-box-seam" },
  { name: "UNGA Limited",       icon: "bi-bag-fill" },
  { name: "Interconsumer",      icon: "bi-shop-window" },
  { name: "Kapa Oil Refineries",icon: "bi-moisture" },
  { name: "Kariana Estates",    icon: "bi-tree-fill" },
  { name: "Diva",               icon: "bi-flower1" },
  { name: "Fresh Fri",          icon: "bi-fire" },
  { name: "Salit",              icon: "bi-sun-fill" },
];

const BrandsTicker = () => (
  <div className="mg-brands-ticker">
    <p className="mg-brands-ticker__label">Trusted Brands We Distribute</p>
    <div className="mg-brands-ticker__track-wrap">
      {/* Duplicate list for seamless infinite loop */}
      <div className="mg-brands-ticker__track">
        {[...brands, ...brands].map((b, i) => (
          <div className="mg-brands-ticker__item" key={i}>
            <i className={`bi ${b.icon}`} />
            <span>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BrandsTicker;
