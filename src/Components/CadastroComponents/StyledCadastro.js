import styled from 'styled-components';

export const ContainerMainCadastro = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(16, 17, 29);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 2vh;
    
    @media (min-width: 320px) and (max-width: 839px) {
        gap:2vh;
    }
`;

export const TitleDiv = styled.h2`
    width: 80%;
    height: 10vh;
    font-size: 2rem;
    text-align: center;
    border: 2px solid black;
    border-radius: 20px;
    background-color: rgba(100, 80, 200, 1);
    color: white;
    box-shadow: 0 0 20px rgba(100, 80, 200, 2);
`;

export const CadastroForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 1rem;
  border: 2px solid black;
  box-shadow: 0 0 20px rgba(100, 80, 200, 2);
`;

export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
`;

export const SubmitButton = styled.button`
    background-color: rgba(100, 80, 200, .6);
    color: #fff;
    padding: 10px;
    width: 90%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(100, 80, 200, 1);
    }

    @media (min-width: 320px) and (max-width: 839px) {
        font-size: 1rem;
        
    }
`;