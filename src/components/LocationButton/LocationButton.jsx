import React from "react";
import FlexWrapper from "./../FlexWrapper";
import $ from "styled-components";

const LocationButton = () => {
  return (
    <$Button>
      <FlexWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-map-pin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#919191"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="11" r="3" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
        <div>
          <$ButtonTextSmaller>Enviar a </$ButtonTextSmaller>
          <$ButtonText>
            Av Chile 121
          </$ButtonText>
        </div>
      </FlexWrapper>
    </$Button>
  );
};
const $ButtonText = $.span`
    display: block;
    text-align: left;
    color: #464646;
    font-weight: 300;
    font-size: 12px;
`;
const $ButtonTextSmaller = $.span`
    display: block;
    text-align: left;
    color: #a7a7a7;
    font-size: 11px;
    font-weight: lighter,
`;
const $Button = $.button`
    background: transparent;
    border:0;
`;
export default LocationButton;