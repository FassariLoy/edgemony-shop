import PropTypes from "prop-types";

import { formatPrice } from "../services/utils";

import './ProductDetail.css';

function ProductDetail ({ product, inCart, addToCart, removeFromCart }) {

  const toggleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <div>
      {!!product ? (
        <div className="Product">
          <img className="Image" src={product.image} alt={product.title} /> 
          <h3 className="Title">{product.title}</h3>
          <p className="Description">{product.description}</p>
          <div className="Content">
            <p>Price: {formatPrice(product.price)}</p>
            <button className="addToCart" type="button" onClick={toggleCart}>
              {inCart ? "Remove to Cart -" : "Add to Cart +"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ProductDetail;