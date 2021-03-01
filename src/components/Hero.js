import './Hero.css'

function Hero(props) {
  return (
    <div className="divHero">
      <div className="divh1h2Hero">
        <h1 className="h1Hero">{props.title}</h1>
        <h2 className="h2Hero">{props.description}</h2>
      </div>
      <div className="divImgHero">
        <img src={props.cover} alt="" className="imgHero" />
      </div>
    </div>
  )
}

export default Hero;