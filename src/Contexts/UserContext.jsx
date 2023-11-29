import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
const UserContext = createContext();

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (formData) => {
    try {
      const response = await axios.post('https://fg2-backend-2be0eab4ad81.herokuapp.com/api/cliente/loginCliente', formData);
      setUser(response.data);
      setError(null);
    } catch (error) {
      setError('Nome de usuário ou senha incorretos.');
    }
  };

  const cadastrar = async (formData) => {
    try {
      const response = await axios.post('https://fg2-backend-2be0eab4ad81.herokuapp.com/api/cliente/cadastrarCliente', formData);
      setUser(response.data);
      setError(null);
    } catch (error) {
      setError('Erro ao cadastrar usuário.');
    }
  };

    
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, error, login, cadastrar, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
