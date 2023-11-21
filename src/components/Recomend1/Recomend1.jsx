import React from 'react';
import { styled } from '@mui/material/styles';
import { animated } from 'react-spring';
import Image1Image from "./../../assets/img/ProductPage1_main_image.png";

const Recomend11 = animated(styled('div')({
  backgroundColor: `rgba(250, 250, 250, 1)`,
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.16)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px 20px 35px 20px`, // Ajustado para tener el mismo padding que SampleCard
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
}));

const Image1 = styled('div')({
  backgroundImage: `url(${Image1Image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `6px`, // Ajustado para tener el mismo borderRadius que SampleCard
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `251px`, // Ajustado para tener la misma altura que SampleCard
  margin: `0px`,
  // Añadir las animaciones y otros estilos de react-spring si es necesario
});

const Description = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `8px 0px 0px 0px`,
});

const RoyalCrush = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Q895 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  margin: `2px 0px 0px 0px`,
}));

function Recomend1(props) {
  return (
    <Recomend11 className={props.className}>
      <Image1></Image1>
      <Description>
        <RoyalCrush>{`Royal Crush`}</RoyalCrush>
        <Q895>{`$8.95`}</Q895>
      </Description>
    </Recomend11>
  );
}

export default Recomend1;
