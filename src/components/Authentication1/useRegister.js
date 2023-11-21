import React from 'react';

const variantOptions = {
  ScreenDesktop: 'ScreenDesktop',
};

const useRegister = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions['ScreenDesktop']
  );

  const data = { currentVariant };

  const fns = { setCurrentVariant };

  return { data, fns };
};

export default useRegister;
