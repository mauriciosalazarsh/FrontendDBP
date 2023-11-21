import React from "react";
import $ from "styled-components";
const $FlexWrapper = $.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Esto separará tus elementos uniformemente */
  margin: ${(props) => props.margin || "0"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;

const FlexWrapper = ({ children, justify, margin, flex, flexWrap }) => {
  return (
    <$FlexWrapper
      className="flex-container"
      justify={justify}
      margin={margin}
      flex={flex}
      flexWrap={flexWrap}
    >
      {children}
    </$FlexWrapper>
  );
};

export default FlexWrapper;