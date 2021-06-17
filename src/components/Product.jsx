import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = ({ match }) => {
  const [productData, setProductData] = useState([]);

  const url = `https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`;
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(url);
      setProductData(res.data);
      console.log(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {productData.map((pd) => {
        return (
          <div className='product-container' key={pd.id}>
            <div>
              <img src={pd.image} alt='pd.item' className='prod-image' />
            </div>
            <div>
              <h1 className='brand'>{pd.brand}</h1>
              <h2>{pd.item}</h2>
              <p>{pd.description}</p>
              <p>
                <strong>Price: {pd.price} </strong>
              </p>
              <p>
                <strong>Color: {pd.color}</strong>
              </p>
            </div>
          </div>
        );
      })}
      <div className='back'>
        <button>
          <Link className='link' to='/'>
            Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
