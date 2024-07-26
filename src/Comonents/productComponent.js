import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './productcomponent.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='product-card product-grid' key={id}>
        <Link to={`/product/${id}`}>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>${price}</div>
                <div className='meta'>{category}</div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className='product-grid'>
      {renderList}
    </div>
  );
}

export default ProductComponent;
