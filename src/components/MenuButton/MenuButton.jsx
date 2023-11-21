import React from "react";
import $ from "styled-components";
const $MenuButton = $.li`
    color: #868686;
    font-size: 12px;
    cursor: pointer;
    margin-right: 20px;
    letter-spacing: 1px;
`;
const MenuButton = ({ text, isExpandible }) => {
  return <$MenuButton>{text}</$MenuButton>;
};

export default MenuButton;