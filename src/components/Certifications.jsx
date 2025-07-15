import React from 'react';
import {
  Typography,
  Row,
  Col,
  Card,
  Tag,
  List,
  Space,
} from 'antd';
import {
  BookOutlined,
  TeamOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Certifications = () => {
  const subjects = [
    'English Literature',
    'Creative Writing',
    'Public Speaking',
    'Media Studies',
    'AP English',
  ];

  const classroomManagement = [
    'Positive reinforcement and clear expectations',
    'Student-centered learning environment',
    'Collaborative problem-solving approach',
    'Regular communication with parents',
    'Technology integration for engagement',
  ];

  return (
    <div style={{ padding: '60px 20px', background: '#1f1f1f', color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2} style={{ color: '#fff' }}>
          Teaching Expertise
        </Title>
        <Paragraph type="secondary" style={{ maxWidth: 700, margin: '0 auto', color: '#aaa' }}>
          Subjects I teach and my classroom management approach
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {/* Subjects Taught */}
        <Col xs={24} lg={12}>
          <Card
            bordered
            style={{
              height: '100%',
              backgroundColor: '#141414',
              borderColor: '#434343',
            }}
            headStyle={{ borderBottom: 'none' }}
            bodyStyle={{ color: '#fff' }}
          >
            <Space align="center" style={{ marginBottom: 24 }}>
              <div
                style={{
                  background: '#52c41a',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOutlined style={{ fontSize: 24, color: '#fff' }} />
              </div>
              <Title level={4} style={{ color: '#fff', margin: 0 }}>
                Subjects Taught
              </Title>
            </Space>

            <div style={{ marginBottom: 24 }}>
              {subjects.map((subject, index) => (
                <Tag
                  key={index}
                  color="green"
                  style={{ padding: '4px 12px', borderRadius: 20, marginBottom: 8 }}
                >
                  {subject}
                </Tag>
              ))}
            </div>

            <Paragraph style={{ color: '#ccc' }}>
              I specialize in making literature come alive for students, helping them connect
              classic and contemporary works to their own experiences and the world around them.
            </Paragraph>
          </Card>
        </Col>

        {/* Classroom Management */}
        <Col xs={24} lg={12}>
          <Card
            bordered
            style={{
              height: '100%',
              backgroundColor: '#141414',
              borderColor: '#434343',
            }}
            headStyle={{ borderBottom: 'none' }}
            bodyStyle={{ color: '#fff' }}
          >
            <Space align="center" style={{ marginBottom: 24 }}>
              <div
                style={{
                  background: '#1890ff',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TeamOutlined style={{ fontSize: 24, color: '#fff' }} />
              </div>
              <Title level={4} style={{ color: '#fff', margin: 0 }}>
                Classroom Management
              </Title>
            </Space>

            <List
              dataSource={classroomManagement}
              renderItem={(item) => (
                <List.Item style={{ background: 'transparent', borderBottom: 'none', padding: 0 }}>
                  <CheckCircleFilled style={{ color: '#52c41a', marginRight: 12 }} />
                  <Text style={{ color: '#ccc' }}>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Certifications;
