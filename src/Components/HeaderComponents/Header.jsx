import { useState } from 'react';
import Fg2Logo from '../../assets/FG2-logo.png';
import ShoppingCart1 from '../../assets/icons8-carrinho-de-compras.png';
import ProfileIcon from '../../assets/icons8-usuário-60.png'
import MenuIcon from '../../assets/icons8-cardápio-100.png'
import { StyledHeader, LogoAndNav, Logo, Menu, CustomLink, CartDiv, MobileMenuIcon, MobileDiv, MobileCartDiv, MobileShoppingCart, UserIcon } from './StyledHeader';
import { useUser } from '../../Contexts/UserContext'; 
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { user, logout } = useUser(); 

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  }

  const handleLogout = () => {
    logout();
    navigate('/home');
  }


  return (
    <>
      <StyledHeader>
        <LogoAndNav>
          <Logo src={Fg2Logo} alt="Logo FG2" />
          <MobileMenuIcon src={MenuIcon} onClick={handleOpenMobileMenu} />
          <Menu>
            <CustomLink to="/home">Início</CustomLink>
            <CustomLink to="/marcas">Produtos</CustomLink>
            <CustomLink to="/sobre">Sobre</CustomLink>
          </Menu>
        </LogoAndNav>
        <CartDiv>
          {/* Sempre exibe o ícone de usuário e o nome */}
          <CustomLink to="/userInfo">
            <UserIcon src={ProfileIcon} />
            <span>Informações do perfil</span>
          </CustomLink>

          {user && (
            // Se o usuário estiver autenticado, exibe o botão de logout
            <button onClick={handleLogout}>Logout</button>
          )}
        </CartDiv>
      </StyledHeader>

      {openMobileMenu && (
        <MobileDiv>
          <span onClick={handleOpenMobileMenu}>&times;</span>
          <CustomLink to="/home">Início</CustomLink>
          <CustomLink to="/marcas">Marcas</CustomLink>
          <CustomLink to="/sobre">Sobre</CustomLink>
          <MobileCartDiv>
            <MobileShoppingCart src={ShoppingCart1} />
          </MobileCartDiv>
        </MobileDiv>
      )}
    </>
  );
};

export default Header;