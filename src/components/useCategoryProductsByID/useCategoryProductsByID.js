import { useState, useEffect } from 'react';

const useCategoryProductByID = (categoryId, productId) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://backenddbpproyect-production.up.railway.app/categorias/${categoryId}/productos/${productId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details: ", error);
        setProductDetails(null);
      }
    };

    fetchProductDetails();
  }, [categoryId, productId]);

  return productDetails;
};

export default useCategoryProductByID;
