  import React from 'react';
  import { styled, Box, Button, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
  import MainImageImageImage from "./../../assets/img/SampleCard_Image.png";
  import ShopBtn1 from '../ShopBtn1/ShopBtn1';
  import useProductPage1 from './useProductPage1';

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

  function ProductPage1({ productId }) {
    const { data } = useProductPage1(productId);

    if (!data) {
      return <div>Cargando...</div>;
    }

    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={4}>
        <StyledCard>
        <StyledCardMedia
          component="img"
          image={data.imagen || MainImageImageImage} // Utiliza la imagen del producto o una imagen predeterminada
          title={data.titulo || 'Product Image'}
        />
          <StyledCardContent>
            <Typography variant="h3" component="h2">
              {data.titulo || 'Nombre del Producto'}
            </Typography>
            <Typography variant="h4" component="h3">
              {data.precio ? `$${data.precio.toFixed(2)}` : ''}
            </Typography>
            <Typography paragraph>
              {data.descripcion || 'Descripción del Producto'}
            </Typography>
            {/* Aquí puedes añadir cualquier otro detalle o funcionalidad como un contador o botones adicionales */}
            <Divider sx={{ my: 2 }} />
            <Box>
              {/* Suponiendo que ShopBtn1 maneje la lógica de añadir al carrito */}
              <ShopBtn1 text="AÑADIR AL CARRITO" />
            </Box>
          </StyledCardContent>
        </StyledCard>
      </Box>
    );
  }

  export default ProductPage1;
