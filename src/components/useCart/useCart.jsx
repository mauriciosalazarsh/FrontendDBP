import { useState, useEffect } from 'react';

const useCart = (cartId) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Usa el cartId en la URL
        const response = await fetch(`https://backenddbpproyect-production.up.railway.app/carritos/${cartId}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos del carrito');
        }
        const data = await response.json();
        // Asume que la respuesta ya es el carrito específico que se pidió
        const cartData = data.productos.map(producto => ({
          ...producto,
          quantity: 1 // Asumiendo que quieres iniciar todos los productos con cantidad 1
        }));
        setCart(cartData);
      } catch (error) {
        console.error(error);
      }
    };

    if (cartId) {
      fetchCart();
    }
  }, [cartId]);

  const addOne = (id) => {
    setCart(currentCart =>
      currentCart.map(producto =>
        producto.id === id
          ? { ...producto, quantity: producto.quantity + 1 }
          : producto
      )
    );
  };

  const substractOne = (id) => {
    setCart(currentCart =>
      currentCart.map(producto =>
        producto.id === id && producto.quantity > 1
          ? { ...producto, quantity: producto.quantity - 1 }
          : producto
      )
    );
  };

  const removeItem = async (id) => {
    try {
      // Solicitud DELETE al servidor
      const response = await fetch(`http://localhost:8080/carritos/${id}`, {
        method: 'DELETE',
        // Si necesitas configurar headers, como un token de autenticación:
        // headers: {
        //   'Authorization': 'Bearer tu_token'
        // },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el producto del carrito');
      }

      // Si la eliminación fue exitosa en el backend, actualizamos el estado del carrito
      setCart(currentCart => currentCart.filter(producto => producto.id !== id));

    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const addItemToCart = (newProduct) => {
    setCart(currentCart => {
      // Verificar si el producto ya está en el carrito
      const isProductInCart = currentCart.some(product => product.id === newProduct.id);

      if (isProductInCart) {
        // Si ya está, aumentamos la cantidad
        return currentCart.map(product => 
          product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product
        );
      } else {
        // Si no está, lo agregamos al carrito con cantidad 1
        return [...currentCart, { ...newProduct, quantity: 1 }];
      }
    });
  };

  return { cart, addOne, substractOne, removeItem, addItemToCart  };

};

export default useCart;
