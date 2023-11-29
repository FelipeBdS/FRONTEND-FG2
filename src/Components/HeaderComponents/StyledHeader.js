import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: rgb(16, 17, 29);
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 18vh;
  width: 100%;
`;

export const LogoAndNav = styled.div`
  max-width: 90vw;
  max-height: 15vh;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  max-width: 18vw;
  height: 17vh;
  align-self: center;
  padding-left: 2vw;
  
  @media (min-width: 320px) and (max-width: 609px) {
    transform: translateX(-40%);
    width: 80vw;
    height: 15vh;
  }

`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 6vw;
  align-items: center;
  gap: 15vw;

  @media (min-width: 400px) and (max-width: 840px) {
    font-size: 15px; 
    margin-left: 2vw;
    gap: 8vw;
  }

  @media (min-width: 320px ) and (max-width: 610px) {
    display: none;
  }


`;

export const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  span {
    font-size: .7rem;


  }
  &:hover {
    font-weight: bold;
    font-size: 23px;
  }

  @media (min-width: 400px) and (max-width: 840px) {
    font-size: 15px; 
    
  }

  @media (min-width: 320px ) and (max-width: 610px) {
    span {
      display: none;
    }
  }
`;


export const ShoppingCart = styled.img`
width: 3vw;
height: 5vh;
cursor: pointer;

@media (min-width: 610px) and (max-width: 840px) {
  width: 5vw;
  
}

@media (min-width: 320px) and (max-width: 609px) {
  display: none;
}

`;

export const UserIcon = styled.img`
width: 3vw;
height: 5vh;
cursor: pointer;

@media (min-width: 610px) and (max-width: 840px) {
  width: 5vw;
  
}

@media (min-width: 320px) and (max-width: 609px) {
  display: none;
}

`;

export const MobileShoppingCart = styled.img`
width: 10vw;
height: 6vh;
cursor: pointer;

@media (min-width: 610px) and (max-width: 840px) {
  width: 5vw;
  
}

`

export const LoginLink = styled(Link)`
font-size: 16px;
font-weight: bold;
color: white;
text-decoration: underline;
text-align: center;
&:hover {
  font-size: 18px;
  transition: .4s;
}

@media (min-width: 320px) and (max-width: 609px) {
  display: none;
}
`;

export const MobileLoginLink = styled(Link)`
font-size: 16px;
font-weight: bold;
color: white;
text-decoration: underline;

&:hover {
  font-size: 18px;
  transition: .4s;
}


`;

export const CadastroLink = styled(Link)`
font-size: 16px;
font-weight: bold;
color: white;
text-decoration: underline;

&:hover {
  font-size: 18px;
  transition: .4s;
}


`;

export const CartDiv = styled.div`
  width: 4vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  margin-left: 2vw;
  margin-top: 4vw


`;

export const MobileCartDiv = styled.div`
  width: 4vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vw;
  align-items: center;
  margin-top: 4vw

`;

export const MobileMenuIcon = styled.img`
  width: 10vw;
  height: 10vh;
  display: none;

  @media (min-width: 320px ) and (max-width: 610px) {
    display: block;
    transform: translateX(400%);
    padding-top: 10px;
  }
`;

export const MobileDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  background-color: rgb(16, 17, 29);
  display: flex;
  flex-direction: column;
  align-items: center;  // Alinha as opções no centro vertical
  justify-content: flex-start;  
  gap: 8vh;
  padding-top: 3vh;
  z-index: 999;  
`;


