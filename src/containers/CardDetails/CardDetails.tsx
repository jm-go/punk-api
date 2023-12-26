import { useParams } from "react-router-dom";
import { Beer } from "../../types/types";
import "./CardDetails.scss";
import { useEffect } from "react";

interface CardDetailsProps {
  beers: Beer[];
}

const CardDetails = ({ beers }: CardDetailsProps) => {
  const { id } = useParams<{ id: string }>();

  // Find the beer directly using the id from the URL params
  const beer = beers.find((beer) => beer.id === Number(id));

  useEffect(() => {
    // Adjust later
  }, [id, beers]);

  if (!beer) {
    return <p>Beer not found.</p>;
  }

  // Limit description to 200 words
  const descriptionWords = beer.description.split(" ");
  const limitedDescription = descriptionWords.slice(0, 200).join(" ");

  return (
    <div className="card-details">
      <h2 className="card-details__name">{beer.name}</h2>
      <img
        className="card-details__image"
        src={beer.image_url}
        alt={beer.name}
      />
      <p className="card-details__description">{limitedDescription}</p>
      <div className="card-details__additional-info">
        <p>ABV: {beer.abv}%</p>
        <p>IBU: {beer.ibu}</p>
        {/* Add more information later */}
      </div>
    </div>
  );
};

export default CardDetails;
