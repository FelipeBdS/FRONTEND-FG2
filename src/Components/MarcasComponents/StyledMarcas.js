import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const MarcasDiv = styled.div`
max-height: 100%;
width: 80%;
display: grid;
grid-template-columns: repeat(4, 1fr);
align-items: center;
justify-content: center;
gap: 2vw;
overflow: hidden;
padding-left: 13vw;

`;


export const CardBrand = styled.div`
    border: 3px solid black;
    border-radius: 20px;
    width: 13vw;
    height: 25vh;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    background-color: white;
    &:hover {
        
        transform: translateX(2%);
        
        transition: .4s;
    }
`

export const BrandImage = styled(Link)`
    img {
        width: 100%;
        height: 99%;
        border-radius: 10px;
        &:hover {
            transform: translateX(2%);
            transition: .4s;
        }
    }
    
`