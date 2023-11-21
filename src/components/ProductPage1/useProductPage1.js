import { useEffect, useState } from 'react';

const useProductPage1 = (productId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula la obtención de datos del producto por ID
    const fetchData = async () => {
      const response = await fetch(`https://backenddbpproyect-production.up.railway.app/productos/${productId}`);
      const productData = await response.json();
      setData(productData);
    };

    fetchData();
  }, [productId]);

  return { data };
};

export default useProductPage1;
