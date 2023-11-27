import styled from 'styled-components';

export const DesktopCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
`;

export const DesktopCard = styled.div`
    width: 60vw;
    max-width: 400px; /* Defina um valor máximo para o card */
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
`;

export const DesktopImageCard = styled.img`
    max-width: 100%;
    max-height: 80%;
    object-fit: cover; /* Ajusta o tamanho da imagem mantendo a proporção */
`;

export const Price = styled.div`
    padding: 10px;
    background-color: #f5f5f5;
    font-weight: bold;
`;

export const Description = styled.div`
    padding: 10px;
`;
