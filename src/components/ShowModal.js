import './ShowModal.css';

function ShowModal (props) {

  return (
    /*<div style="block" className="divShowModal">*/
    <div className="divShowModal">
      <div className="divModal">
        <button>X</button>
        <div className="divImgModal">
          <img src={props.product.image} alt="" /> 
        </div>
        <h3>{props.product.title}</h3>
        <p>{props.product.description}</p>
        <span>€ {props.product.price}</span>
      </div>
    </div>
  )
}

export default ShowModal;