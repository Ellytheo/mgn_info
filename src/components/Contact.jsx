import React from 'react';
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Space,
} from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  return (
    <section style={{ backgroundColor: '#1f2937', padding: '60px 0', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Title level={2} style={{ color: '#fff' }}>Get In Touch</Title>
          <Paragraph style={{ color: '#cbd5e1', fontSize: 16 }}>
            I'd love to hear from students, parents, or fellow educators
          </Paragraph>
        </div>

        {/* Contact Cards */}
        <Row gutter={[24, 24]}>
          <Col md={12}>
            <Card bordered style={{ background: '#0d6efd20' }}>
              <Space align="start">
                <div style={iconStyle('#0d6efd')}>
                  <MailOutlined style={iconInnerStyle} />
                </div>
                <div>
                  <Title level={5}>Email</Title>
                  <Text strong>School Email:</Text>
                  <Paragraph style={{ marginBottom: 4, color: '#e2e8f0' }}>
                    sarah.johnson@highschool.edu
                  </Paragraph>
                  <Text strong>Professional Email:</Text>
                  <Paragraph style={{ color: '#e2e8f0' }}>
                    s.johnson.educator@gmail.com
                  </Paragraph>
                </div>
              </Space>
            </Card>
          </Col>

          <Col md={12}>
            <Card bordered style={{ background: '#19875420' }}>
              <Space align="start">
                <div style={iconStyle('#198754')}>
                  <PhoneOutlined style={iconInnerStyle} />
                </div>
                <div>
                  <Title level={5}>Phone & Office</Title>
                  <Text strong>School Phone:</Text>
                  <Paragraph style={{ marginBottom: 4, color: '#e2e8f0' }}>
                    (555) 123-4567 ext. 234
                  </Paragraph>
                  <Text strong>Office Hours:</Text>
                  <Paragraph style={{ color: '#e2e8f0' }}>
                    Monday–Friday, 7:30 AM – 4:00 PM
                  </Paragraph>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Location Card */}
        <Card bordered style={{ background: '#374151', margin: '40px 0' }}>
          <Space align="start">
            <div style={iconStyle('#6f42c1')}>
              <EnvironmentOutlined style={iconInnerStyle} />
            </div>
            <div>
              <Title level={5} style={{ color: '#fff' }}>Location</Title>
              <Paragraph style={{ color: '#e2e8f0', marginBottom: 0 }}>Roosevelt High School</Paragraph>
              <Paragraph style={{ color: '#e2e8f0', marginBottom: 0 }}>Room 205, English Department</Paragraph>
              <Paragraph style={{ color: '#e2e8f0', marginBottom: 0 }}>1234 Education Drive</Paragraph>
              <Paragraph style={{ color: '#e2e8f0', marginBottom: 0 }}>Springfield, ST 12345</Paragraph>
            </div>
          </Space>
        </Card>

        {/* CTA Buttons */}
        <div style={{ textAlign: 'center' }}>
          <Space wrap>
            <Button type="primary" icon={<MailOutlined />}>
              Send Email
            </Button>
            <Button ghost icon={<CalendarOutlined />}>
              Schedule Meeting
            </Button>
          </Space>
        </div>
      </div>
    </section>
  );
};

// Icon styling helper
const iconStyle = (bgColor) => ({
  width: 48,
  height: 48,
  backgroundColor: bgColor,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const iconInnerStyle = {
  fontSize: 22,
  color: '#fff',
};

export default Contact;
