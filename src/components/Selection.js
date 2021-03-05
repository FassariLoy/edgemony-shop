import { PropTypes } from "prop-types";

import './Selection.css';

  
  function Selection ({ Electronics, setElectronics, Jewelery, setJewelery, MenClothing, setMenClothing, WomenClothing, setWomenClothing }) {

  return (
    <div className="divCard">
      <input type="text"/>
      <div>
        <button type="button" onClick={() => setElectronics(!Electronics) } className={`${ Electronics ? `isSelect` : 'unSelect' }`}>Electronics</button>
        <button type="button" onClick={() => setJewelery(!Jewelery) } className={`${ Jewelery ? `isSelect` : 'unSelect' }`}>Jewelery</button>
        <button type="button" onClick={() => setMenClothing(!MenClothing) } className={`${ MenClothing ? `isSelect` : 'unSelect' }`}>Men clothing</button>
        <button type="button" onClick={() => setWomenClothing(!WomenClothing) } className={`${ WomenClothing ? `isSelect` : 'unSelect' }`}>Women clothing</button>
      </div>
    </div>
  )
}

Selection.propTypes = {
  Electronics: PropTypes.bool.isRequired, 
  setElectronics: PropTypes.func.isRequired,
  Jewelery: PropTypes.bool.isRequired, 
  setJewelery: PropTypes.func.isRequired,

  MenClothing: PropTypes.bool.isRequired, 
  setMenClothing: PropTypes.func.isRequired,
  WomenClothing: PropTypes.bool.isRequired, 
  setWomenClothing: PropTypes.func.isRequired,
};

export default Selection;