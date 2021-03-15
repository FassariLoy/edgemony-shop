import PropTypes from "prop-types";
import { formatPrice } from "../services/utils";
import './ShowModalCart.css';

function ShowCart ({ isOpen, products, closeModal, cartTotal, removeFromCart, emptyCart, setProductQuantity }) {
   
  return (
    
    <div className={`ModalCart ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">

        <header className="headerCart">
          <button className="btnClose" type="button" onClick={closeModal}>X</button>
          <h2 className="Title">Cart</h2>
        </header> 

        <div className="ContentArticle">
          {products.map((product) => {
            return (
              <div className="ArticleCart" key={product.id}>
                <div>
                  <img className="ArticleImg" src={product.image} alt={product.title} />  
                </div>
                
                <div className="ArticleDate">
                  <h2>{product.title}</h2>
                  <div>
                    <span>Quantity: </span>
                    <button className="btnQty" type="button" onClick={() => setProductQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1}>-</button>
                    <span> {product.quantity} </span>
                    <button className="btnQty" type="button" onClick={() => setProductQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                  <div className="PriceRemove">
                    <span>Price: {formatPrice(product.price)}</span>
                    <button className="btnRemove" onClick={() => removeFromCart(product.id)}>Remove</button>
                  </div>
                  
                </div>
              </div>
            )}
          )}
        </div>

        <footer className="footerCart">
          <button onClick={() => emptyCart()}>Empty Cart</button>  
          <span>Total: {cartTotal}</span>
        </footer>  
      </div>
    </div>
  );
}

ShowCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  cartTotal: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  emptyCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default ShowCart;