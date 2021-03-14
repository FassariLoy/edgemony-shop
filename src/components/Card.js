import PropTypes from "prop-types";

import { formatPrice } from "../services/utils";

import './Card.css';

function Card ({ product, openProductModal }) {
  return (
    <div className="SingleCard">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="content">
        <p>Price: {formatPrice(product.price)}</p>
        <button className="btnView" type="button" onClick={openProductModal}>View details</button>
      </div>
    </div>    
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
  openProductModal: PropTypes.func.isRequired,
};

export default Card;
