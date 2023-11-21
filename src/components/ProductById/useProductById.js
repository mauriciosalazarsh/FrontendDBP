import { useState, useEffect } from 'react';

const useProductById = (productId) => {
  const [product, setProduct] = useState(null);
  const [detailsClicked, setDetailsClicked] = useState(false);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(`https://backenddbpproyect-production.up.railway.app/productos/${productId}`);
        if (!response.ok) {
          setProduct(null);
          return;
        }
        const data = await response.json();
        setProduct(data);
      } catch {
        setProduct(null);
      }
    };

    fetchProductById();
  }, [productId]);

  const handleButtonClick = (action) => {
    if (action === 'detalles') {
      setDetailsClicked(true);
    }
  };

  return { product, handleButtonClick, detailsClicked };
};

export default useProductById;
