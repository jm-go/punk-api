import { useParams } from "react-router-dom";
import { Beer } from "../../types/types";
import "./CardDetails.scss";
import beerIcon from "../../assets/images/drink-beer.svg"

type CardDetailsProps = {
  beers: Beer[];
};

const CardDetails = ({ beers }: CardDetailsProps) => {
  const { id } = useParams<{ id: string }>(); // Hook used to extract the id parameter from the URL.

  // Find the beer directly using the id from the URL params
  const beer = beers.find((beer) => beer.id === Number(id));

  if (!beer) {
    return <p className="card-details__message">Beer not found.</p>;
  }

  return (
    <div className="card-details">
      <h2 className="card-details__name">{beer.name}</h2>
      <img
        className="card-details__image"
        src={beer.image_url || beerIcon}
        alt={beer.name}
      />
      <p className="card-details__description">{beer.description}</p>
      <div className="card-details__facts">
        <p className="card-details__abv">ABV {beer.abv}%</p>
        <p className="card-details__ibu">IBU {beer.ibu}</p>
      </div>
    </div>
  );
};

export default CardDetails;
