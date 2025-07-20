import React from 'react';
import pic8 from '../images/pic8.jpg';

const Offers = () => {
  return (
    <div
      style={{
        maxWidth: '80%',
        margin: '0 auto',
        padding: '30px 5px',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#333',
      }}
    >
      {/* Header Section */}
      <div
        className="hd1 mb-1"
        style={{
          background: 'linear-gradient(135deg, rgb(130, 233, 188), rgb(17, 173, 93))',
          animation: 'gradientShift 12s ease infinite',
        }}
      >
        <h1 className="display-4 fw-bold text-center">Magunas Offers</h1>
      </div>

      {/* Main Content Section */}
      <div
        className="row py-4 align-items-center main"
        style={{
          background: 'linear-gradient(135deg, hsl(154, 72.5%, 68.6%), rgb(61, 139, 99))',
          animation: 'gradientShift 12s ease infinite',
        }}
      >
        {/* Text Column */}
        <div className="col-md-6 d-flex">
          <div className="my-auto">
            <h2 className="display-5 text-danger fw-bold">About Our Offers</h2>
            <b>
              <p>
                At Magunas Wholesalers and Distributors, we are proud to offer a wide variety of fast-moving consumer goods and bulk products
                at competitive wholesale prices. Our orange-labeled shelves in-store indicate items available at special discounted rates —
                a clear sign of great savings for our customers.
              </p>
              <p>
                Whether you’re restocking your shop, sourcing supplies for your institution, or simply shopping in bulk, Magunas ensures you
                get the best value through regular promotions and volume discounts throughout the year.
              </p>
            </b>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-md-6 d-flex justify-content-center">
          <div
            style={{
              border: '10px solid green',
              padding: '0',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            <img
              src={pic8}
              alt="Mission Visual"
              className="img-fluid"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>

     {/* Final Section - Updates */}
<div
  className="text-center m-0 mt-2 p-3"
  style={{
    border: '6px solid green',
    borderRadius: '15px',
    overflow: 'hidden', // ensures heading stays within bounds
    position: 'relative',
  }}
>
  <div className="marquee-container">
    <h2 className="fw-bold marquee-text">Stay Updated on All Our Deals</h2>
  </div>
  <strong><i>
  <p>
    Magunas runs consistent weekly and weekend offers, as well as seasonal campaigns tailored to holidays and business cycles.
    Visit our branches to check our promotional shelves, follow our official social media channels, or check with your Magunas
    account manager to stay up to date with active offers and discounts.
  </p>
  <p>
   " Keep checking this space or stop by one of our stores to explore real savings and unbeatable wholesale value every day!"
  </p></i></strong>
</div>

    </div>
  );
};

export default Offers;
