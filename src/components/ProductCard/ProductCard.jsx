import React from 'react';
import { styled, Box, Button, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import MainImageImageImage from "./../../assets/img/SampleCard_Image.png";
import ShopBtn1 from '../ShopBtn1/ShopBtn1';

const StyledCard = styled(Card)({
  display: "flex",
  justifyContent: "space-around",
  textAlign: "center",
  padding: 20,
  margin: 'auto',
  maxWidth: 900, 
});

const StyledCardMedia = styled(CardMedia)({
  height: 550,
  width: 550,
  marginRight: 20,
  borderRadius: 5,
  backgroundSize: 'contain',
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});

function ProductCard({ product }) {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={product.imagen || MainImageImageImage}
        title={product.titulo || 'Product Image'}
      />
      <StyledCardContent>
        <Typography variant="h3" component="h2">
          {product.titulo || 'Nombre del Producto'}
        </Typography>
        <Typography variant="h4" component="h3">
          {product.precio ? `$${product.precio.toFixed(2)}` : ''}
        </Typography>
        <Typography paragraph>
          {product.descripcion || 'Descripción del Producto'}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box>
          <ShopBtn1 text="AÑADIR AL CARRITO" />
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
}
export default ProductCard;
