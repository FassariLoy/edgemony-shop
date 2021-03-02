import { useState } from "react";
import ShowModal from "./ShowModal";
import './Card.css';

function SingleCard (props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(props.modalIsOpen);

  return (
    <div className="divSingleCard">
      <div className="divImgh3Card">
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
      </div>
      <div className="divpbuttonCard">
        <p>€ {props.price}</p>
                
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>View details</button>
        <div className={`modal ${ modalIsOpen ? 'modal--is-open' : ''}`}>
          <ShowModal product={props} />
        </div>
        
      </div>
    </div>    
  )
}

function Card (props) {
  return (
    <div className="divCard">
      {props.products.map((product) => {
        return (
          <SingleCard
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            modalIsOpen={false}
          />
        )
        })
      }
      
      {/*
      <div>
        <h1 className="h1Hero">{props.title}</h1>
        <h2 className="h2Hero">{props.description}</h2>
      </div>
      <div className="divImgHero">
        <img src={props.cover} alt="" className="imgHero" />
      </div>
      */}

    </div>
  )
}

export default Card;
