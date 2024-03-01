import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import blogFetch from "../axios/config";
import Modal from '../components/Modal'; 

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [showModal, setShowModal] = useState(false); 
    const [modalContent, setModalContent] = useState({ titulo: '', mensagem: '' }); 

    const createPost = async (e) => {
        e.preventDefault();

        const post = {
            nome: nome,
            idade: idade
        };
        try {
            await blogFetch.post('/users', post);
            setShowModal(true);
            setModalContent({ titulo: 'SUCESSO', mensagem: 'usuario '+'"'+post.nome+'"'+ ' cadastrado com sucesso!!' });
            limparInputs();
        } catch (error) {
            setShowModal(true);
            setModalContent({ titulo: 'Erro', mensagem: error.message });
            limparInputs();
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const limparInputs = () => {
        setNome('');
        setIdade('');
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1>CADASTRO</h1>
                <div className='form-usuarios'>
                    <form onSubmit={(e) => createPost(e)}>
                        <fieldset>
                            <legend>Faça o cadastro do usuário</legend>
                            <div className="mb-3">
                                <label htmlFor="disabledTextInput" className="form-label">Nome do Usuário:</label>
                                <input type="text" id="disabledTextInput" className="form-control" value={nome} placeholder="Digite o nome do Usuário" onChange={(e) => setNome(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledTextInput" className="form-label">Idade do Usuário:</label>
                                <input type="text" id="disabledTextInput" className="form-control" value={idade} placeholder="Digite a idade do Usuário" onChange={(e) => setIdade(e.target.value)} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            {showModal && <Modal titulo={modalContent.titulo} mensagem={modalContent.mensagem} onClose={closeModal}/>} 
        </div>
    )
}

export default Cadastro;
