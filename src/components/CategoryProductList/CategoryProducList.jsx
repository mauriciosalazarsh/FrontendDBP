import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard'; // Este es el nuevo componente que has creado
import useCategoryProducts from '../useCategoryProducts/useCategoryProducts'; // Este es tu hook personalizado para obtener productos

const CategoryProductsList = ({ categoryId }) => {
  const { products, loading } = useCategoryProducts(categoryId);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryProductsList;
