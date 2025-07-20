import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    feedback_type: '',
    feedback_details: ''
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (message) setMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value.trim());
      });

      const res = await axios.post(
        'https://magino1.pythonanywhere.com/api/feedback',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setMessage({ type: 'danger', text: res.data.success || 'Feedback submitted successfully!' });

      // Clear form
      setFormData({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        feedback_type: '',
        feedback_details: ''
      });

    } catch (error) {
      const errMsg = error.response?.data?.error || 'Network error. Please try again.';
      setMessage({ type: 'danger', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5" 
    style={{
  background: 'linear-gradient(135deg, rgb(48, 158, 72), rgb(52, 184, 85), rgb(17, 173, 93), rgb(44, 143, 60))',
  backgroundSize: '400% 400%',
  animation: 'gradientShift 12s ease infinite'
}}
    >
      <div className="text-center mb-4">
        <h2 className="text-danger fw-bold">We're Listening</h2>
        <h4 className="text-muted">Give Us Feedback</h4>
        <p className="lead">
          <strong><i>"Give us feedback about your experience with us. Feedback helps us grow and serve you better. Talk to us, we’re listening."</i></strong>
        </p>
      </div>

      <div className="mb-4">
        <h5 className="text-warning fw-bold">What Can You Give Feedback About?</h5>
        <p style={{ fontSize: '18px' }}>
          We welcome feedback about any interaction with <strong>Magunas Murang'a Godown</strong> — your product experience, shopping, or e-commerce.
          Provide as many details as possible. <strong>All feedback is anonymous.</strong>
        </p>
      </div>

      <div className="card shadow p-4">
        <h5 className="mb-4 text-success fw-bold">Give Feedback</h5>

        {message && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">First Name *</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name *</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel"
              className="form-control"
              name="phone_number"
              required
              value={formData.phone_number}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Feedback Type *</label>
            <select
              className="form-select"
              name="feedback_type"
              required
              value={formData.feedback_type}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">-- Select an option --</option>
              <option>I'd like to give a suggestion</option>
              <option>I had a great experience</option>
              <option>I had a poor experience</option>
              <option>Product feedback</option>
              <option>Website or e-commerce</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Feedback Details *</label>
            <textarea
              className="form-control"
              name="feedback_details"
              rows="3"
              required
              value={formData.feedback_details}
              onChange={handleChange}
              disabled={loading}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success px-4" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
