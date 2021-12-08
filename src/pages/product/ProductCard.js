import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Link
      to={`/product/${props._id}`}
      className="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="row">
        <div className="col-2">
          <div className="img-container">
            <img
              className="img-fluid mh-100"
              src={props.pictureUrl}
              alt={props.name}
            />
          </div>
        </div>
        <div className="col-10">
          <div className="d-flex w-100 justify-content-between mb-1">
            <h5 className="mb-1">{props.name}</h5>
            <small>
              {props.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </small>
          </div>
          <small>{props.manufacturer}</small>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
