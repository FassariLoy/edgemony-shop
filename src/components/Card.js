import './Card.css'

function SingleCard (props) {
  return (
    <div className="divSingleCard">
      <div className="divImgh3Card">
        <img src={props.image} alt="" className="imgCard" />
        <h3 className="h3Card">{props.title}</h3>
      </div>
      <div className="divpbuttonCard">
        <p className="pCard">€ {props.price}</p>
        <button className="buttonCard">View details</button>
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
            key={product.id}
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
