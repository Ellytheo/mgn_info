import React from 'react';

const Location = () => {
  return (
    <div className="container-fluid px-0"
      style={{
        padding: '30px 0',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#333',
      }}
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4970158014503!2d37.14886327345393!3d-0.7271473352674562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a30029112dd5%3A0x46225bc3166bb4bc!2sMaguna-Andu%20Wholesalers.(GODOWN)!5e0!3m2!1sen!2ske!4v1756453514708!5m2!1sen!2ske" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Maguna-Andu Wholesalers Location"
      ></iframe>
    </div>
  );
};

export default Location; 