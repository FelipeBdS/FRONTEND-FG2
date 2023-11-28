import React, { useState } from 'react';
import { LoginForm, FormLabel, FormInput, SubmitButton, MainContainerLogin, LogoDiv, LogoImage, TabLinksContainer, TabLinkLogin, TabLinkCadastro, DivForm } from './StyledLogin';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext'; // Substitua pelo caminho correto

const LoginFormComponent = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    nome_usuario: '',
    senha: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      navigate('/home');
    } catch (error) {
      setError(alert('Erro ao fazer login.'));
    }
  };

  return (
    
    <MainContainerLogin>
      <LogoDiv>
        <LogoImage src='https://raw.githubusercontent.com/FelipeBdS/FG2-HTML-CSS/master/assets/FG2-logo.png' />
      </LogoDiv>
      <DivForm>
        <TabLinksContainer>
          <TabLinkLogin to="/">Login</TabLinkLogin>
          <TabLinkCadastro to="/cadastro">Cadastro</TabLinkCadastro>
        </TabLinksContainer>
        <LoginForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="nome_usuario">Nome de Usuário:</FormLabel>
          <FormInput
            type="text"
            id="nome_usuario"
            name="nome_usuario"
            value={formData.nome_usuario}
            onChange={handleInputChange}
          />

          <FormLabel htmlFor="senha">Senha:</FormLabel>
          <FormInput
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
          />

          <SubmitButton type="submit">Login</SubmitButton>

          {error && <p>{error}</p>}
        </LoginForm>
      </DivForm>
    </MainContainerLogin>


  );

};

export default LoginFormComponent;
