import PropTypes from "prop-types";

import './Error.css'

function Error({ setRetry, CloseBanner, setCloseBanner }) {
  return (
    <div className={`divError ${ CloseBanner ? `isClose` : '' }`}> 
      <h2>Errore di comunicazione</h2>
      <button className="Retry" type="button" onClick={() => setRetry(true)}>Retry</button>
      <button className="Close" type="button" onClick={() => setCloseBanner(true)}>X</button>
    </div>
  )
}

Error.propTypes = {
  setRetry: PropTypes.func.isRequired,
  CloseBanner: PropTypes.bool.isRequired,
  setCloseBanner: PropTypes.func.isRequired,
};

export default Error;