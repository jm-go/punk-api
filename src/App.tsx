import "./main.scss";
import "./types/types";
import "./data/beers";
import { FormEvent, useState } from "react";
import beers from "./data/beers";
import Navbar from "./components/Navbar/Navbar";

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

  return (
    <Navbar
      onSearch={handleInput}
      onFilterChange={function (filterType: string, value: boolean): void {
        throw new Error("Function not yet implemented.");
      }}
    />
  );
};

export default App;
