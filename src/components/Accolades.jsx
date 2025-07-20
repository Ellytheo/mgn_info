import React from 'react';

const accolades = [
  { brand: 'Trade Kenya Awards', award: 'Top Regional Wholesaler – Central Kenya', year: '2023' },
  { brand: 'BSD Group & IPSOS', award: 'Most Trusted Wholesale Brand by Retailers', year: '2023' },
  { brand: 'East Africa Business Review', award: 'Fastest Growing Distribution Network', year: '2022' },
  { brand: 'Nyeri Business Chamber', award: 'Best Local Employer – Retail & Distribution Sector', year: '2022' },
  { brand: 'Pwani Golden Awards', award: 'Outstanding Contribution to FMCG Supply Chain', year: '2022' },
  { brand: 'Agri-Kenya Expo', award: 'Support Partner – Farm to Market Initiative', year: '2021' },
  { brand: 'Kenya Business Directory', award: 'Top 10 Local Brands to Watch', year: '2021' },
  { brand: 'Rotary Kenya', award: 'Community Impact Recognition – Rural Access Project', year: '2020' },
  { brand: 'Nyeri Youth League', award: 'Support for Youth Enterprise Training', year: '2020' },
  { brand: 'Magunas FC', award: 'Local Champions – Sports Sponsorship Recognition', year: '2019' },
];

const Accolades = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px', fontFamily: 'Segoe UI, sans-serif', color: '#333' }}>

      <div className='text-white p-3 rounded'
         style={{
    background: "linear-gradient(135deg,rgb(53, 197, 103),rgb(53, 197, 103))"
  }}
      >
      <div className='text-center p-3 m-2 hover-cards rounded'>
      <h1 className='text-danger'>Magunas Accolades</h1>
      <p>
        We are proud to be recognized as one of Kenya’s leading wholesalers and distributors — a family-grown business
        that began in 1990 in Murang'a County. From our humble beginnings, Magunas has grown into a respected brand with a
        strong presence in the wholesale and retail supply chain.
      </p>
      <p>
        We serve thousands of retailers, institutions, and community organizations every month. Our customers trust us for
        affordability, consistency, and genuine partnership. With every pallet sold and every order delivered, we strengthen
        our contribution to Kenya’s economic development — by supporting manufacturers, farmers, and small businesses, and
        by creating meaningful employment opportunities.
      </p>
      </div>

      <div className='text-center m-3 p-3 hover-cards rounded'>
     <h2 className='text-danger'>Our Guiding Principle</h2>
      <p >
        Our customers trust us, and our communities support us — that’s why we keep growing. At Magunas, we believe that
        wholesale should not only be efficient but empowering. Our spaces are more than stores; they are platforms for
        growth, connection, and opportunity. Thank you for being part of the Magunas journey.
      </p>
      </div>
     </div>
      <h2 className='text-danger mt-3'>Awards & Recognition</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Awarding Body</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Award</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Year</th>
          </tr>
        </thead>
        <tbody>
          {accolades.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{item.brand}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{item.award}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
  );
};

export default Accolades;
