import React from 'react';
import { Row, Col, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=Modern%20bright%20classroom%20environment%20with%20natural%20lighting%2C%20educational%20books%20and%20materials%20arranged%20aesthetically%2C%20warm%20and%20welcoming%20atmosphere%2C%20clean%20minimalist%20design%2C%20soft%20blue%20and%20white%20color%20scheme%2C%20inspiring%20learning%20space%20that%20feels%20professional%20yet%20approachable&width=1920&height=1080&seq=hero-bg&orientation=landscape')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
          {/* Text Section */}
          <Col xs={24} md={12}>
            <Title level={1} style={{ color: '#fff', fontSize: '3rem', fontWeight: 700 }}>
              Welcome to My Teaching Journey
            </Title>
            <Paragraph style={{ fontSize: '1.25rem', color: '#e5e7eb', marginTop: 16 }}>
              Passionate educator dedicated to inspiring young minds and fostering a love for learning through
              innovative teaching methods and genuine care for student success.
            </Paragraph>
            <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Button type="primary" size="large" onClick={() => scrollToSection('about')}>
                Learn More About Me
              </Button>
              <Button type="default" size="large" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>
          </Col>

          {/* Image Section */}
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20female%20high%20school%20teacher%20in%20modern%20classroom%20setting%2C%20warm%20genuine%20smile%2C%20wearing%20business%20casual%20attire%2C%20natural%20lighting%2C%20clean%20background%20with%20educational%20elements%20like%20books%20and%20whiteboard%2C%20approachable%20and%20confident%20demeanor%2C%20high%20quality%20portrait%20photography%2C%20inspiring%20educator%20look&width=400&height=500&seq=teacher-portrait&orientation=portrait"
              alt="Teacher Portrait"
              style={{
                maxWidth: 300,
                width: '100%',
                borderRadius: '50%',
                border: '4px solid #fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

// Scroll helper
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Hero;
