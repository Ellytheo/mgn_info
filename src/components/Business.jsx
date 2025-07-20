import React from 'react'
import pic2 from '../productsimages/mn-50.jpg';
import pic3 from '../productsimages/mn-51.jpg'; 
import pic4 from '../productsimages/mn-52.jpg';  

const Business = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px', fontFamily: 'Segoe UI, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <div className='text-center rounded text-white p-3'
           style={{
    background: "linear-gradient(135deg,rgb(53, 197, 103),rgb(53, 197, 103))"
  }}
      >
        <div className=' hover-cards rounded text-dark'>
      <h1 className='text-danger'>Magunas Bulk Selling</h1>
      <p>
        Magunas Distributors and Wholesalers is a trusted supplier of bulk goods across Kenya, catering to a wide range of clients including retailers, supermarkets, schools, restaurants, and other institutions. Our bulk selling model is designed to provide high-demand consumer products in large quantities at competitive wholesale prices. We deal in staple commodities such as maize and wheat flour (sold in 50kg bags), sugar, rice, cooking oil in 10L and 20L jerrycans, beverages by the crate, and cleaning products in industrial-size packaging. By purchasing directly from manufacturers and working with established logistics partners, we ensure consistent product availability, fast turnaround times, and efficient distribution to our clients nationwide.
      </p>
      <p>
        At Magunas, bulk selling is more than just volume—it’s about delivering value, reliability, and business support. We work closely with SMEs, institutions, and resellers to offer tailored solutions based on their specific needs, including order planning, flexible payment terms, and seasonal stock adjustments. Our dedicated wholesale team ensures that each client receives personalized service, timely deliveries, and quality assurance on every order. Whether you're stocking a retail shop or supplying a large institution, Magunas stands out as a dependable partner in wholesale distribution—committed to helping you scale sustainably and profitably.
      </p>
      </div>
    </div>

    <div className='row'>
    <div className='col-md-4'> 
        <img 
        src={pic2} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
    </div>
    <div className='col-md-4'> 
        <img 
        src={pic3} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
    </div>
    <div className='col-md-4'> 
        <img 
        src={pic4} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
    </div>
    </div>
    </div>
  )
}

export default Business
