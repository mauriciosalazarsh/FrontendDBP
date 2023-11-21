import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { animated, useSpring, easings } from 'react-spring';

const StyledButton = animated(
  styled(Button)(({ theme }) => ({
    backgroundColor: `rgba(100, 149, 237, 1)`, 
    boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.16)`,
    borderRadius: `8px`,
    display: `flex`,
    position: `relative`,
    flexDirection: `row`,
    width: '100%',
    justifyContent: `center`,
    alignItems: `center`,
    padding: `16px 0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
    height: 'auto',
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`, // Color de texto negro
    margin: `0px`,
    fontWeight: '700',
    fontSize: '16px',
    letterSpacing: '0.15000000596046448px',
    textDecoration: 'none',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: `rgba(65, 105, 225, 1)`, // Color azul más oscuro al pasar el mouse (RoyalBlue)
    },
    transition: theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
  }))
);

function ShopBtn1(props) {
  const [hoverStyle, hoverApi] = useSpring(() => ({
    transform: 'scale(1)',
    config: { duration: 100, easing: easings.easeOutBack },
  }));

  const handleMouseEnter = () => {
    hoverApi.start({ transform: 'scale(1.05)' });
  };

  const handleMouseLeave = () => {
    hoverApi.start({ transform: 'scale(1)' });
  };

  return (
    <StyledButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={hoverStyle}
      className={props.className}
      variant="contained"
      size="large"
      color="primary"
    >
      {props.text} {/* Utiliza el prop 'text' como contenido del botón */}
    </StyledButton>
  );
}

export default ShopBtn1;