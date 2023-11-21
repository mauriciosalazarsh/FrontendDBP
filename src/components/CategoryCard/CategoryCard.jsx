import React from 'react';
import { Tooltip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import useCategoryProductByID from '../useCategoryProductsByID/useCategoryProductsByID';
import { useNavigate } from 'react-router-dom';

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
  width: '100%', // Adjust the width as needed
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

const CategoryCard = ({ categoryId, productId }) => {
  const navigate = useNavigate();
  const productDetails = useCategoryProductByID(categoryId, productId);

  const handleButtonClick = (action) => {
    if (action === 'detalles') {
      navigate(`/categorias/${categoryId}/productos/${productId}`);
    }
  };

  if (!productDetails) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <TypeQuest>
      <ImageFrame>
        <Tooltip title={productDetails.descripcion || ''} placement="top" arrow>
          <Image1 style={{ backgroundImage: `url(${productDetails.imagen})` }} />
        </Tooltip>
      </ImageFrame>
      <Content>
        <TitleTop>
          <Title>{productDetails.titulo}</Title>
        </TitleTop>
        <Details>
          <Details1>{productDetails.descripcion}</Details1>
          <Price>{`Precio: $${productDetails.precio.toFixed(2)}`}</Price>
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
};

export default CategoryCard;
