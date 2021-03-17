import { useState } from "react";
import PropTypes from "prop-types";
import Selection from "./Selection";
import Card from "./Card";

import './ListCard.css';

function ListCard ({ products, categories, openProductModal }) {

  const [searchTerm, setSearchTerm] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const termRegexp = new RegExp(searchTerm, "i");
  const aryFilter = products.filter(
    (product) =>
      product.title.search(termRegexp) !== -1 &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );

  return (
    <div className="divCard">
      <div className="Filter">
        <Selection 
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          aryFilter={aryFilter}
        />
      </div> 
      <div className="Products">
      {aryFilter.map((product) => (
        <Card
          product={product}
          key={product.id}
          
        />
      ))}
      </div>      
    </div>
  )
}

ListCard.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  
};

export default ListCard;