import React from 'react';
import CartItem from '..//CartItem/CartItem';
import ShopBtn1 from '../ShopBtn1/ShopBtn1';
import { Box, Typography } from '@mui/material';

const ItemsCart = ({ cartItems, addOne, substractOne, removeItem }) => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity * item.precio, 0);
    
  return (
    <>
      {cartItems.map((producto) => (
        <CartItem
          key={producto.id}
          producto={producto}
          addOne={addOne}
          substractOne={substractOne}
          remover={removeItem}
        />
      ))}
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Total: S/{total.toFixed(2)}
        </Typography>
        <ShopBtn1 text="CHECKOUT" />
      </Box>
    </>
  );
};

export default ItemsCart;
