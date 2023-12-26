import { Beer } from "../../types/types";
import "./Card.scss";
import { Link } from "react-router-dom";

type CardProps = {
  beer: Beer;
};

const Card = ({ beer }: CardProps) => {
  return (
    <Link to={`/punk-api/beers/${beer.id}`} key={beer.id} className="card-link">
      <div className="card">
        <img src={beer.image_url} alt={beer.name} className="card__image" />
        <div className="card__info">
          <h2 className="card__name">{beer.name}</h2>
          <p className="card__tagline">{beer.tagline}</p>
          <p className="card__first-brewed">{beer.first_brewed}</p>
          <p className="card__abv">
            <strong>ABV: </strong> {beer.abv}%
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
