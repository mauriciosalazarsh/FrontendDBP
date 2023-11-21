import React from "react";
import FlexWrapper from "./../FlexWrapper";
import $ from "styled-components";
const $PaymentLink = $.a`
    display: block;
    font-size: 12px;
    color: #3483fa;
    margin-top: 4px;
`;
const $Icon = $.a`
    margin-right: 10px;
`;
const PaymentItem = ({ text, icon, link }) => {
  return (
    <FlexWrapper flex={'1 0 auto'}>
      <$Icon>{icon}</$Icon>
      <div>
        <span>{text}</span>
        <$PaymentLink href="">{link}</$PaymentLink>
      </div>
    </FlexWrapper>
  );
};

export default PaymentItem;