import { useState, useEffect } from 'react';

const useProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://backenddbpproyect-production.up.railway.app/productos');
      const data = await response.json();
      setItems(data);
    };

    fetchProducts();
  }, []);

  return { items };
};

export default useProducts;
