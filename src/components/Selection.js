import PropTypes from "prop-types";

import './Selection.css';
  
  function Selection ({ setSerch, Electronics, setElectronics, Jewelery, setJewelery, MenClothing, setMenClothing, WomenClothing, setWomenClothing, nmProducts }) {

  const InputSerch = (evt) => {
    setSerch(evt.target.value)
  }

  return (
    <div className="divCard">
      <label htmlFor="serch">Serch</label>
      <input id="serch" type="text" onChange={InputSerch} />
      <label htmlFor="">Product: {nmProducts} </label>
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
  serch: PropTypes.string.isRequired,
  setSerch: PropTypes.func.isRequired,
    
  Electronics: PropTypes.bool.isRequired, 
  setElectronics: PropTypes.func.isRequired,
  Jewelery: PropTypes.bool.isRequired, 
  setJewelery: PropTypes.func.isRequired,
  MenClothing: PropTypes.bool.isRequired, 
  setMenClothing: PropTypes.func.isRequired,
  WomenClothing: PropTypes.bool.isRequired, 
  setWomenClothing: PropTypes.func.isRequired,

  nmProducts: PropTypes.number.isRequired,
};

export default Selection;