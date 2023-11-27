import styled from 'styled-components';

export const ContainerMainCadastro = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    background-color: rgb(16, 17, 29);
    align-items: center;
    justify-content: center;
    
`;

export const TitleDiv = styled.div`
    width: 80vw;
    height: 10vh;
    border-radius: 20px;
    text-align: center;
    background-color: rgba(100, 80, 200, 1);
    color: white;
    box-shadow: 0 0 20px rgba(100, 80, 200, 2);
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
    padding-top: 40px;
    font-size: 30px;
`;

export const CadastroForm = styled.form`
    width: 80vw;
    height: 70vh;
    display: grid;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;

export const FormInput = styled.input`
    width: 50%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;

    @media (min-width: 320px) and (max-width: 839px) {
        width: 80%;
    }
`;


// Div para organizar melhor a label junto com o input para nao quebrar a estilização e responsividade
export const LabelInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    height: 40%;
`;
