import { PropTypes } from "prop-types";
import Card from "./Card";

import './ListCard.css';

function ListCard ({ serch, products, Electronics, Jewelery, MenClothing, WomenClothing, setNmProducts }) {
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

  if ((!Electronics) && (!Jewelery) && (!MenClothing) && (!WomenClothing)) {
    aryFilter = products;
  }
  aryFilter  = aryFilter.filter((product) => {
    return (
      product.title.toUpperCase().includes(serch.toUpperCase()) ||
      product.description.toUpperCase().includes(serch.toUpperCase())
      )
  })
  
  setNmProducts(aryFilter.length);
  
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
  serch: PropTypes.string.isRequired,

  products: PropTypes.array.isRequired,
  Electronics: PropTypes.bool.isRequired, 
  Jewelery: PropTypes.bool.isRequired, 
  MenClothing: PropTypes.bool.isRequired, 
  WomenClothing: PropTypes.bool.isRequired, 

  nmProducts: PropTypes.number.isRequired,
  setNmProducts: PropTypes.func.isRequired,
};

export default ListCard;