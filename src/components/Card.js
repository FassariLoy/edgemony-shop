import { useState } from "react";
import { PropTypes } from "prop-types";
import ShowModal from "./ShowModal";

import './Card.css';

function Card ({ product }) {
  const [ isModalOpen, setModalOpen ] = useState(false);

  return (
    <div className="divSingleCard">
      <div className="divImgh3Card">
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
      </div>
      <div className="divpbuttonCard">
        <p>Price € {product.price}</p>
                
        <button type="button" onClick={() => setModalOpen(true)}>View details</button>
        
        <ShowModal
          isOpen={isModalOpen}
          product={product}
          closeModal={() => setModalOpen(false)}
        />
      </div>
    </div>    
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
