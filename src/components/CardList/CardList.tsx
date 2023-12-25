import Card from "../Card/Card";
import { Beer } from "../../types/types";
import "./CardList.scss";

interface CardListProps {
  beers: Beer[];
}

const CardList = ({ beers }: CardListProps) => {
  return (
    <div className="card-list">
      {beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default CardList;
