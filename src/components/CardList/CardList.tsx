import Card from "../Card/Card";
import { Beer } from "../../types/types";
import "./CardList.scss";

interface CardListProps {
  beers: Beer[];
}

const CardList = ({ beers }: CardListProps) => {
  return (
    <div className="card-list">
      {beers.length > 0 ? beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
      )) : <h2 className="card-list__results">No results found.</h2>}
    </div>
  );
};

export default CardList;
