import styled from 'styled-components'

export const AboutDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    flex-direction: column;
    background-color: rgb(16, 17, 29);
`;

export const Fg2Image = styled.img`
    max-width:45%;
    height: 40vh;
    border: 2px solid white;
    border-radius: 20px;
`

export const AboutUsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
`

export const AboutTitle = styled.h1`
    color: white;
    font-size: 1.5rem;
    text-align: center;
`

export const AboutText = styled.p`
    color: white;
    font-size: 1rem;
`