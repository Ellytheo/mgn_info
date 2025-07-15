import React from 'react';
import { Row, Col, Card, Typography, Avatar } from 'antd';

const { Title, Paragraph } = Typography;

const testimonials = [
  {
    name: 'Emma',
    year: 'Class of 2023',
    quote:
      'Ms. Johnson made me actually enjoy reading for the first time. Her classes were always engaging and she really cared about each of us as individuals.',
    color: '#0d6efd',
  },
  {
    name: 'Marcus',
    year: 'Class of 2022',
    quote:
      "The writing skills I learned in Ms. Johnson's class have helped me tremendously in college. She prepared us for real-world communication.",
    color: '#198754',
  },
  {
    name: 'Sophia',
    year: 'Class of 2023',
    quote:
      'Ms. Johnson creates a safe space where everyone feels comfortable sharing their ideas. Her classroom felt like a second home.',
    color: '#6f42c1',
  },
  {
    name: 'David',
    year: 'Class of 2021',
    quote:
      "She doesn't just teach English, she teaches life skills. Ms. Johnson helped me find my voice and confidence to speak up.",
    color: '#fd7e14',
  },
];

const Testimonials = () => {
  return (
    <section style={{ background: '#4d4a4aff', padding: '60px 0' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 16px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 48, color: '#e90c1eff' }}>
          Student Testimonials
        </Title>
        <Row gutter={[24, 24]}>
          {testimonials.map((t, index) => (
            <Col key={index} xs={24} md={12}>
              <Card
                bordered={false}
                style={{
                  borderLeft: `5px solid ${t.color}`,
                  borderRadius: 12,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                }}
              >
                <Paragraph italic style={{ fontSize: '1rem', color: '#555' }}>
                  “{t.quote}”
                </Paragraph>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
                  <Avatar
                    style={{
                      backgroundColor: t.color,
                      marginRight: 12,
                      fontWeight: 'bold',
                    }}
                  >
                    {t.name.charAt(0)}
                  </Avatar>
                  <div>
                    <strong>{t.name}</strong>
                    <br />
                    <small style={{ color: '#888' }}>{t.year}</small>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
