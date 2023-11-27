import styled from 'styled-components'

export const CarrosselDiv = styled.div`
  width: 100%;
  height: 100vh;  
  .slick-track {
    display: flex;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 100%;
    height: 80vh;
    text-align: center;
  }
`;



export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`