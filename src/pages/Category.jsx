import React from 'react';
import Header from '../components/Header';
import CategoryCardGrid from '../components/CategoryCardGrid/CategoryCardGrid';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';

const Category = () => {
  let { categoryId } = useParams();

  return (
    <>
      <Header />
      <div style={{ marginTop: '20px' }}></div>
      <Container>
        <CategoryCardGrid categoryId={categoryId} />
      </Container>
    </>
  );
};

export default Category;
