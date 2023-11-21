import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import useCategoryProducts from '../useCategoryProducts/useCategoryProducts';
import { styled } from '@mui/material/styles';

const CategoryCardGrid1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const Grid = styled('div')({
  borderRadius: `0px`,
  display: `grid`,
  position: `relative`,
  isolation: `isolate`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  height: `auto`,
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  columnGap: `30px`,
  rowGap: `30px`,
  width: `100%`,
});

const CategoryCardGrid = ({ categoryId }) => {
  const products = useCategoryProducts(categoryId);

  return (
    <CategoryCardGrid1>
      <Grid>
        {products.map((product) => (
          <CategoryCard key={product.id} categoryId={categoryId} productId={product.id} />
        ))}
      </Grid>
    </CategoryCardGrid1>
  );
};

export default CategoryCardGrid;
