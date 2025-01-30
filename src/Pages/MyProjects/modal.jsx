import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Modal({ modalImage, closeModal }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClickOutside = (e) => {
        // Fechar o modal se o clique for fora da área da imagem
        if (e.target.classList.contains("modal")) {
            closeModal();
        }
    };

    return (
        <div className="modal" style={modalStyle} onClick={handleClickOutside}>
            <div className="modal-content bg-danger border border-4 rounded-3 border-danger" style={modalContentStyle}>
                <span className="close fw-bold fs-5" onClick={closeModal}>x</span>
                <img src={modalImage} alt="Projeto" style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    );
}

const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalContentStyle = {
    position: "relative",
    maxWidth: "80%",
    maxHeight: "80%",
};

// Validação das propriedades
Modal.propTypes = {
    modalImage: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default Modal;
