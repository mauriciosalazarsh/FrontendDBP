import React from 'react';
import Header from '../components/Header';
import ProductPage1 from '../components/ProductPage1/ProductPage1';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <ProductPage1 productId={id} />
    </>
  );
};

export default Product;