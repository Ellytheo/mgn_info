import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // 👈 Bootstrap Icons
import axios from 'axios';

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle state

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const res = await axios.post('https://magino1.pythonanywhere.com/api/signin', formData);

      if (res.data && res.data.user) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setIsAuthenticated(true);
        navigate('/wp-administration');
      } else {
        setMessage('Invalid login response.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Admin Login</h2>
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleLogin} noValidate>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
