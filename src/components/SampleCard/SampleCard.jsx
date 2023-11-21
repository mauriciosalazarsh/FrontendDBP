import React from 'react';
import { Tooltip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import useProductById from '../ProductById/useProductById';
import { useNavigate } from 'react-router-dom';
import useCart from '../useCart/useCart';


const TypeQuest = styled('div')({
  backgroundColor: `rgba(250, 250, 250, 1)`,
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.16)`,
  borderRadius: `8px`,
  display: `flex`,
  flexDirection: `column`,
  width: '100%',
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const ImageFrame = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  flexDirection: `column`,
  padding: `10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
});

const Image1 = styled('div')({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `6px`,
  height: `251px`,
});

const Content = styled('div')({
  display: `flex`,
  flexDirection: `column`,
  padding: `10px 20px 35px 20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
});

const Details = styled('div')({
  display: `flex`,
  flexDirection: `column`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
});

const TitleTop = styled('div')({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
});

const Title = styled('div')({
  textAlign: `left`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `20px`,

});

const ButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
});

const Details1 = styled('div')({
  textAlign: `left`,
  fontFamily: `Heebo`,
  fontWeight: `400`,
  fontSize: `16px`,
  lineHeight: `150%`,
  margin: `12px 0px`,
});

const ButtonContained = styled(Button)({
  margin: '12px 8px 12px 0px',
});

const Price = styled('div')({
  fontFamily: 'Heebo',
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '150%',
  color: '#333',
  marginBottom: '12px',
});

function SampleCard({ id }) {
  const navigate = useNavigate();
  const { product } = useProductById(id);
  const { addItemToCart } = useCart();

  const addToCart = async () => {
    try {
      const response = await fetch('http://backenddbpproyect-production.up.railway.app/carritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Aquí irían otros headers como tokens de autenticación si son necesarios
        },
        body: JSON.stringify({ productId: id, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error('No se pudo añadir el producto al carrito');
      }

      // Si el producto se añade al carrito en la base de datos, también lo actualizamos en el estado
      const addedProduct = await response.json();
      addItemToCart(addedProduct);
      navigate('/cart'); // Navegar al carrito
    } catch (error) {
      console.error('Error al añadir al carrito:', error);
      // Aquí manejarías el error, posiblemente mostrando un mensaje al usuario
    }
  };
  
  const handleButtonClick = (action) => {
    if (action === 'comprar') {
      addToCart();
    } else if (action === 'detalles') {
      navigate(`/products/${id}`);
    }
  };

  

  if (!product) {
    return <TypeQuest>Producto no encontrado.</TypeQuest>;
  }

  return (
    <TypeQuest>
      <ImageFrame>
        <Tooltip title={product.descripcion || ''} placement="top" arrow>
          <Image1 style={{ backgroundImage: `url(${product.imagen})` }} />
        </Tooltip>
      </ImageFrame>
      <Content>
        <TitleTop>
          <Title>{product.titulo}</Title>
        </TitleTop>
        <Details>
          <Details1>{product.descripcion}</Details1>
          <Price>{`Precio: S/${product.precio.toFixed(2)}`}</Price>
          <ButtonGroup>
            <ButtonContained
              variant="contained"
              size="large"
              color="primary"
              onClick={() => handleButtonClick('comprar')}
            >
              Comprar
            </ButtonContained>
            <ButtonContained
              variant="contained"
              size="large"
              color="primary"
              onClick={() => handleButtonClick('detalles')}
            >
              Detalles
            </ButtonContained>
          </ButtonGroup>
        </Details>
      </Content>
    </TypeQuest>
  );
}

export default SampleCard;