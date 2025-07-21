import React from 'react';
import pic2 from '../productsimages/mn-20.jpg';
import pic4 from '../images/mg-20.jpg'; 
import pic5 from '../images/mg-25.jpg'; 
import pic1 from '../images/Award.jpg';
import pic3 from '../productsimages/mn-25.jpg'; 

const About = () => {
  return (
    <section id="about-magunas" style={{         
  padding: '1rem',
   background: 'linear-gradient(135deg, rgb(48, 158, 72), rgb(52, 184, 85), rgb(38, 129, 65), rgb(52, 139, 66))',
  backgroundSize: '400% 400%'
}}>
      <div className='text-center m-5'
       
 >
      <h2 className='text-danger'>About Magunas Wholesalers and Distributors</h2>
      <p><strong><i>Over 30 years of service to Kenyans</i></strong></p>
      <p className='text-light'>
        Magunas Wholesalers and Distributors is a proudly Kenyan, family-owned business that has been operating for over 30 years.
        At the core of our mission is a deep commitment to exceeding customer expectations by providing top-quality products and services
        to both retailers and individual shoppers.
        Guided by our core principle, <em>“We exist to make other people’s lives better,”</em> Magunas is more than a distribution chain —
        it's a legacy of service and reliability for everyday Kenyans.
      </p>
      </div>


      <div className='row '>
      <div className='col-md-4 mb-2 mantra-mon'>
        <div>
      <img 
        src={pic2} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '360px', objectFit: 'cover', width: '90%' }} 
      />
        </div>
      <h3 className='text-danger fs-1'>Our Business</h3>
      <hr></hr>
      <p className='text-light'>
        Founded in early 1990, Magunas has grown into a trusted name in wholesale and distribution across Kenya.
        With a steadily growing network of outlets, we’ve built our reputation on reliability, affordability, and community connection.
      </p>
      <p className='text-light'>
        We proudly employ thousands of Kenyans from all walks of life, united by a shared vision:
        to be the nation’s most dependable wholesale partner. When customers step into our stores,
        they know they'll experience Freshness, Quality, Variety, and Affordability.
      </p>
      <a href="/business
      "className='secondary learn-more-link fs-3'>Learn more</a>
      </div>

      <div className='col-md-4 mb-2 mantra-mon'> 
        <div>
                 <img 
        src={pic2} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '300px', objectFit: 'cover', width: '90%' }} 
      />
        </div>
      <h3 className='text-danger fs-1'>Our Leadership</h3>
      <hr></hr>
      <p className='text-light'>
        Under the leadership of John Mwangi, son of founder Simon Wachira, Magunas is pushing forward with fresh ideas,
        community-first values, and a dedication to operational excellence. John has been groomed within the business and brings a
        new generation’s energy to the company’s continued expansion.
      </p>
      </div>

       <div className='col-md-4 mb-2 mantra-mon '>
             <div>
                    <img 
        src={pic2} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '300px', objectFit: 'cover', width: '90%' }} 
      />
             </div>
      <h3 className='text-danger fs-1'>Our Founding Story</h3>
      <hr></hr>
      <p className='text-light'>
        Magunas was founded by Simon Wachira in 1990. His entrepreneurial journey began humbly as a hawker selling household items at Mukuyu market in Murang’a.
        Through hard work, vision, and persistence, he transitioned from street vending to owning a small shop.
        This shop became the first outlet of what would grow into a respected retail and wholesale empire in Central Kenya.
        From those modest roots, Magunas has grown to operate supermarkets, wholesale outlets, and hospitality ventures across the region.
      </p>
      <a href="/history"className='secondary learn-more-link fs-3'>Learn more</a>
     </div> 
     </div>
     
      <blockquote className='text-center m-5'>
        In the early days, we strived to build a wholesale and retail network that truly met the needs of the mwananchi.
        That goal still guides us today.
        <br />
        <cite>~ Simon Wachira</cite>
      </blockquote>

    <div className='row'>
        <div className='col-md-4 mb-2 mantra-mon'>
          <div>
                  <img 
        src={pic5} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '400px', objectFit: 'cover', width: '90%' }} 
      />
          </div>
      <h3 className='text-danger fs-1'>Our Impact</h3>
      <hr></hr>
      <p className='text-light'>
        At Magunas, we understand that our business touches lives far beyond transactions.
        We actively support farmers, small-scale manufacturers, youth, and community programs that create positive change across Kenya.
      </p>
      <a href="/impact"className='secondary learn-more-link mt-3 fs-3'>Learn more</a>
      </div>

      <div className='col-md-4 mb-2 mantra-mon'>
        <div>      <img 
        src={pic3} 
        alt="Magunas" 
        className="img-fluid rounded shadow-lg" 
        style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }} 
      /></div>

      <h4 className='text-danger fw-1'>Environmental Management</h4>
      <hr></hr>
      <p className='text-light'>We focus on reducing our environmental footprint through sustainable practices, eco-friendly packaging, and waste reduction initiatives.</p>
      </div>

       <div className='col-md-4 mb-2 mantra-mon'>
        <div>      
          <img 
                src={pic1} 
                alt="Magunas" 
                className="img-fluid rounded shadow-lg" 
                style={{ maxHeight: '300px', objectFit: 'contain', width: '100%' }} 
              /></div>
        
        <h3 className='text-danger fs-1'>Magunas Accolades</h3>
        <hr></hr>
      <p className='text-light'>
        Thank you for making Magunas one of Kenya’s most trusted wholesale and retail brands.
        With 30+ years of experience and continued national growth, we’re committed to serving you even better.
      </p>
      <a href="/accolades" className='secondary learn-more-link fs-3'>View Awards</a>
      </div>
     </div >

     <div>
      <blockquote className='text-center m-5'>
        In the early days, we set out to build something that worked for every Kenyan.
        That vision still drives everything we do.
        <br />
        <cite>~ John Mwangi</cite>
      </blockquote>
     </div>
      
    </section>
  );
};

export default About;
