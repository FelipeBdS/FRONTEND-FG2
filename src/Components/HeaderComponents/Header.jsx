import { useState } from 'react';
import Fg2Logo from '../../assets/FG2-logo.png';
import ShoppingCart1 from '../../assets/icons8-carrinho-de-compras.png';
import ProfileIcon from '../../assets/icons8-usuário-60.png'
import MenuIcon from '../../assets/icons8-cardápio-100.png'
import {
  StyledHeader,
  LogoAndNav,
  Logo,
  Menu,
  CustomLink,
  // ShoppingCart,
  // LoginLink,
  CartDiv,
  MobileMenuIcon,
  MobileDiv,
  MobileCartDiv,
  MobileShoppingCart,
  CadastroLink,
  MobileLoginLink,
  UserIcon
} from './StyledHeader'


const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  }

  return (
    <>
    <StyledHeader>
      <LogoAndNav>
        <Logo src={Fg2Logo} alt="Logo FG2" />
        <MobileMenuIcon src={MenuIcon} onClick={handleOpenMobileMenu}/>
        <Menu>
          <CustomLink to="/">Início</CustomLink>
          <CustomLink to="/brandpage">Produtos</CustomLink>
          <CustomLink to="/aboutpage">Sobre</CustomLink>
        </Menu>
      </LogoAndNav>
      <CartDiv>
        <UserIcon src={ProfileIcon} />
      </CartDiv>

    </StyledHeader>
      {openMobileMenu && (
      <MobileDiv>
        <span onClick={handleOpenMobileMenu} >&times;</span>
        <CustomLink to="/">Início</CustomLink>
        <CustomLink to="/brandpage">Marcas</CustomLink>
        <CustomLink to="/aboutpage">Sobre</CustomLink>
        <MobileCartDiv>
        <MobileShoppingCart src={ShoppingCart1} />
        <MobileLoginLink to="/login">Login</MobileLoginLink>
        <CadastroLink to="/cadastro">Cadastro</CadastroLink>
      </MobileCartDiv>
      </MobileDiv>
    )}
    
    </>
  );
};

export default Header;

