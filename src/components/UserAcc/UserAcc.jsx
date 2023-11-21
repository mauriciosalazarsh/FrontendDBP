import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'styled-components';
import { UserContext } from '../UserContext/UserContext';

const $LoginButton = $.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  color: #464646; 
  &:hover {
    text-decoration: underline; 
  }
`;

const UserAcc = () => {
  const navigate = useNavigate();

  const { setUserId, setJwtToken } = useContext(UserContext);

  const handleLogout = () => {
    // Elimina el token JWT y el ID del usuario del almacenamiento local
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    
    // Actualiza el contexto para reflejar que el usuario ha cerrado sesión
    setJwtToken('');
    setUserId(null);
    
    // Redirige al usuario a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <$LoginButton onClick={handleLogout}>
      Cerrar Sesión
    </$LoginButton>
  );
};

export default UserAcc;
