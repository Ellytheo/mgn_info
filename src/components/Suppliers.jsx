import React, { useState } from 'react';
import axios from 'axios';

const Suppliers = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    phone: '',
    email: '',
    vatNumber: '',
    pinNumber: '',
    expiryPolicy: '',
    contactPerson: '',
    termsOfPayment: '',
    returnPolicy: '',
    directors: '',
    products: '',
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (message) setMessage(null); // Clear message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value.trim());
      });

      const response = await axios.post(
        'https://magino1.pythonanywhere.com/api/suppliers',
        formPayload,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setMessage({ type: 'success', text: response.data.success || 'Supplier submitted successfully!' });

      // Reset form
      setFormData({
        companyName: '',
        address: '',
        phone: '',
        email: '',
        vatNumber: '',
        pinNumber: '',
        expiryPolicy: '',
        contactPerson: '',
        termsOfPayment: '',
        returnPolicy: '',
        directors: '',
        products: '',
      });
    } catch (error) {
      const errMsg = error.response?.data?.error || 'Network or server error. Please try again.';
      setMessage({ type: 'danger', text: errMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container py-5"
      style={{
        background: 'linear-gradient(to right, rgb(198, 239, 206), rgb(152, 251, 152))',
        borderRadius: '12px',
      }}
    >
      <h2 className="text-center text-danger fw-bold mb-3">Become a Magunas Supplier</h2>
      <p className="text-center">Fill out the form below and our procurement team will contact you after reviewing your application.</p>

      {message && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card shadow p-4 mt-3">
        <div className="row">
          {[
            { label: 'Company Name', name: 'companyName' },
            { label: 'Supplier Address', name: 'address' },
            { label: 'Phone Number', name: 'phone' },
            { label: 'Email Address', name: 'email' },
            { label: 'VAT Number', name: 'vatNumber' },
            { label: 'KRA PIN Number', name: 'pinNumber' },
            { label: 'Expiry Policy', name: 'expiryPolicy' },
            { label: 'Contact Person', name: 'contactPerson' },
            { label: 'Terms of Payment', name: 'termsOfPayment' },
            { label: 'Return Policy', name: 'returnPolicy' },
            { label: 'Company Directors', name: 'directors' },
          ].map(({ label, name }) => (
            <div className="col-md-6 mb-3" key={name}>
              <label className="form-label fw-bold">
                {label} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">
            Products to Supply <span className="text-danger">*</span>
          </label>
          <textarea
            name="products"
            className="form-control"
            rows="3"
            required
            value={formData.products}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <button type="submit" className="btn btn-danger px-4" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <p className="mt-4 text-danger">
        <strong>Note:</strong> Magunas does <u>not</u> request any payments during the supplier application process.
        Report any suspicious activity to our official email.
      </p>
    </div>
  );
};

export default Suppliers;
