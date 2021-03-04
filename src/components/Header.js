import { PropTypes } from "prop-types";

import './Header.css'

function Header({ logo, title }) {
  return (
    <div className="divHeader">
        <img src={logo} alt={title} /> 
    </div>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;