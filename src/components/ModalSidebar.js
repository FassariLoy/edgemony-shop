import PropTypes from "prop-types";
import './ModalSidebar.css';

function ModalSidebar ({ isOpen, closeModal, title, children }) {
   
  return (
    
    <div className={`ModalCart ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">

        <header className="headerCart">
          <button className="btnClose" type="button" onClick={closeModal}>X</button>
          <h2 className="Title">{title}</h2>
        </header> 
        {children}
      </div>
    </div>
  );
}

ModalSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalSidebar;