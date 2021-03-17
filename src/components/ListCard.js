import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Selection from "./Selection";
import Card from "./Card";

import './ListCard.css';

function ListCard ({ products, categories }) {
  //const [ searchTerm, setSearchTerm ] = useState();
  const [ selectedCategories, setSelectedCategories ] = useState([]);

  const location = useLocation();
  const history = useHistory();

  console.log("location:", location)
  
  const searchParams = new URLSearchParams(location.search);

  const searchTerm = searchParams.get("q") || "";

  function updateSearchTerm(Term) {
    //setSearchTerm(Term)
    if (Term === "") {
      searchParams.delete("q");
    } else {
      searchParams.set("q", Term)
    }
    history.push({ search: "?" + searchParams.toString() })
    //console.log("location 2:", location)
  }

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
          setSearchTerm={updateSearchTerm}
          
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