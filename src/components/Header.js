import './Header.css'

function Header(props) {
  return (
    <div className="divHeader">
      <div className="divImgHeader">
        <img src={props.logo} alt="" /> 
      </div>
    </div>
  )
}

export default Header;