import React from 'react';
import ProductList from './ProductList';
import TopPicksSlider from './TopPicksSlider';

function Products() {
  return (
    <div>
      <h2>Our Products</h2>
      <p>Explore our wide range of scientifically perfected poultry products</p>
      <TopPicksSlider/>
      <ProductList/>      
    </div>
  );
}

export default Products;