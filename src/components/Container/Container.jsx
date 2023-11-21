import React from "react";
import $ from "styled-components";

const $Container = $.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;
const Container = ({ children }) => {
  return <$Container className="container">{children}</$Container>;
};

export default Container;