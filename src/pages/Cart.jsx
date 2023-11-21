import React from "react";
import Header from "./../components/Header";
import ItemsCart from "./../components/ItemsCart";
import useCart from "../components/useCart/useCart";
import Container from "./../components/Container";
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();
  const { cart, addOne, substractOne, removeItem } = useCart(id);

  return (
    <>
      <Header />
      <Container>
        <ItemsCart cartItems={cart} addOne={addOne} substractOne={substractOne} removeItem={removeItem} />
      </Container>

    </>
  );
};

export default Cart;