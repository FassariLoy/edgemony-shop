import { PropTypes } from "prop-types";

import './Header.css'

function Header({ logo, title, ProductsCart }) {
  return (
    <div className="divHeader">
      <img src={logo} alt={title} /> 
      <h3>Products Cart: {ProductsCart.length}</h3>
      
      <h3>Total Cart: {"Da fare"}</h3>
    </div>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ProductsCart: PropTypes.array.isRequired,
};

export default Header;