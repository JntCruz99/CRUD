import React from 'react';

const Modal = ({ titulo, mensagem, onClose }) => {
    return (
        <div className="modal modaltrue" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titulo}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button> {/* Adicionando a função onClose ao botão Close */}
                    </div>
                    <div className="modal-body">
                        <p>{mensagem}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Ok</button> {/* Adicionando a função onClose ao botão Ok */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
