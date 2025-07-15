import React from 'react';
import { Row, Col, Card, Tag, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const lessonData = [
  {
    grade: 'Grade 10',
    title: 'Shakespeare in Modern Context',
    description: `Students explore Romeo and Juliet through modern adaptations, creating their own contemporary version of key scenes while analyzing themes that remain relevant today.`,
    duration: '3 weeks',
    color: 'blue',
  },
  {
    grade: 'Grade 11',
    title: 'Digital Storytelling Project',
    description: `Students create multimedia presentations combining traditional narrative techniques with digital tools to tell personal stories that connect to broader social themes.`,
    duration: '4 weeks',
    color: 'green',
  },
  {
    grade: 'Grade 12',
    title: 'Debate & Critical Analysis',
    description: `Advanced students engage in structured debates on contemporary issues, developing critical thinking skills and learning to articulate complex arguments effectively.`,
    duration: '6 weeks',
    color: 'gray',
  },
];

// ✅ Define styles inline in this file
const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#a59c9cff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 48,
    color:'#f00808ff',
  },
  subtitle: {
    fontSize: '1.125rem',
    color:'#0851f0ff',
  },
  cardHeader: (color) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: color,
    color: '#cac3c3ff',
  }),
  tag: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  card: {
    height: '100%',
  },
  cardBody: {
    padding: 16,
  },
  duration: {
    borderTop: '1px solid #f0f0f0',
    marginTop: 16,
    paddingTop: 8,
  },
};

const LessonPlans = () => {
  return (
    <div style={styles.section}>
      <div style={styles.header}>
        <Title level={2} style={{ color: '#f10a0aff' }}>Sample Lesson Plans</Title>
        <Paragraph type="secondary" style={styles.subtitle}>
          Innovative approaches to engaging students in meaningful learning
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {lessonData.map((lesson, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              bordered
              title={
                <div style={styles.cardHeader(lesson.color)}>
                  <Tag style={styles.tag}>{lesson.grade}</Tag>
                  <ClockCircleOutlined />
                </div>
              }
              headStyle={{ padding: 0 }}
              bodyStyle={styles.cardBody}
              style={styles.card}
            >
              <Title level={4}>{lesson.title}</Title>
              <Paragraph>{lesson.description}</Paragraph>
              <div style={styles.duration}>
                <Text type="secondary">Duration: {lesson.duration}</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LessonPlans;
