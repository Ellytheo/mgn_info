import React from 'react';
import downloadImg from '../images/pic5.jpg'; 
import pic1 from '../productsimages/mn-70.jpg';
import pic2 from '../productsimages/mn-71.jpg';
import pic3 from '../productsimages/mn-80.jpg';

const Opportunities = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px', fontFamily: 'Segoe UI, sans-serif', color: '#333' }}>
      <strong>
<div className="opp flex-container mantra-cars row container-fluid">
  <div className="text-content col-md-5 text-dark py-3 ">
    <h1 className='text-danger fs-1'><i>Opportunities at Magunas</i></h1>
    <p><i><strong>
      At Magunas Wholesalers and Distributors, we are committed to creating a positive, professional, and rewarding work environment.
      As one of Kenya’s trusted wholesale and distribution networks, we are continuously growing to better serve our clients. We offer
      opportunities in areas such as logistics, warehouse operations, sales, administration, and customer service. Magunas is an equal
      opportunity employer.
      </strong>
      </i>
    </p>
  </div>

  <div className="col-md-6 d-flex justify-content-end pe-0 py-0">
    <img src={downloadImg} alt="Opportunities" className="side-image img-fluid" />
  </div>
</div>

<div className='row'>
<div className='col-md-4 p-2'>
      <h2 className='text-danger fs-2'><i>Working at Magunas</i></h2>
      <h3 className='text-success fs-4'>We believe in developing talent and offering every employee a chance to grow.</h3>
      <p>
         From entry-level roles to senior positions,
        Magunas provides a clear career path supported by mentorship, skill-building programs, and a culture of continuous learning.
        Whether you're in logistics, procurement, or customer support, there’s room to advance and make an impact.
      </p>
</div>
<div className='col-md-8'>
   <img 
        src={pic1} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
</div>
</div>


     <div className="d-flex justify-content-center p-4">
  <div className="align-items-center text-center col-md-5 m-3 con mantra-cars">
    <h2 className="text-danger fs-1"><i>Magunas People</i></h2>
    <p><strong>
      Our people are our strength. At Magunas, we take pride in fostering a team that is driven, ethical, and community-focused.
      We value dedication, reliability, and teamwork and we support each employee in achieving their full potential through
      recognition, training, and growth opportunities.
      </strong>
    </p>
  </div>
</div>

     <div className='row m-4'>
      <div className='col-md-6 p-0 rounded ABC'>
        <img 
        src={pic2} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }} 
      />
      </div>
      <div className='col-md-5'>
      <h2 className='text-danger fs-1'><i>What’s In It For You?</i></h2>
      <h3 className='text-success '>Join Magunas and be part of a company that values purpose and performance</h3>
      <p>
        We are currently hiring for positions such as warehouse staff,
        delivery drivers, stock controllers, field sales agents, and support roles in departments like finance, compliance, and procurement.
        We offer competitive salaries, job stability, performance incentives, and room to grow in a dynamic industry.
      </p>
      </div>
      </div>
<div className='row m-4'>
  <div className='col-md-5 mb-3'>
    <h2 className='text-danger fs-1'><i>Experienced Professionals</i></h2>
    <p>
      Have experience in supply chain, distribution, or wholesale management? We have leadership and specialist roles where your expertise
      can make a big difference. Magunas offers a structured environment where your contributions are recognized and rewarded.
    </p>
    <br />

    <h3 className='text-danger'><i>New to the Industry?</i></h3>
    
    <div className='bgc hover-card text-white p-3 rounded'>
      <p>
        Don’t worry — we provide hands-on training and mentoring to help you learn the ropes. Many of our best employees began with no prior
        wholesale experience. If you’re committed and eager to grow, Magunas is the place for you.
      </p>
    </div>
  </div>

  <div className='col-md-6 rounded p-0 '>
    <div className='mt-5'>
    <img 
        src={pic3} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '100%', objectFit: 'contain', width: '100%' }} 
      />
      </div>
  </div>
</div>

<div className='text-danger mantra-car p-3'>
      <h2><i>Important Notice</i></h2>
      <hr className='divider text-dark p-1' />
      <p>
        Please note: Magunas is an equal opportunity employer. We <u className='text-dark'>do not</u> request payment at any stage of the recruitment process.
        Be cautious of fraudulent job offers or interview requests that involve fees. All official communications come from our HR department
        using verified Magunas contact information.
      </p>
</div>
     <div className='text-center text-success lessm mantra-card  p-3 rounded'>
      <h1><i>Start Your Journey</i></h1>
      <p>
        Ready to join the Magunas family? Submit your application through our official career portal or visit any Magunas branch to inquire
        about available positions. From logistics to leadership, your opportunity is here.
      </p>
      </div>
      </strong>
    </div>
  );
};

export default Opportunities;
