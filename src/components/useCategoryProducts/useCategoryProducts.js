import { useState, useEffect } from 'react';

const useCategoryProducts = (categoryId) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://backenddbpproyect-production.up.railway.app/categorias/${categoryId}/productos`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return products;
};

export default useCategoryProducts;
