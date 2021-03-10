import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ShowModal from "./ShowModal";
import { formatPrice } from "../services/utils";

import './Card.css';

function Card ({ product, ProductsCart, setProductsCart }) {
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

  return (
    <div className="divSingleCard">
      <div className="divImgh3Card">
        <img className="CardImg" src={product.image} alt="" />
        <h3>{product.title}</h3>
      </div>
      <div className="divpbuttonCard">
        <p className="CardP">Price: {formatPrice(product.price)}</p>
                
        <button className="btnView" type="button" onClick={() => setModalOpen(true)}>View details</button>
        
        <ShowModal
          isOpen={isModalOpen}
          product={product}
          closeModal={() => setModalOpen(false)}
          ProductsCart={ProductsCart}
          setProductsCart={setProductsCart}
         
        />
      </div>
    </div>    
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
  ProductsCart: PropTypes.array.isRequired,
  setProductsCart: PropTypes.func.isRequired,
};

export default Card;
