import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const url = 'https://shoppingapiacme.herokuapp.com/shopping';
  useEffect(() => {
    const fetchedData = async () => {
      const res = await axios.get(url);
      setProducts(res.data);
    };
    fetchedData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div key={product.id} className='card'>
            <img src={product.image} alt={product.item} />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
            <button>
              <Link className='link' to={`/product/${product.id}`}>
                More
              </Link>{' '}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
