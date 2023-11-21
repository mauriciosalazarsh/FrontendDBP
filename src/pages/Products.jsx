import React from 'react';
import Header from '../components/Header';
import SampleCardGrid from '../components/SampleCardGrid';
import Container from '../components/Container';

const Products = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '20px' }}></div>
      <Container>
        <SampleCardGrid />
      </Container>

    </>
  );
};

export default Products;