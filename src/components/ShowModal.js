import { PropTypes } from "prop-types";

import './ShowModal.css';

function ShowModal ({ isOpen, product, closeModal }) {

  return isOpen ? (
    
    <div className="divShowModal">
      <div className="divModal">
        <button onClick={() => closeModal(true)}>X</button>
        <div className="divImgModal">
          <img src={product.image} alt={product.title} /> 
        </div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span>Price € {product.price}</span>  
      </div>
    </div>
  ) : null;
}

ShowModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ShowModal;