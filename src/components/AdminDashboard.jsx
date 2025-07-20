import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from "./AddProducts";
import AddPromo from "./AddPromos";

const IMG_BASE_URL = "https://magino1.pythonanywhere.com/static/images/";

function AdminDashboard({ setIsAuthenticated }) {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showAddPromosForm, setShowAddPromosForm] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const [view, setView] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [message, setMessage] = useState(null);

  // Get user info from localStorage (if exists)
  let user;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch {
    user = null;
  }

  // Clear messages after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Fetch functions for each data type
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://magino1.pythonanywhere.com/api/get_feedback');
      setFeedbacks(res.data);
      setView('feedback');
      setMessage({ text: 'Feedback data loaded successfully.', type: 'success' });
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error fetching feedbacks.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://magino1.pythonanywhere.com/api/get_suppliers');
      setSuppliers(res.data);
      setView('suppliers');
      setMessage({ text: 'Suppliers data loaded successfully.', type: 'success' });
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error fetching suppliers.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://magino1.pythonanywhere.com/api/get_products');
      setProducts(res.data.products || []);
      setView('products');
      setMessage({ text: 'Products data loaded successfully.', type: 'success' });
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error fetching products.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const fetchPromos = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://magino1.pythonanywhere.com/api/get_promos');
      setPromos(res.data.promos || []);
      setView('promos');
      setMessage({ text: 'Promos data loaded successfully.', type: 'success' });
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error fetching promos.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Toggle handlers for buttons
  const toggleView = (targetView) => {
    if (view === targetView) {
      setView(null);
      setMessage(null);
    } else {
      switch (targetView) {
        case 'feedback': fetchFeedbacks(); break;
        case 'suppliers': fetchSuppliers(); break;
        case 'products': fetchProducts(); break;
        case 'promos': fetchPromos(); break;
        default: setView(null);
      }
    }
  };

  // Delete handler
  const handleDeleteRow = async () => {
    const idToDelete = Number(deleteId);
    if (isNaN(idToDelete) || !deleteId.trim()) {
      setMessage({ text: 'Please enter a valid ID.', type: 'error' });
      return;
    }

    try {
      if (view === 'feedback') {
        if (!feedbacks.some(item => item.feedback_id === idToDelete)) {
          setMessage({ text: 'ID not found in feedback list.', type: 'error' });
          return;
        }
        await axios.delete(`https://magino1.pythonanywhere.com/api/delete_feedback/${idToDelete}`);
        setFeedbacks(feedbacks.filter(item => item.feedback_id !== idToDelete));
        setMessage({ text: `Feedback ID ${idToDelete} deleted successfully.`, type: 'success' });

      } else if (view === 'suppliers') {
        if (!suppliers.some(item => item.supplier_id === idToDelete)) {
          setMessage({ text: 'ID not found in suppliers list.', type: 'error' });
          return;
        }
        await axios.delete(`https://magino1.pythonanywhere.com/api/delete_supplier/${idToDelete}`);
        setSuppliers(suppliers.filter(item => item.supplier_id !== idToDelete));
        setMessage({ text: `Supplier ID ${idToDelete} deleted successfully.`, type: 'success' });

      } else if (view === 'products') {
        if (!products.some(item => item.id === idToDelete)) {
          setMessage({ text: 'ID not found in products list.', type: 'error' });
          return;
        }
        await axios.delete(`https://magino1.pythonanywhere.com/api/delete_product/${idToDelete}`);
        setProducts(products.filter(item => item.id !== idToDelete));
        setMessage({ text: `Product ID ${idToDelete} deleted successfully.`, type: 'success' });

      } else if (view === 'promos') {
        if (!promos.some(item => item.id === idToDelete)) {
          setMessage({ text: 'ID not found in promos list.', type: 'error' });
          return;
        }
        await axios.delete(`https://magino1.pythonanywhere.com/api/delete_promo/${idToDelete}`);
        setPromos(promos.filter(item => item.id !== idToDelete));
        setMessage({ text: `Promo ID ${idToDelete} deleted successfully.`, type: 'success' });
      } else {
        setMessage({ text: 'No data view selected.', type: 'error' });
        return;
      }

      setDeleteId('');
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Failed to delete.', type: 'error' });
    }
  };

  return (
    <div style={{ backgroundColor: '#d4edda', minHeight: '100vh', padding: '2rem' }}>
      <div className="container">
        <h1 className="mb-4 text-danger">Admin Dashboard</h1>

        <div className="mb-4">
          <h2 className='text-success'>Welcome, {user?.username || 'Admin'}</h2>
          <p>Role: {user?.role || 'Admin'}</p>
        </div>

        {/* View toggle buttons */}
        <div className="mb-4">
          <button
            className="btn btn-success me-2"
            onClick={() => toggleView('feedback')}
          >
            {view === 'feedback' ? 'Hide Feedback' : 'View Feedback'}
          </button>

          <button
            className="btn btn-success me-2"
            onClick={() => toggleView('suppliers')}
          >
            {view === 'suppliers' ? 'Hide Suppliers' : 'View Suppliers'}
          </button>

          <button
            className="btn btn-success me-2"
            onClick={() => toggleView('products')}
          >
            {view === 'products' ? 'Hide Products' : 'View Products'}
          </button>

          <button
            className="btn btn-success"
            onClick={() => toggleView('promos')}
          >
            {view === 'promos' ? 'Hide Promos' : 'View Promos'}
          </button>
        </div>

        {/* Status message */}
        {message && (
          <div className={`alert ${message.type === 'success' ? 'alert-dark' : 'alert-danger'}`} role="alert">
            {message.text}
          </div>
        )}

        {/* Delete section */}
        {view && (
          <div className="mb-4 d-flex align-items-center">
            <label htmlFor="deleteId" className="form-label me-2 mb-0">ID to Delete:</label>
            <input
              id="deleteId"
              type="number"
              min="1"
              className="form-control me-2"
              style={{ width: '120px' }}
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
            />
            <button className="btn btn-danger" onClick={handleDeleteRow}>Delete Row</button>
          </div>
        )}

        {/* Loading indicator */}
        {loading && <p>Loading...</p>}

        {/* Feedback Table */}
        {view === 'feedback' && (
          <>
            <h2 className='text-danger'>Feedback Submissions</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map(item => (
                    <tr key={item.feedback_id}>
                      <td>{item.feedback_id}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.feedback_type}</td>
                      <td>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Suppliers Table */}
        {view === 'suppliers' && (
  <>
    <h2 className='text-danger'>Suppliers</h2>
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Supplier Address</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>VAT Number</th>
            <th>KRA PIN Number</th>
            <th>Expiry Policy</th>
            <th>Contact Person</th>
            <th>Terms of Payment</th>
            <th>Return Policy</th>
            <th>Company Directors</th>
            <th>Products to Supply</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(item => (
            <tr key={item.supplier_id}>
              <td>{item.supplier_id}</td>
              <td>{item.company_name || item.supplier_name}</td>
              <td>{item.supplier_address}</td>
              <td>{item.supplier_phone}</td>
              <td>{item.supplier_email}</td>
              <td>{item.vat_number}</td>
              <td>{item.kra_pin_number}</td>
              <td>{item.expiry_policy}</td>
              <td>{item.contact_person}</td>
              <td>{item.terms_of_payment}</td>
              <td>{item.return_policy}</td>
              <td>{item.company_directors}</td>
              <td>{item.products_to_supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

        {/* Products Table */}
        {view === 'products' && (
          <>
           {/* Optionally include AddProductForm here */}
            
                <button
      className="btn btn-success my-3"
      onClick={() => setShowAddProductForm(!showAddProductForm)}
    >
      {showAddProductForm ? 'Hide Add Product Form' : 'Add Product'}
    </button>

    {/* Conditionally render AddProduct form */}
    {showAddProductForm && <AddProduct />}
            <h2 className='text-danger '>Products</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.product_name}</td>
                      <td>{item.product_description || "No description"}</td>
                      <td>Ksh {item.product_cost}</td>
                      <td>
                        {item.product_photo ? (
                          <img
                            src={`${IMG_BASE_URL}${item.product_photo}`}
                            alt={item.product_name}
                            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        ) : (
                          'No Image'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Promos Table */}
        {view === 'promos' && (
          <>
           {/* Optionally include AddProductForm here */}
            
                <button
      className="btn btn-success my-3"
      onClick={() => setShowAddPromosForm(!showAddPromosForm)}
    >
      {showAddPromosForm ? 'Hide Add Promos Form' : 'Add Promos'}
    </button>

    {/* Conditionally render AddProduct form */}
    {showAddPromosForm && <AddPromo />}
            <h2 className='text-danger '> Promotions</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {promos.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.product_name}</td>
                      <td>{item.product_description || "No description"}</td>
                      <td>Ksh {item.product_cost}</td>
                      <td>
                        {item.product_photo ? (
                          <img
                            src={`${IMG_BASE_URL}${item.product_photo}`}
                            alt={item.product_name}
                            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        ) : (
                          'No Image'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Optionally include AddPromoForm here */}
           
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
