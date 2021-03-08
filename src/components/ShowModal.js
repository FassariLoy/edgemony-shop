import PropTypes from "prop-types";

import './ShowModal.css';

function ShowModal ({ isOpen, product, closeModal, ProductsCart, setProductsCart }) {

  function AddCart () {
    setProductsCart([...ProductsCart, product.id])
  }

  function TextBtnCart () {
      if (ProductsCart.includes(product.id)) {
        return "In cart";
      } 
      return "Add to cart"
  }

  function DisableBtnCart () {
    if (ProductsCart.includes(product.id)) {
      return true;
    } 
  }

  return isOpen ? (
    
    <div className="divShowModal">
      <div className="divModal">
        <button className="btnClose" type="button" onClick={() => closeModal(true)}>X</button>
        <div className="divImgModal">
          <img src={product.image} alt={product.title} /> 
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span className="spnPrice">Price € {product.price.toFixed(2)}</span>  
        <button disabled={DisableBtnCart()} type="button" onClick={AddCart} >{TextBtnCart()}</button> 
      </div>
        
    </div>
  ) : null;
}

ShowModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  ProductsCart: PropTypes.array.isRequired,
  setProductsCart: PropTypes.func.isRequired,
 
};

export default ShowModal;