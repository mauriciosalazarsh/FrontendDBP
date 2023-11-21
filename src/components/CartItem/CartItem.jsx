import React from 'react';
import { Box, Typography, IconButton, TableCell, TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartItem = ({ producto, remover, addOne, substractOne }) => {
  const subtotal = producto.precio * producto.quantity;

  return (
    <TableRow>
      <TableCell>
        <img src={producto.imagen} alt={producto.titulo} style={{ width: '60px', height: '60px' }} />
      </TableCell>
      <TableCell>{producto.titulo}</TableCell>
      <TableCell>S/{producto.precio}</TableCell>
      <TableCell>
        <IconButton onClick={() => remover(producto.id)} color="secondary">
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => substractOne(producto.id)} color="secondary">
            <RemoveCircleIcon />
          </IconButton>
          <Typography textAlign="center">{producto.quantity}</Typography>
          <IconButton onClick={() => addOne(producto.id)} color="primary">
            <AddCircleIcon />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell>
        {/* Aquí se puede eliminar la columna de stock disponible si no se usa */}
      </TableCell>
      <TableCell>
        S/{subtotal.toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
