import { Beer } from "../../types/types";
import "./Card.scss";
import { Link } from "react-router-dom";
import beerIcon from "../../assets/images/drink-beer.svg"
 
type CardProps = {
  beer: Beer;
};

/**
 * Truncates a given text to a specified number of words.
 * @param {string} text - The text to be truncated.
 * @param {number} words - The maximum number of words to be included.
 * @returns {string} The truncated text with ellipses if it exceeds the word limit.
 */
const truncateCardName = (text: string, words: number) => {
  const cardName = text.split(" ");
  if (cardName.length > words) {
    return cardName.slice(0, words).join(" ") + "...";
  }
  return text;
};

const Card = ({ beer }: CardProps) => {
  const truncatedName = truncateCardName(beer.name, 6);
  const fontSizeClassName =
    beer.name.split(" ").length > 5 ? "card__name--small" : "";
  const fontSizeClassTag =
    beer.tagline.split(" ").length > 6 ? "card__tagline--small" : "";

  return (
    <Link to={`/punk-api/beers/${beer.id}`} key={beer.id} className="card-link">
      <div className="card">
        <img src={beer.image_url || beerIcon} alt={beer.name} className="card__image" />
        <div className="card__info">
          <h2 className={`card__name ${fontSizeClassName}`}>{truncatedName}</h2>
          <p className={`card__tagline ${fontSizeClassTag}`}>{beer.tagline}</p>
          <p className="card__first-brewed">{beer.first_brewed}</p>
          <p className="card__abv">
            <strong>ABV </strong> {beer.abv}%
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
