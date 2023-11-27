import {
    BrandContainer,
    ChooseABrand
  } from '../Components/MarcasComponents/StyledBrandPage'
  import BrandCard from '../Components/MarcasComponents/MarcasComponents'
  import LacosteLogo from "../assets/Lacoste-Logo.png"
  import NikeLogo from "../assets/Nike-Logo.jpg"
  import LevisLogo from "../assets/Levi's-Logo.png"
  import PumaLogo from "../assets/Puma-Logo.png"
  import ColcciLogo from "../assets/Colcci-Logo.png"
  import CKLogo from "../assets/CK-Logo.jpg"
  import HeringLogo from "../assets/Hering-Logo.jpg"
  import AdidasLogo from "../assets/Adidas-Logo.png"
  
  
  
  
  
  const BrandPage = () => {
    return (
      <>
        <ChooseABrand>Qual marca está procurando?</ChooseABrand>
        <BrandContainer>
          <BrandCard 
          BrandimageSrc={LacosteLogo}
          BrandimageAlt="Lacoste Logo"
          />
          <BrandCard 
          BrandimageSrc={NikeLogo}
          BrandimageAlt="Nike Logo"
          />
          <BrandCard 
          BrandimageSrc={LevisLogo}
          BrandimageAlt="Levis Logo"
          />
          <BrandCard 
          BrandimageSrc={PumaLogo}
          BrandimageAlt="Puma Logo"
          />
          <BrandCard 
          BrandimageSrc={ColcciLogo}
          BrandimageAlt="Colcci Logo"
          />
          <BrandCard 
          BrandimageSrc={CKLogo}
          BrandimageAlt="CK Logo"
          />
          <BrandCard 
          BrandimageSrc={HeringLogo}
          BrandimageAlt="Hering Logo"
          />
          <BrandCard 
          BrandimageSrc={AdidasLogo}
          BrandimageAlt="Adidas Logo"
          />
        </BrandContainer>
  
      </>
    )
  }
  
  export default BrandPage