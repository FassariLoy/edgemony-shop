import PropTypes from "prop-types";
import { formatPrice } from "../services/utils";
import './ShowModalCart.css';

function ShowCart ({ isOpen, products, closeModal, cartTotal, removeFromCart, emptyCart, setProductQuantity }) {
   
  return isOpen ? (
    
    <div className="divCart">
      <button className="btnClose" type="button" onClick={() => closeModal(true)}>X</button>

      <header className="headerCart">
        <h2 className="headerTitle">Cart</h2>
      </header> 
      
      <div className="divProducts">
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
  ) : null;
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