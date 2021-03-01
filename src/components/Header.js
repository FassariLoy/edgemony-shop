import './Header.css'

function Header(props) {
  return (
    <div className="divHeader">
      <div className="divImgHeader">
        <img src={props.logo} alt="" className="imgHeader" /> 
      </div>
    </div>
  )
}

export default Header;