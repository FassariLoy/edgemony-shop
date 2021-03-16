import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatPrice } from "../services/utils";

import './Header.css'

function Header({ logo, title, cartTotal, cartSize, onCartClick }) {
  return (
    <div className="divHeader">
      <Link to="/">
        <img className="HeaderImg" src={logo} alt={title} /> 
      </Link>

      <div>
        <span className="price">Total: {formatPrice(cartTotal)}</span>
        <span className="icon" onClick={onCartClick}> 
          <i className="fas fa-shopping-cart"></i>
          <span className="qty">{cartSize}</span> 
        </span>
      </div>
    </div>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Header;