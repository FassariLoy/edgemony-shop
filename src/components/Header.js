import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ShowCart from "./ShowCart";
import { formatPrice } from "../services/utils";

import './Header.css'

function Header({ logo, title, products, ProductsCart, setProductsCart }) {

  const [ isModalOpen, setModalOpen ] = useState(false);
 
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.height = ""
      document.body.style.overflow = ""
    }
  }, [ isModalOpen ])
  
  function TotalCart() {
    let TtlCart = 0
    ProductsCart.map((id) => {
      return TtlCart = TtlCart + products[id-1].price;
    }) 
    return TtlCart.toFixed(2);
  }

  return (
    <div className="divHeader">
      <img className="HeaderImg" src={logo} alt={title} /> 
      <span className="price">Total: {formatPrice(TotalCart())}</span>
      <span className="icon" onClick={() => setModalOpen(true)}> 
        <i className="fas fa-shopping-cart"></i>
        <span className="qty">{ProductsCart.length}</span> 
      </span>
      <ShowCart
          isModalOpen={isModalOpen}
          products={products}
          closeModal={() => setModalOpen(false)}
          ProductsCart={ProductsCart}
          setProductsCart={setProductsCart}
         
        />
    </div>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  ProductsCart: PropTypes.array.isRequired,
  setProductsCart: PropTypes.func.isRequired,
};

export default Header;