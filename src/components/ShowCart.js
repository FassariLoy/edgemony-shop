import PropTypes from "prop-types";
import { formatPrice } from "../services/utils";
import './ShowCart.css';

function ShowCart ({ isModalOpen, products, closeModal, ProductsCart, setProductsCart }) {
  
  function TotalCart() {
    let TtlCart = 0
    ProductsCart.map((id) => {
      return TtlCart = TtlCart + products[id-1].price;
    }) 
    return TtlCart.toFixed(2);
  }

  function RemoveProduct (item) {
    const aryFilter = ProductsCart.filter((id) => products[item].id !== id);
    return setProductsCart(aryFilter)
  }
  
  return isModalOpen ? (
    
    <div className="divCart">
      <header className="headerCart">
        <button className="btnClose" type="button" onClick={() => closeModal(true)}>X</button>
        <h2 className="title">Cart</h2>
      </header>  
      <div className="divProducts">
        {ProductsCart.map((item) => {
          return (
            <div className="ArticleCart" key={ProductsCart.id}>
              <img src="" alt=""/>
              {products[item].title}
              <button className="btnQty" type="button">-</button>
              <span>Qty</span>
              <button className="btnQty" type="button">+</button>
              {formatPrice(products[item-1].price)}
              <button type="button" onClick={() => RemoveProduct(item-1)}>X Remove</button>
            </div>
            
          )}
        )}
      </div>
      <footer className="footerCart">
        <span>Totale: {formatPrice(TotalCart())}</span>
      </footer>      
    </div>
  ) : null;
}

ShowCart.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  ProductsCart: PropTypes.array.isRequired,
  setProductsCart: PropTypes.func.isRequired,
 
};

export default ShowCart;