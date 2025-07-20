import React, { useState } from "react";
import axios from "axios";

const AddPromo = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const res = await axios.post(
        "https://magino1.pythonanywhere.com/api/add_promos",
        formData
      );

      setSuccess(res.data.message || "Promo added successfully");
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error adding promo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='hover-card bg-success p-3 rounded ' style={{ maxWidth: 350 }}>
      <h5>Add Promo</h5>
      {loading && <p style={{ color: "blue" }}>Uploading...</p>}
      {success && <p style={{ color: "red" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Promo Name"
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}
        required
        className="form-control mb-2"
      />
      <textarea
        placeholder="Promo Description"
        value={product_description}
        onChange={(e) => setProductDescription(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Promo Cost"
        value={product_cost}
        onChange={(e) => setProductCost(e.target.value)}
        required
        className="form-control mb-2"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProductPhoto(e.target.files[0])}
        required
        className="form-control mb-2"
      />
      <button type="submit" disabled={loading} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddPromo;
