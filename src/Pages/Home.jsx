import Header from '../Components/HeaderComponents/Header'
import Carrossel from '../Components/HomeComponents/Carrossel'
import { HomeContainer } from '../Components/HomeComponents/StyledCarrossel'
 
export const Home = () => {
  return (
    <>
     <HomeContainer>
      <Header />
      <Carrossel />
     </HomeContainer>
    </>
  )
}
