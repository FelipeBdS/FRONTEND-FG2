import {
    AboutDiv,
    Fg2Image,
    AboutUsDiv,
    AboutTitle,
    AboutText
} from './StyledSobre'
import fg2Logo from '../../assets/FG2-logo.png'

const Sobre = () => {
    return (
        <>
            <AboutDiv>
                <Fg2Image src={fg2Logo} />
                <AboutUsDiv>
                    <AboutTitle>FG2 MULTIMARCAS</AboutTitle>
                    <AboutText> A FG2 Multimarcas é um projeto acadêmico da matéria de Desenvolvimento web em HTML, CSS, JavaScript e PHP onde o grupo é composto por 4 membros: Gustavo Tartaglia, Gustavo Henrique, Felipe Batista e Felipe. E o tema escolhido tem como objetivo simular uma loja virtual de camisetas de diversas marcas. </AboutText>
                </AboutUsDiv>
            </AboutDiv>
        </>

    )

}

export default Sobre;