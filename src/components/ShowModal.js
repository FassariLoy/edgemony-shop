import PropTypes from "prop-types";
import { formatPrice } from "../services/utils";
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
          <img className="ShowCardImg" src={product.image} alt={product.title} /> 
        </div>
        <h3 className="ShowCardH3">{product.title}</h3>
        <p className="ShowCardP">{product.description}</p>
        <span className="spnPrice">Price: {formatPrice(product.price)}</span>  
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