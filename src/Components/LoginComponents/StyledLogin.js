import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Container principal da tela
export const MainContainerLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(16, 17, 29);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 10vh;
    
    @media (min-width: 320px) and (max-width: 839px) {
        gap:2vh;
    }
`;

export const LogoDiv = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const LogoImage = styled.img`
    width: 15vw;
    max-height: 30vh;

    @media (min-width: 320px) and (max-width: 839px) {
        width: 40vw;
        height: 50vh;
    }
`

export const TabLinksContainer = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    top: -15%;

    
    @media (min-width: 320px) and (max-width: 839px) {
        top: 7%;   
    }
`;

export const TabLinkLogin = styled(Link) `
    width: 20vw;
    font-size:20px;
    background-color: rgba(100, 80, 200, 1);
    color: white;
    height: 6vh;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(100, 80, 200, 2);
    text-align: center;
    text-decoration: none;
    padding-top: 15px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);

    
    @media (min-width: 320px) and (max-width: 839px) {
     font-size: 1rem;   
    }

`

export const TabLinkCadastro = styled(Link) `
    font-size:20px;
    width: 20vw;
    background-color: rgb(16, 17, 29);
    color: white;
    height: 6vh;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(100, 80, 200, 1);
    text-align: center;
    text-decoration: none;
    padding-top: 15px;

    
    @media (min-width: 320px) and (max-width: 839px) {
     font-size: 1rem;   
    }
`

// Div para envolver o form e os tabs login e cadastro
export const DivForm = styled.div`
    width: 40vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(16, 17, 29);
    position: relative;

`;


// Formulário
export const LoginForm = styled.form`
    width: 40vw;
    height: 40vh;
    padding-top: 15px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(100, 80, 200, 1);
    color: white;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
    opacity: .8;
    
    @media (min-width: 320px) and (max-width: 839px) {
        gap:1vh;
        font-size: 1rem;
        transform: translateY(30%);
        
        
    }
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

export const SubmitButton = styled.button`
    background-color: rgba(100, 80, 200, .6);
    color: #fff;
    padding: 10px;
    width: 20vw;
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

