import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { UserOutlined, BulbOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Biography = () => {
  return (
    <div style={{ padding: '3rem 1rem', backgroundColor: '#1f1f1f' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Title style={{ color: '#fff' }}>About Me</Title>
        <Paragraph style={{ color: '#ccc', fontSize: '16px', maxWidth: '600px', margin: 'auto' }}>
          Building bridges between curiosity and knowledge, one student at a time
        </Paragraph>
      </div>

      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{ backgroundColor: '#2a2a2a', color: '#fff' }}
            bodyStyle={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <UserOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={3} style={{ margin: '0 0 0 1rem', color: '#fff' }}>
                My Story
              </Title>
            </div>
            <Paragraph style={{ color: '#ccc' }}>
              With over 8 years of experience in high school education, I've had the privilege
              of teaching and mentoring hundreds of students. My journey began with a deep passion
              for literature and communication, which evolved into a calling to share that passion
              with the next generation.
            </Paragraph>
            <Paragraph style={{ color: '#ccc' }}>
              I hold a Master's degree in Education with a specialization in English Literature and
              have continuously pursued professional development to stay current with educational
              best practices and technology integration.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{ backgroundColor: '#2a2a2a', color: '#fff' }}
            bodyStyle={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <BulbOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
              <Title level={3} style={{ margin: '0 0 0 1rem', color: '#fff' }}>
                Teaching Philosophy
              </Title>
            </div>
            <blockquote style={{ borderLeft: '4px solid #722ed1', paddingLeft: '1rem', color: '#ccc', fontStyle: 'italic' }}>
              "Every student has the potential to excel when provided with the right support,
              encouragement, and learning environment tailored to their unique needs."
            </blockquote>
            <Paragraph style={{ color: '#ccc' }}>
              I believe in creating an inclusive classroom where students feel safe to express
              themselves, ask questions, and make mistakes as part of their learning journey. My
              approach combines traditional teaching methods with modern technology and interactive
              activities to engage all learning styles.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Biography;
