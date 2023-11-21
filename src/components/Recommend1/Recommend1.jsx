import React from 'react';
import { styled } from '@mui/material/styles';
import Recomend1 from '../Recomend1/Recomend1';

const Recommend11 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,


  height: 'auto',
  marginTop: '20px',
});

const Title = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Thumbs = styled('div')({
  borderRadius: `0px`,
  display: `grid`,
  gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
  gap: `30px`,

  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
});

const Recomend11 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

const Recomend12 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

const Recomend13 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

const Recomend14 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

const Recomend15 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

const Recomend16 = styled(Recomend1)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 20px`,
}));

function Recommend1(props) {
  return (
    <Recommend11 className={props.className}>
      <Title>{`You might also like`}</Title>
      <Thumbs>
        <Recomend11 />
        <Recomend12 />
        <Recomend13 />
        <Recomend14 />
        <Recomend15 />
        <Recomend16 />
      </Thumbs>
    </Recommend11>
  );
}

export default Recommend1;
