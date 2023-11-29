import styled from 'styled-components'

export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
    background-color: rgb(207, 202, 202);
`;

export const InfoTitleDiv = styled.div`
    background-color: rgba(100, 80, 200, 1);
    width: 60%;
    height: 15vh;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(100, 80, 200, 2);
    text-align: center;
    
    
`;

export const InfoTitle = styled.p`
    color: white;
    font-size: 1.8rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

export const EditableInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .1rem;
    width: 60%;
    border: 2px solid white;
    p {
        font-size: 1rem
    }
`;

export const EditableField = styled.input`
    width: 200px;
    padding: 5px;
    margin-bottom: 10px;
`;

export const EditButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px;
    cursor: pointer;
`;