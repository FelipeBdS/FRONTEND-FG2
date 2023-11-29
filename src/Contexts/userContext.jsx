import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Importe o PropTypes
import axios from 'axios'

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (formData) => {
    try {
      const response = await axios.post('URL_DO_SEU_BACKEND/login', formData);
      setUser(response.data);
      setError(null);
    } catch (error) {
      setError('Nome de usuário ou senha incorretos.');
    }
  };

  const cadastrar = async (formData) => {
    try {
      const response = await axios.post('URL_DO_SEU_BACKEND/cadastro', formData);
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

UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que 'children' é do tipo 'node' e é obrigatório
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
