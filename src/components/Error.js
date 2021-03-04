import PropTypes from "prop-types";

import './Error.css'

function Error({ isRetry, CloseBanner, isCloseBanner }) {
  return (
    <div className={`divError ${ CloseBanner ? `isClose` : '' }`}> 
      <h2>Errore di comunicazione</h2>
      <button className="Retry" type="button" onClick={isRetry}>Retry</button>
      <button className="Close" type="button" onClick={isCloseBanner}>X</button>
    </div>
  )
}

Error.propTypes = {
  isRetry: PropTypes.func.isRequired,
  CloseBanner: PropTypes.bool.isRequired,
  isCloseBanner: PropTypes.func.isRequired,
};

export default Error;