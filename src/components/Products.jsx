import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsAndPromos = async () => {
      try {
        const [productsRes, promosRes] = await Promise.all([
          fetch('https://magino1.pythonanywhere.com/api/get_products'),
          fetch('https://magino1.pythonanywhere.com/api/get_promos'),
        ]);

        if (!productsRes.ok || !promosRes.ok) {
          throw new Error(
            `HTTP error! status: ${productsRes.status} ${promosRes.status}`
          );
        }

        const productsData = await productsRes.json();
        const promosData = await promosRes.json();

        // FIXED: Use "photos" from backend response
        setProducts(productsData.photos || []);
        setPromos(promosData.photos || []);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductsAndPromos();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5" style={{ minHeight: '400px' }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="text-center py-5 text-danger"
        style={{ minHeight: '400px' }}
      >
        <h4>Error Loading</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="container-fluid py-5 px-0">
      <div className="container">
        {/* Promotions Section */}
        {promos.length > 0 && (
          <>
            <h2 className="text-center mb-4 fw-bold">🎉 Promotions Gallery</h2>
            <div className="row g-4 mb-5">
              {promos.map((promo, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <img
                    src={`https://magino1.pythonanywhere.com/static/images/${promo.product_photo}`}
                    alt={`Promo ${index}`}
                    className="img-fluid rounded shadow"
                    style={{ objectFit: 'cover', height: '250px', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Products Section */}
        {products.length > 0 && (
          <>
            <h2 className="text-center m-4 fw-bold">🛒 Products Gallery</h2>
            <div className="row g-4">
              {products.map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <img
                    src={`https://magino1.pythonanywhere.com/static/images/${product.product_photo}`}
                    alt={`Product ${index}`}
                    className="img-fluid rounded shadow"
                    style={{ objectFit: 'cover', height: '250px', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {promos.length === 0 && products.length === 0 && (
          <div className="text-center py-5" style={{ minHeight: '300px' }}>
            <h4 className="text-danger">No photos available at the moment.</h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
