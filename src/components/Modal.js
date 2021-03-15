import PropTypes from "prop-types";

import './Modal.css';

function Modal ({ isOpen, closeModal, children}) {

  return (
    
    <div className={`ModalProduct ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">
        <button className="btnClose" type="button" onClick={closeModal}>X</button>
        {children}
      </div>
   
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;