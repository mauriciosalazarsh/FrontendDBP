import React from "react";
import $ from "styled-components";
const $Title = $.h2`
    font-size: 23px;
    font-weight: 300;
    display: inline-block;
    margin-bottom: 17px;
    margin-right: 10px;
    color: #666;
`;
const $Link = $.a`
    color: #3483fa;
    font-size: 14px;
`;
const Title = ({ text, viewHistory }) => {
  return (
    <>
      <$Title>{text}</$Title>
      {viewHistory ? <$Link href="">Ver historial</$Link> : null}
    </>
  );
};

export default Title;