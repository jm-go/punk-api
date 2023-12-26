import { Beer } from '../../types/types';
import "./Card.scss";

type CardProps = {
  beer: Beer;
};

const Card = ({ beer } : CardProps) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} className="card__image" />
      <div className="card__info">
        <h2 className="card__name">{beer.name}</h2>
        <p className="card__tagline">{beer.tagline}</p>
        <p className="card__first-brewed">{beer.first_brewed}</p>
        <p className="card__abv"><strong>ABV: </strong> {beer.abv}%</p>
      </div>
    </div>
  );
};

export default Card;