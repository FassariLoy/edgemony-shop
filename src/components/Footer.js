import './Footer.css'

function Footer() {
  return <p className="pFooter">Fassari Loy Ver.{new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDay()}</p>
}

export default Footer;