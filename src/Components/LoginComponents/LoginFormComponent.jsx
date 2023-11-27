import { useState } from 'react';
import axios from 'axios';
import { LoginForm, FormLabel, FormInput, SubmitButton, MainContainerLogin, LogoDiv, LogoImage, TabLinksContainer, TabLinkLogin, TabLinkCadastro, DivForm } from './StyledLogin';
import { useNavigate } from 'react-router-dom';


const LoginFormComponent = () => {
  const navigate = useNavigate();
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
      const response = await axios.post('https://fg2-backend-2be0eab4ad81.herokuapp.com/api/cliente/loginCliente', formData);

      
      if (response.status === 200) {
        response.data;
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        // Resposta não 2xx
        if (error.response.status === 401) {
          setError(alert('Nome de usuário ou senha incorretos.'));
        } else if (error.response.status === 404) {
          setError(alert('Nome de usuário não encontrado.'));
        }
      } else if (error.request) {
        // A requisição foi feita, mas não houve resposta
        console.error('Erro ao aguardar resposta do servidor:', error.request);
      } else {
        // Algum outro erro
        console.error('Erro ao enviar a requisição:', error.message);
      }
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
