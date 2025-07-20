import React from 'react';
import pic5 from '../productsimages/mn-24.jpg'; 

const Impact = () => {
  return (
    <div className="esg-container">

      <div className='text-white p-3 rounded'
         style={{
    background: "linear-gradient(135deg,rgb(53, 197, 103),rgb(53, 197, 103))"
  }}
      >
      <h1 className="text-danger">Magunas ESG and Occupational Health & Safety (OHS) Framework</h1>
       <hr className="divider "></hr>
        <div className="hover-cards p-3 rounded">
        <h2 className="text-danger">1. Occupational Health and Safety (OHS)</h2>
        <h3>What We’ve Done</h3>
        <p>
          At Magunas, we are committed to ensuring the safety and well-being of all our employees.
          Our OHS Program is compliant with legal standards and focuses on accident prevention,
          safety awareness, and accountability.
        </p>

        <h4 className="text-danger">Key Components of Our OHS Program:</h4>
        <div className='row'>
        <div className='col-md-6'>
        <ul>
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

        <div className='col-md-5'>
          <img 
        src={pic5} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
        </div>

        </div>

        <h4 className="text-danger">Incident Management Plan:</h4>
        <p>
          All workplace incidents must be reported within <strong>24 hours</strong>. Immediate investigation and action follow each incident, ensuring continuous learning and mitigation.
        </p>
        </div>
      

      <div className="hover-cards p-3 rounded">
        <h2 className="text-danger">2. Corporate Social Responsibility (CSR)</h2>
        <p>
          Magunas engages in community-driven initiatives that include:
        </p>
        <ul>
          <li>Menstrual Hygiene Programs</li>
          <li>Charity Activations and Donations</li>
          <li>Coin Collection Drives</li>
          <li>Sourcing 2 Equal Project (Gender Equality in Procurement)</li>
        </ul>
      </div>

      <div className="hover-cards rounded p-3 mt-2">
        <h2 className="text-danger">3. Food Safety and Hygiene</h2>
        <p>
          Magunas prioritizes the safe procurement and distribution of food. We aim to exceed
          customer expectations through strict food safety controls.
        </p>
        <ul>
          <li>ISO 22000 Certification underway at select branches</li>
          <li>Standardized Food Safety and Hygiene Protocols</li>
          <li>Staff Training on Food Handling</li>
        </ul>
      </div>

      <div className="hover-cards rounded p-3 mt-2">
        <h2 className="text-danger">4. ESG Achievements</h2>
        <ul>
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

      <div className="hover-cards rounded p-3 mt-2">
        <h2 className="text-danger">Our Impact: Operating Today with the Future in Mind</h2>
        <p>
          Our goal at Magunas is to go beyond compliance and create meaningful, long-term
          sustainability. Our ESG efforts are aligned with the pillars of:
        </p>
        <ul>
          <li>Environmental Management</li>
          <li>Occupational Health & Safety</li>
          <li>Corporate Social Responsibility</li>
          <li>Food Safety</li>
        </ul>
        <p><strong>
          We continuously reassess our priorities to stay impactful, future-forward, and responsible.
        </strong></p>
      </div>
      </div>

      <footer>
        <p><strong>Magunas – Growing Sustainably, Serving Responsibly.</strong></p>
      </footer>
    </div>
  );
};

export default Impact;
