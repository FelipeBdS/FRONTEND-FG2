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
                // Lógica para tratar sucesso (por exemplo, redirecionar o usuário)
                console.log('Login bem-sucedido!');
                
                navigate('/home')
              }
            } catch (error) {
              // Lógica para tratar falha
              if (error.response && error.response.status === 401) {
                // Nome de usuário ou senha incorretos
                alert('Nome de usuário ou senha incorretos.');
              } else if (error.response && error.response.status === 404) {
                // Nome de usuário não encontrado
                alert('Nome de usuário não encontrado.');
              } else {
                // Outros erros
                console.error('Erro ao enviar a requisição:', error);
                alert('Erro ao processar a requisição. Tente novamente mais tarde.');
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
                
            </LoginForm>
            </DivForm>
        </MainContainerLogin>
    );
};

export default LoginFormComponent;