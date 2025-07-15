import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Hero from './components/Hero';
import Biography from './components/Biography';
import LessonPlans from './components/LessonPlans';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import 'antd/dist/reset.css';
import 'remixicon/fonts/remixicon.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#1f1f1f' }}>
        {/* Header / Navigation */}
<Header
  style={{
    backgroundColor: '#141414',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: '24px',
  }}
>
  {/* Logo / Brand */}
  <div style={{ color: '#40a9ff', fontWeight: 'bold', fontSize: 18, display: 'flex', alignItems: 'center' }}>
    <i className="ri-graduation-cap-line" style={{ marginRight: 8 }}></i>
    Ms. Sarah Johnson
  </div>

  {/* Menu (Right Aligned) */}
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['/']}
    style={{
      backgroundColor: 'transparent',
      borderBottom: 'none',
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '12px',
    }}
  >
    <Menu.Item key="/">
      <NavLink to="/" style={{ color: 'inherit' }}>Home</NavLink>
    </Menu.Item>
    <Menu.Item key="/about">
      <NavLink to="/about" style={{ color: 'inherit' }}>About</NavLink>
    </Menu.Item>
    <Menu.Item key="/certifications">
      <NavLink to="/certifications" style={{ color: 'inherit' }}>Teaching</NavLink>
    </Menu.Item>
    <Menu.Item key="/lessons">
      <NavLink to="/lessons" style={{ color: 'inherit' }}>Lessons</NavLink>
    </Menu.Item>
    <Menu.Item key="/awards">
      <NavLink to="/awards" style={{ color: 'inherit' }}>Achievements</NavLink>
    </Menu.Item>
    <Menu.Item key="/testimonials">
      <NavLink to="/testimonials" style={{ color: 'inherit' }}>Testimonials</NavLink>
    </Menu.Item>
    <Menu.Item key="/contact">
      <NavLink to="/contact" style={{ color: 'inherit' }}>Contact</NavLink>
    </Menu.Item>
  </Menu>
</Header>

        {/* Page Content */}
        <Content style={{ padding: '2rem 1rem', color: 'white' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<Biography />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/lessons" element={<LessonPlans />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: 'center', backgroundColor: '#141414', color: '#999' }}>
          <p>© 2024 June - High School Educator</p>
          <p style={{ marginTop: 4 }}>
            <i className="ri-heart-fill" style={{ color: 'red', marginRight: 4 }}></i>
            Inspiring minds, building futures
          </p>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
