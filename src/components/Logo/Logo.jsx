import React from "react";
import { Link } from "react-router-dom"; 
import logoDesktop from "./../../assets/img/logo_final2.png";
import MediaQuery from "react-responsive";

const Logo = () => {
  return (
    <>
      <MediaQuery minWidth={992}>
        <Link to="/">
          <img src={logoDesktop} alt="Logo" />
        </Link>
      </MediaQuery>
    </>
  );
};

export default Logo;
