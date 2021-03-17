import PropTypes from "prop-types";

import './Selection.css';
  
function Selection ({ setSearchTerm, categories, selectedCategories, setSelectedCategories, aryFilter }) {

  function className (category) {
    return "btnCategory" + (selectedCategories.includes(category) ? " selected" : "");
  }

  function toggleCategory(category) {
    const newSelected = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => category !== item)
      : [...selectedCategories, category];
    return setSelectedCategories(newSelected);
  };
  
  return (
    <div className="Select">
      <div className="SelectFilter">
        <label htmlFor="search">Serch</label>
        <input id="search" type="text" onChange={(event) => setSearchTerm(event.target.value)}/>
      </div>
      <div>
        <label className="nmProduct" htmlFor="">Product: {aryFilter.length}</label>
      </div>
      <div className="SelectCategories">
        {categories.map((category) => (
          <button key={category} className={className(category)} onClick={() => toggleCategory(category)}>{category}</button>
        ))} 
      </div>
    </div>
  )
}

Selection.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
 
  aryFilter: PropTypes.array.isRequired,
};

export default Selection;