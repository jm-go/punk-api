import "./main.scss";
import "./types/types";
import "./data/beers";
import { FormEvent, useState } from "react";
import beers from "./data/beers";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Handler for search input changes
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(nameInput);
  };

  // Filter the beers array based on the search term
  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  return <></>;
};

export default App;
