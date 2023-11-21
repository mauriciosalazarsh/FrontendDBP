import React from "react";
import MenuButton from "../MenuButton";
import { Link } from "react-router-dom";
import $ from "styled-components";
const $Nav = $.ul`
    margin-left: 45px;
`
const Items = [
  {
    text: "Todos los productos",
    isExpandible: false,
    to: "/products",
  },
  {
    text: "Polos",
    isExpandible: false,
    to: "/categorias/4/productos",
  },
  {
    text: "Calzados",
    isExpandible: false,
    to: "/categorias/2/productos",
  },
  {
    text: "Pantalones",
    isExpandible: false,
    to: "/categorias/1/productos",
  },

];
const Nav = () => {
  return (
    <$Nav>
      {Items.map((item) => (
        <Link to={item.to} key={item.text}>
        <MenuButton text={item.text} />
      </Link>
    ))}
    </$Nav>
  );
};

export default Nav;