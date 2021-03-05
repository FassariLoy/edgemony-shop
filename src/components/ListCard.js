import { PropTypes } from "prop-types";
import Card from "./Card";

import './ListCard.css';
/*
function Filtro ( {products} ) {
  const pippo = products.map((product) => product.title + "2");
}
*/

function ListCard ({ products, Electronics, Jewelery, MenClothing, WomenClothing }) {
  let aryFilter = [];
 
  if (Electronics) {
    aryFilter = aryFilter.concat(products.filter((product) => product.category === "electronics"));
  }
   
  if (Jewelery) {
    aryFilter = aryFilter.concat(products.filter((product) => product.category === "jewelery"));
  }

  if (MenClothing) {
    aryFilter = aryFilter.concat(products.filter((product) => product.category === "men clothing"));
  }
   
  if (WomenClothing) {
    aryFilter = aryFilter.concat(products.filter((product) => product.category === "women clothing"));
  }
 
  console.log(Jewelery)
  return (
    <div className="divCard">
      {aryFilter.map((product) => {
        return (
          <Card
            product={product}
            key={product.id}
            //modalIsOpen={false}
          />
        )
        })
      }
    </div>
  )
}

ListCard.propTypes = {
  products: PropTypes.array.isRequired,
  Electronics: PropTypes.bool.isRequired, 
  Jewelery: PropTypes.bool.isRequired, 
  MenClothing: PropTypes.bool.isRequired, 
  WomenClothing: PropTypes.bool.isRequired, 
  
};

export default ListCard;