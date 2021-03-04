import { PropTypes } from "prop-types";
import Card from "./Card";

import './ListCard.css';

function ListCard ({ products }) {
  return (
    <div className="divCard">
      {products.map((product) => {
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
};

export default ListCard;