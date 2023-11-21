import React from "react";
import Logo from "../Logo";
import SearchBar from "./../SearchBar";
import Container from "./../Container";
import FlexWrapper from "./../FlexWrapper";
import $ from "styled-components";
import LocationButton from "./../LocationButton";
import Nav from "./../Nav";
import UserAcc from "../UserAcc";
import CartWidget from "../CartWidget/CartWidget";


const $CreditImg = $.img`
  max-width: 340px;
`;
const $Header = $.header`
  background-color: #bed0d0;
  margin: 0;
  padding: 7px;
  color: #8f8f8f !important;
  box-shadow: var(--shadow);
`;
const Header = () => {
  return (
    <$Header>
      <Container>
        <FlexWrapper>
          <Logo />
          <SearchBar />

        </FlexWrapper>


        <FlexWrapper justify={"unset"} margin={"10px 0 0 0"}>
          <Nav />
          <FlexWrapper justify={"flex-end"}>
            <UserAcc />
            <CartWidget />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </$Header>
    
  );
};

export default Header;