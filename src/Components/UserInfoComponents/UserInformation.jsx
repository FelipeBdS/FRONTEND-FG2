import  { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'
import {
    InfoContainer,
    InfoTitle,
    InfoTitleDiv,
    EditableInfo,
    EditableField,
    EditButton
} from './UserInformationContainer'

Modal.setAppElement('#root');

const UserInformation = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        nome: '',
        nome_usuario: '',
        rua: '',
        numero_casa: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    const [editMode, setEditMode] = useState(false);
    const [usernameToConfirm, setUsernameToConfirm] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteUsername, setDeleteUsername] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://fg2-backend-2be0eab4ad81.herokuapp.com/api/cliente/userInfo');
                setUserInfo(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEditButtonClick = () => {
        setEditMode(true);
    };

    const handleSaveButtonClick = async () => {
        try {
            // Verificar o nome de usuário para confirmar
            if (usernameToConfirm === userInfo.nome_usuario) {
                await axios.put('https://fg2-backend-2be0eab4ad81.herokuapp.com/api/cliente/atualizarEndereco', userInfo);
                setEditMode(false);
                alert('Endereço atualizado')
            } else {
                alert('Nome de usuário incorreto. Não é possível salvar as alterações.');
            }
        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
        }
    };

    const handleDeleteButtonClick = () => {
        setShowDeleteModal(true);
    };

    const handleModalConfirm = async () => {
        try {
            // Verificar o nome de usuário para confirmar
            if (deleteUsername === userInfo.nome_usuario) {
                const response = await axios.delete('https://fg2-backend-2be0eab4ad81.herokuapp.com/api/cliente/excluirConta', userInfo);
                console.log('Resposta do backend:', response);
                setShowDeleteModal(false);
                navigate('/login');
              } else {
                alert('Erro ao excluir usuário.');
              }
            } catch (error) {
              console.error('Erro ao deletar dados do usuário:', error);
            }
          };

    const handleInputChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <InfoContainer>
            <InfoTitleDiv>
                <InfoTitle>Informações do Cliente</InfoTitle>
            </InfoTitleDiv>
            <EditableInfo>
                <div>
                    <p>Nome:</p>
                    <EditableField
                        type="text"
                        name="nome"
                        value={userInfo.nome}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>

                <div>
                    <p>Nome_usuario: - Não editável</p>
                    <EditableField
                        type="text"
                        name="nome_usuario"
                        value={userInfo.nome_usuario}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>
                <p style={{ fontWeight: 'bold' }}>Endereço - Digite diretamente nos campos para alterar</p>
                <div>
                    <p>Rua</p>
                    <EditableField
                        type="text"
                        name="rua"
                        value={userInfo.rua}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>
                <div>
                    <p>Número da casa</p>
                    <EditableField
                        type="text"
                        name="numero_casa"
                        value={userInfo.numero_casa}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>
                <div>
                    <p>Bairro</p>
                    <EditableField
                        type="text"
                        name="bairro"
                        value={userInfo.bairro}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>
                <div>
                    <p>Cidade</p>
                    <EditableField
                        type="text"
                        name="cidade"
                        value={userInfo.cidade}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>
                <div>
                    <p>Estado</p>
                    <EditableField
                        type="text"
                        name="estado"
                        value={userInfo.estado}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                    />
                </div>
                <div>
                    <EditButton onClick={handleEditButtonClick}>
                        Editar Informações
                    </EditButton>
                </div>
                {editMode && (
                    <>
                        <p>Para confirmar a atualização de dados é necessário que digite seu nome de usuário.</p>
                        <EditableField
                            type="text"
                            placeholder="Digite seu nome de usuário para confirmar"
                            value={usernameToConfirm}
                            onChange={(e) => setUsernameToConfirm(e.target.value)}
                        />
                        <EditButton onClick={handleSaveButtonClick}>
                            Salvar Alterações
                        </EditButton>

                    </>
                )}
                <EditButton
                    onClick={handleDeleteButtonClick}
                    style={{ backgroundColor: 'red', color: 'white', alignSelf: 'flex-end' }}
                >
                    Excluir conta
                </EditButton>
                <Modal
                    isOpen={showDeleteModal}
                    onRequestClose={() => setShowDeleteModal(false)}
                    contentLabel="Excluir Conta"
                    style={{width: '40%', height: '40%'}}
                >
                    <p>Digite seu nome de usuário para confirmar a ação</p>
                    <input
                        type="text"
                        value={deleteUsername}
                        onChange={(e) => setDeleteUsername(e.target.value)}
                    />
                    <button onClick={handleModalConfirm}>Confirmar</button>
                    <button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                </Modal>


            </EditableInfo>
        </InfoContainer>
    );
};

export default UserInformation;