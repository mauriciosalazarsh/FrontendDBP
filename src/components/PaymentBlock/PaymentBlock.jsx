import React from "react";
import PaymentItem from "./../PaymentItem";
import { ReactComponent as IconCredit } from "./../../assets/img/icons/Credit.svg";
import { ReactComponent as IconDebit } from "./../../assets/img/icons/Debit.svg";
import { ReactComponent as IconCash } from "./../../assets/img/icons/Cash.svg";
import { ReactComponent as IconMore } from "./../../assets/img/icons/More.svg";
import $ from "styled-components";
import FlexWrapper from "./../FlexWrapper";
const $PaymentBlock = $.div`
  background-color: white;
  padding: 20px;
  margin-top: 30px;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 100%;
`;
const PaymentBlock = () => {
  return (
    <$PaymentBlock>
      <FlexWrapper flex={'1 1 auto'} className="payment-block" flexWrap={'wrap'}>
        <PaymentItem
          icon={<IconCredit />}
          text={"Tarjeta de Crédito"}
          link={"Ver promociones bancarias"}
        />
        <PaymentItem
          icon={<IconDebit />}
          text={"Tarjeta de débito"}
          link={"Ver más"}
        />
        <PaymentItem 
          icon={<IconCash />} 
          text={"Efectivo"} 
          link={"Ver más"} />
        <PaymentItem 
          icon={<IconMore />} 
          text={"Más medios de pago"} 
          link={"Ver todos"} />
      </FlexWrapper>
    </$PaymentBlock>
  );
};

export default PaymentBlock;