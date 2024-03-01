import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import blogFetch from "../axios/config";
import Modal from '../components/Modal';
import ModalEdite from '../components/ModalEdite';

const Usuarios = () => {
  const [usuarios, setUsuario] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [usuarioId, setUsuarioId] = useState();
  const [showModalEdite, setShowModalEdite] = useState(false);
  const [modalContent, setModalContent] = useState({ titulo: '', mensagem: '' });

  const getUsuarios = async () => {
    try {

      const response = await blogFetch.get("/users")

      const data = response.data

      setUsuario(data)

    } catch (error) {
      setShowModal(true);
      setModalContent({ titulo: 'Erro', mensagem: error.message });
    }

  };

  const deleteUsuarios = async (id, nome) => {
    try {

      await blogFetch.delete(`/users/${id}`)
      getUsuarios();
      setShowModal(true);
      setModalContent({ titulo: 'Sucesso', mensagem: 'Usuario: ' + nome + ' deletado com sucesso!' });
    } catch (error) {
      setShowModal(true);
      setModalContent({ titulo: 'Erro', mensagem: error.message });
    }
  }

  const closeModal = () => {
    setShowModal(false);
  };
  const closeModalEdite = () => {
    setShowModalEdite(false);
  };

  useEffect(() => {
    getUsuarios();
  }, [])


  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Usuarios cadastrados</h1>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">IDADE</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <th scope="row">{usuario.id}</th>
                  <td>{usuario.nome || 'Sem Nome'}</td>
                  <td>
                    {usuario.idade < 18 ? (
                      <span style={{ color: 'red', fontSize: '12px' }}>Menor de idade</span>
                    ) : (
                      usuario.idade
                    )}
                  </td>
                  <td>
                    <button className='btn btn-warning' onClick={() => {
                      setUsuarioId(usuario.id);
                      setShowModalEdite(true);
                    }} >editar</button>
                    <button className='btn btn-danger' onClick={() => deleteUsuarios(usuario.id, usuario.nome)}>deletar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showModalEdite && <ModalEdite userId={usuarioId} onClose={closeModalEdite} />}
      {showModal && <Modal titulo={modalContent.titulo} mensagem={modalContent.mensagem} onClose={closeModal} />}

    </div>
  )
}

export default Usuarios