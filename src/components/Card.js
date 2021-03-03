import { useState } from "react";
import { PropTypes } from "prop-types";
import ShowModal from "./ShowModal";

import './Card.css';

function SingleCard ({ product }) {
  const [ isModalOpen, setModalOpen ] = useState(false);

  return (
    <div className="divSingleCard">
      <div className="divImgh3Card">
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
      </div>
      <div className="divpbuttonCard">
        <p>Price € {product.price}</p>
                
        <button onClick={() => setModalOpen(true)}>View details</button>
        
        <ShowModal
          isOpen={isModalOpen}
          product={product}
          closeModal={() => setModalOpen(false)}
        />
      </div>
    </div>    
  )
}

function Card ({ products }) {
  return (
    <div className="divCard">
      {products.map((product) => {
        return (
          <SingleCard

                     
            //image={product.image}
            //title={product.title}
            //price={product.price}
            //description={product.description}
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

SingleCard.propTypes = {
  product: PropTypes.object.isRequired,
};

Card.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Card;
