import './Hero.css'

function Hero(props) {
  return (
    <div className="divHero">
      <div className="divh1h2Hero">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
      <div className="divImgHero">
        <img src={props.cover} alt="" />
      </div>
    </div>
  )
}

export default Hero;