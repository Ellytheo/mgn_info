import React from 'react';
import { Row, Col, Card, Typography, Tag, List, Space } from 'antd';
import {
  TrophyOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  RightOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Awards = () => {
  const awardList = [
    'Teacher of the Year 2023',
    'Excellence in Innovation 2022',
    'Student Choice Award 2021',
    'Community Impact Recognition',
  ];

  const educationList = [
    {
      title: 'Master of Education',
      subtitle: 'English Literature | 2018',
    },
    {
      title: 'Teaching Certification',
      subtitle: 'Secondary Education | 2016',
    },
    {
      title: 'Google Certified Educator',
      subtitle: 'Level 2 | 2023',
    },
  ];

  const communityList = [
    'Local Library Reading Program Coordinator',
    'Youth Writing Competition Judge',
    'Parent-Teacher Association Board Member',
    'After-school Tutoring Program Volunteer',
  ];

  return (
    <div style={{ padding: '60px 20px', background: '#4d4a4aff' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2} style={{ color: '#df1010ff'}}>Achievements & Recognition</Title>
        <Paragraph style={{ color: '#888', maxWidth: 600, margin: '0 auto' }}>
          Professional development, awards, and community involvement
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {/* Awards */}
        <Col xs={24} lg={8}>
          <Card
            bordered
            headStyle={{ borderBottom: 'none' }}
            bodyStyle={{ paddingTop: 16 }}
            title={
              <Space>
                <div style={iconWrap('#faad14')}>
                  <TrophyOutlined style={iconStyle} />
                </div>
                <Title level={5} style={{ margin: 0 }}>Awards & Recognition</Title>
              </Space>
            }
          >
            <div style={{ marginBottom: 16 }}>
              {awardList.map((award, idx) => (
                <Tag key={idx} color="gold" style={{ marginBottom: 8, fontWeight: 500 }}>
                  {award}
                </Tag>
              ))}
            </div>
            <Paragraph style={{ color: '#888' }}>
              Recognized for outstanding dedication to student success and innovative teaching methods that make learning engaging and meaningful.
            </Paragraph>
          </Card>
        </Col>

        {/* Certifications */}
        <Col xs={24} lg={8}>
          <Card
            bordered
            headStyle={{ borderBottom: 'none' }}
            bodyStyle={{ paddingTop: 16 }}
            title={
              <Space>
                <div style={iconWrap('#1890ff')}>
                  <TeamOutlined style={iconStyle} />
                </div>
                <Title level={5} style={{ margin: 0 }}>Certifications & Education</Title>
              </Space>
            }
          >
            <List
              dataSource={educationList}
              renderItem={({ title, subtitle }) => (
                <List.Item style={{ border: 'none', padding: 0 }}>
                  <div>
                    <Title level={5} style={{ margin: 0 }}>{title}</Title>
                    <Text style={{ fontSize: 13, color: '#888' }}>{subtitle}</Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Community Involvement */}
        <Col xs={24} lg={8}>
          <Card
            bordered
            headStyle={{ borderBottom: 'none' }}
            bodyStyle={{ paddingTop: 16 }}
            title={
              <Space>
                <div style={iconWrap('#52c41a')}>
                  <UsergroupAddOutlined style={iconStyle} />
                </div>
                <Title level={5} style={{ margin: 0 }}>Community Involvement</Title>
              </Space>
            }
          >
            <List
              dataSource={communityList}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '6px 0' }}>
                  <Space>
                    <RightOutlined style={{ fontSize: 12, color: '#52c41a' }} />
                    <Text>{item}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// 🔧 Reusable styles
const iconWrap = (bgColor) => ({
  background: bgColor,
  width: 48,
  height: 48,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const iconStyle = { fontSize: 24, color: '#fff' };

export default Awards;
