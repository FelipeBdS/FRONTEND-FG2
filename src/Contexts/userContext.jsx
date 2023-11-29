import  { useState } from 'react';
import {
  ContainerMainCadastro,
  TitleDiv,
  CadastroForm,
  LabelInputDiv,
  FormLabel,
  FormInput,
  SubmitButton
} from './StyledCadastro';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext'; // Substitua pelo caminho correto

const CadastroFormComponent = () => {
  const navigate = useNavigate();
  const { cadastrar } = useUser();
  const [formData, setFormData] = useState({
    nome: '',
    nome_usuario: '',
    senha: '',
    rua: '',
    numero_casa: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await cadastrar(formData);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
    }
  };

  return (
    <ContainerMainCadastro>
      <TitleDiv>Cadastro FG2</TitleDiv>
      <CadastroForm onSubmit={handleSubmit}>
        <LabelInputDiv>
          <FormLabel htmlFor="nome">Nome:</FormLabel>
          <FormInput
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="nome_usuario">Nome de Usuário:</FormLabel>
          <FormInput
            type="text"
            id="nome_usuario"
            name="nome_usuario"
            value={formData.nome_usuario}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="senha">Senha:</FormLabel>
          <FormInput
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="rua">Rua:</FormLabel>
          <FormInput
            type="text"
            id="rua"
            name="rua"
            value={formData.rua}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="numero_casa">Número da Casa:</FormLabel>
          <FormInput
            type="text"
            id="numero_casa"
            name="numero_casa"
            value={formData.numero_casa}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="bairro">Bairro:</FormLabel>
          <FormInput
            type="text"
            id="bairro"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="cidade">Cidade:</FormLabel>
          <FormInput
            type="text"
            id="cidade"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <LabelInputDiv>
          <FormLabel htmlFor="estado">Estado:</FormLabel>
          <FormInput
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            required
          />
        </LabelInputDiv>

        <SubmitButton type='submit'>Cadastrar</SubmitButton>
      </CadastroForm>
    </ContainerMainCadastro>
  );
};

export default CadastroFormComponent;