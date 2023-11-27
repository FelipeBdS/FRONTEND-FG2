import {
    ContainerMainCadastro,
    TitleDiv,
    CadastroForm,
    FormLabel,
    FormInput,
    LabelInputDiv
} from './StyledCadastro';

const CadastroFormComponent = () => {
    return (
        <>
            <ContainerMainCadastro>
                <TitleDiv>Cadastro FG2</TitleDiv>
                <CadastroForm>
                    <LabelInputDiv>
                        <FormLabel htmlFor='Nome'></FormLabel>
                    </LabelInputDiv>
                </CadastroForm>
            </ContainerMainCadastro>
        </>
    )

}

export default CadastroFormComponent;