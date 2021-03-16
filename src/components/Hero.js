import PropTypes from "prop-types";

import './Hero.css'

function Hero({ cover, title, description }) {
  return (
    <div className="divHero">
      <div className="divh1h2Hero">
        <h1 className="HeroH1">{title}</h1>
        <h2 className="HeroH2">{description}</h2>
      </div>
      <img className="HeroImg" src={cover} alt={title} />
      <div className="divImgHero">
      
      </div>
    </div>
  )
}

Hero.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;