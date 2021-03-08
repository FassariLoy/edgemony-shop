import PropTypes from "prop-types";

import './Error.css'

function Error({ messageErr, closeBanner, retry }) {
  return (
    <div className="divError"> 
      <h2>{messageErr}</h2>
      <button className="Retry" type="button" onClick={() => retry()}>Retry</button>
      <button className="Close" type="button" onClick={() => closeBanner()}>X</button>
    </div>
  )
}

Error.propTypes = {
  messageErr: PropTypes.string.isRequired,
  closeBanner: PropTypes.func.isRequired,
  retry: PropTypes.func.isRequired,
};

export default Error;