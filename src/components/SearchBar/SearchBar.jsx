import React from "react";
import $ from "styled-components";
import { ReactComponent as SearchIcon } from "./../../assets/img/SearchIcon.svg";
const SearchBar = () => {
  return (
    <$SearchBar className="searchbar">
      <$Form action="">
        <$Input type="text" placeholder="Buscar productos, marcas y más..." />
        <$Button type="submit">
          <SearchIcon />
        </$Button>
      </$Form>
    </$SearchBar>
  );
};
const $SearchBar = $.div`
  width: 100%;
  display: flex;
  max-width: 600px;
  margin-left:50px;
`;
const $Form = $.form`
  width: 100%;
  position: relative;
`;
const $Input = $.input`
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  padding: 11px 60px 11px 15px;
  font-size: 15px;
  border: 0;
  width: 100%;
  ::placeholder {
    color: #d6d6d6;
  }
`;
const $Button = $.button`
  position: absolute;
  background: transparent;
  border: 0;
  top: 4px;
  right: 6px;
  padding: 6px;
  :before{
    content: '';
    width: 1.2px;
    height: 21px;
    background: #e2e2e2;
    position: absolute;
    left: -6px;
  }
`;
export default SearchBar;