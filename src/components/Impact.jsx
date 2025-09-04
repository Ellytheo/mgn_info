import React from 'react';
import pic5 from '../productsimages/mn-24.jpg'; 

const Impact = () => {
  return (
    <div className="container-fluid px-0">

      <div className='text-white p-4 rounded text-center'
         style={{
    background: "linear-gradient(135deg,rgb(53, 197, 103),rgb(53, 197, 103))",
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    margin: '2rem 0'
  }}
      >
      <h1 className="text-warning fw-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Magunas ESG and Occupational Health & Safety (OHS) Framework</h1>
       <hr className="divider" style={{ borderColor: '#ffc107', borderWidth: '2px' }}></hr>
        <div className="p-4 rounded text-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <h2 className="text-warning fw-bold fs-2">1. Occupational Health and Safety (OHS)</h2>
        <h3 className="text-light">What We've Done</h3>
        <p className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          At Magunas, we are committed to ensuring the safety and well-being of all our employees.
          Our OHS Program is compliant with legal standards and focuses on accident prevention,
          safety awareness, and accountability.
        </p>

        <h4 className="text-warning fw-bold fs-3">Key Components of Our OHS Program:</h4>
        <div className='row justify-content-center'>
        <div className='col-md-6'>
        <ul className="text-light text-start" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>Workplace Risk Assessments</li>
          <li>Joint Health and Safety Committees</li>
          <li>Routine Workplace Inspections</li>
          <li>Fire Safety Implementation</li>
          <li>Annual Third-Party Safety Audits</li>
          <li>Ongoing Health & Safety Training</li>
          <li>Pre-Annual & Exit Medical Exams</li>
          <li>Traffic and Transport Safety Management</li>
        </ul>
        </div>

        <div className='col-md-5 text-center'>
          <img 
        src={pic5} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
        </div>

        </div>

        <h4 className="text-warning fw-bold fs-3">Incident Management Plan:</h4>
        <p className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          All workplace incidents must be reported within <strong>24 hours</strong>. Immediate investigation and action follow each incident, ensuring continuous learning and mitigation.
        </p>
        </div>
      

      <div className="p-4 rounded mt-4 text-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <h2 className="text-warning fw-bold fs-2">2. Corporate Social Responsibility (CSR)</h2>
        <p className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          Magunas engages in community-driven initiatives that include:
        </p>
        <ul className="text-light text-start" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>Menstrual Hygiene Programs</li>
          <li>Charity Activations and Donations</li>
          <li>Coin Collection Drives</li>
          <li>Sourcing 2 Equal Project (Gender Equality in Procurement)</li>
        </ul>
      </div>

      <div className="p-4 rounded mt-4 text-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <h2 className="text-warning fw-bold fs-2">3. Food Safety and Hygiene</h2>
        <p className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          Magunas prioritizes the safe procurement and distribution of food. We aim to exceed
          customer expectations through strict food safety controls.
        </p>
        <ul className="text-light text-start" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>ISO 22000 Certification underway at select branches</li>
          <li>Standardized Food Safety and Hygiene Protocols</li>
          <li>Staff Training on Food Handling</li>
        </ul>
      </div>

      <div className="p-4 rounded mt-4 text-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <h2 className="text-warning fw-bold fs-2">4. ESG Achievements</h2>
        <ul className="text-light text-start" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>ESMS Training across branches</li>
          <li>Fire Safety Awareness Programs</li>
          <li>Traffic Control Training & Video Education</li>
          <li>Annual Compliance Audits (Environment, OHS, Fire)</li>
          <li>Statutory Risk Assessments</li>
          <li>Mandatory OHS, Fire Safety & First Aid Training</li>
          <li>Annual Electrical Installation Inspections</li>
          <li>Workplace Registration and Renewals</li>
          <li>Issuance of OHS Abstracts & General Registers</li>
          <li>95% Medical Surveillance Coverage</li>
          <li>PPE Program (Training and Distribution)</li>
        </ul>
      </div>

      <div className="p-4 rounded mt-4 text-center" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
        <h2 className="text-warning fw-bold fs-2">Our Impact: Operating Today with the Future in Mind</h2>
        <p className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          Our goal at Magunas is to go beyond compliance and create meaningful, long-term
          sustainability. Our ESG efforts are aligned with the pillars of:
        </p>
        <ul className="text-light text-start" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          <li>Environmental Management</li>
          <li>Occupational Health & Safety</li>
          <li>Corporate Social Responsibility</li>
          <li>Food Safety</li>
        </ul>
        <p className="text-light" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}><strong>
          We continuously reassess our priorities to stay impactful, future-forward, and responsible.
        </strong></p>
      </div>
      </div>

      <footer className="text-center p-4" style={{ background: 'rgba(0,0,0,0.1)' }}>
        <p className="text-success fs-5"><strong>Maguna-andu wholesalers – price for growth.</strong></p>
      </footer>
    </div>
  );
};

export default Impact;
