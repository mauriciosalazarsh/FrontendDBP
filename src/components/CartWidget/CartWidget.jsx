import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const CartIconContainer = styled(Link)(({ theme }) => ({
  color: '#736c28',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none', // Añadido para remover el subrayado del link
}));

const CartItemCount = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  borderRadius: '10px',
  padding: '2px 6px',
  fontSize: '0.75rem',
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'translate(50%, -50%)',
}));

const CartWidget = () => {
  const cartCount = 0; // Deberías obtener la cantidad real del carrito
  const idUser = 1;
  const { userId } = useContext(UserContext); // Suponiendo que tienes un contexto con el ID del usuario

  console.log('UserID from context: ', userId);

  return (
    <CartIconContainer to={`/cart/${idUser}`}> {/* Ruta dinámica basada en el ID del usuario */}
      <ShoppingCartIcon />
      {cartCount > 0 && (
        <CartItemCount>{cartCount}</CartItemCount>
      )}
    </CartIconContainer>
  );
};

export default CartWidget;
