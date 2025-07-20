import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const img_url = "https://magino1.pythonanywhere.com/static/images/";

const PromosAndProducts = () => {
  const [promos, setPromos] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 NEW

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promoResponse = await axios.get('https://magino1.pythonanywhere.com/api/get_promos');
        const productResponse = await axios.get('https://magino1.pythonanywhere.com/api/get_products');
        setPromos(promoResponse.data.promos || []);
        setProducts(productResponse.data.products || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fadeIn = useSpring({ opacity: loading ? 0 : 1 });

  const ProductCard = ({ item }) => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={img_url + item.product_photo}
          alt={item.product_name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="text-center card-title">{item.product_name}</h5>
          <p className="card-text text-center text-muted" style={{ fontSize: '0.9rem', flexGrow: 1 }}>
            {item.product_description || "No description available"}
          </p>
          <p className="fw-bold text-center text-danger">Ksh {item.product_cost}</p>
        </div>
      </div>
    </div>
  );

  // 🔍 Filtered lists
  const filteredPromos = promos.filter(promo =>
    promo.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center text-warning py-5">Loading...</div>;
  if (error) return <div className="text-danger text-center py-5">Error: {error}</div>;

  return (
    <animated.div style={fadeIn} className="container m-0 py-2">
      {/* 🔍 Search Bar */}
      <div className="m-4 text-center">
        <input
          type="text"
          className="form-control  w-50 mx-auto"
          placeholder="Search products or promos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="fw-bold mb-4 text-center text-danger">Promotions</h2>
      <div className="row">
        {filteredPromos.length > 0 ? (
          filteredPromos.map((promo) => <ProductCard key={promo.promo_id} item={promo} />)
        ) : (
          <p className="text-muted text-center">No promotions match your search.</p>
        )}
      </div>

      <h2 className="fw-bold mb-4 mt-5 text-danger text-center">Products</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.product_id} item={product} />)
        ) : (
          <p className="text-muted text-center">No products match your search.</p>
        )}
      </div>
    </animated.div>
  );
};

export default PromosAndProducts;
