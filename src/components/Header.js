import PropTypes from "prop-types";

import './Header.css'

function Header({ logo, title, products, ProductsCart }) {
  
  function TotalCart() {
    let TtlCart = 0
    ProductsCart.map((id) => {
      return TtlCart = TtlCart + products[id-1].price;
    }) 
    return TtlCart
  }

  return (
    <div className="divHeader">
      <img src={logo} alt={title} /> 
      <div className="divH3">
        <h3>Products Cart: {ProductsCart.length}</h3>
        <h3>Total Cart: € {TotalCart().toFixed(2)}</h3>
      </div>
    </div>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  ProductsCart: PropTypes.array.isRequired,
};

export default Header;