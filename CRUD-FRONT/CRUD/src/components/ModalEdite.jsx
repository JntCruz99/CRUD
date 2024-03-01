import React, { useState, useEffect } from 'react';
import blogFetch from "../axios/config";

const ModalEdite = ({ userId, onClose }) => {
    const [usuarios, setUsuario] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const getUsuario = async () => {
        try {
            const response = await blogFetch.get(`/users/${userId}`)

            const data = response.data
            setUsuario(data)
            inputsUsuarios(data.nome, data.idade);
        } catch (error) {
            console.log(error)
        }
    };

    function inputsUsuarios (nome, idade) {
        const nomeInput = document.getElementById("nomeInput");
        const idadeInput = document.getElementById("idadeInput");
        nomeInput.value = nome;
        idadeInput.value = idade;
    }

    const createPut = async (e) => {
        e.preventDefault();

        const post = {
            nome: nome,
            idade: idade
        };
        try {
            await blogFetch.put(`/users/${userId}`, post);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUsuario();
        inputsUsuarios();
    }, [])

    return (
        <div class="modal  modaltrue" tabindex="-1">
            <div class="modal-dialog modal-xl">
                <div class="modal-content ">
                <form onSubmit={(e) => createPut(e)}>
                        <fieldset>
                    <div class="modal-header">
                        <h5 class="modal-title">Editar {usuarios.nome}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nomeInput" onChange={(e) => setNome(e.target.value)} placeholder="nome..."/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Idade</label>
                            <input type="text" class="form-control" id="idadeInput" onChange={(e) => setIdade(e.target.value)} placeholder="idade..."/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                    </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalEdite