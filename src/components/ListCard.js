//import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Selection from "./Selection";
import Card from "./Card";

import './ListCard.css';

function ListCard ({ products, categories }) {
  //const [ searchTerm, setSearchTerm ] = useState();
  //const [ selectedCategories, setSelectedCategories ] = useState([]);

  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);

  const searchTerm = searchParams.get("q") || "";

  function updateSearchTerm(term) {
    if (term === "") {
      searchParams.delete("q");
    } else {
      searchParams.set("q", term)
    }
    history.push({ search: "?" + searchParams.toString() })
  }

  const selecttedCategoriesParam = searchParams.get("categories");
  const selectedCategories = selecttedCategoriesParam
    ? selecttedCategoriesParam.split(",")
    : [];

  function updateCategories(categories) {
    //setSelectedCategories(categories);
    const selectedParam = categories.join(",");
    if (categories.length === 0) {
      searchParams.delete("categories");
    } else {
      searchParams.set("categories", selectedParam)
    }
    history.push({ search: "?" + searchParams.toString() })
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
          term={searchTerm}
          setSearchTerm={updateSearchTerm}
          
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={updateCategories}
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