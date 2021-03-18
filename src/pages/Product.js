import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchProduct } from "./../services/api";
import Loader from "./../components/Loader";
import Error from "./../components/Error";

import PropTypes from "prop-types";

import { formatPrice } from "../services/utils";

import "./Product.css";

function Product ({ isInCart, addToCart, removeFromCart }) {
  let { productId } = useParams();

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setApiError("");
    fetchProduct(productId)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  }, [productId, retry])

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };
  
  return (
    <main>
      {isLoading ? ( 
        <Loader /> 
      ) : apiError ? (
        <Error 
          messageErr={apiError}
          closeBanner={() => setApiError("")}
          retry={() => setRetry(!retry)}
        /> 
      ) : (
        <div className="Product">
          <img className="Image" src={product.image} alt={product.title} /> 
          <h3 className="Title">{product.title}</h3>
          <p className="Description">{product.description}</p>
          <div className="PriceAddtoCart">
            <p>Price: {formatPrice(product.price)}</p>
            <button className="addToCart" type="button" onClick={toggleCart}>
              {isInCart(product) ? "Remove to Cart -" : "Add to Cart +"}
            </button>
          </div>
        </div>
      )}

    </main> 

  
  )
}

Product.propTypes = {
  /*product: PropTypes.object.isRequired,*/
  isInCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;