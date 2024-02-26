import styles from './Modal.module.css';
import React from "react"
import ReactModal from "react-modal"

function Modal({ openModal, closeModal, conteudo }) {
    return (
        <ReactModal 
        isOpen={openModal} 
        onRequestClose={closeModal} 
        className={styles.modal_open} 
        overlayClassName={styles.overlay}>
            <div className={styles.conteudo_modal}>
                <p>Equipamento: {conteudo.equipamento}</p>
                <p>Fabricante: {conteudo.fabricante}</p>
                <p>Modelo: {conteudo.modelo}</p>
                <p>Numero de Serie: {conteudo.serial}</p>
                <p>Localização Anterior: {conteudo.ultimaLocalizacao}</p>
                <p>Localização Atual: {conteudo.localizacaoAtual}</p>
            </div>
            <button className={styles.fechar_modal} onClick={closeModal}>Fechar</button>
        </ReactModal>
    )
};

export default Modal;