import PropTypes from "prop-types";

import { formatPrice } from "../services/utils";

import './ShowModalProduct.css';

function ShowModalProduct ({ 
  isOpen, 
  product, 
  closeModal, 
  inCart,
  addToCart,
  removeFromCart,
}) {

  const toggleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    
    <div className={`ModalProduct ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">
        <button className="btnClose" type="button" onClick={closeModal}>X</button>
        {!!product ? (
          <div className="CardModal">
            <img src={product.image} alt={product.title} /> 
            <h3>{product.title}</h3>
            <p className="ShowCardP">{product.description}</p>
            <div className="content">
              <p>Price: {formatPrice(product.price)}</p>
              <button type="button" className="addToCart" onClick={toggleCart}>
                {inCart ? "Remove to Cart -" : "Add to Cart +"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

ShowModalProduct.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ShowModalProduct;