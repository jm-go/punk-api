import "./main.scss";
import "./types/types";
import "./data/beers";
import { FormEvent, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardList from "./components/CardList/CardList";
import { Beer } from "./types/types";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
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

  const getBeers = async () => {
    try {
      const url = "https://api.punkapi.com/v2/beers";
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: Beer[] = await response.json();
      setBeers(data);
    } catch (error) {
      console.error("Error fetching beer data:", error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <div className="app-container">
        <Navbar
          onSearch={handleInput}
          onFilterChange={function (filterType: string, value: boolean): void {
            throw new Error("Function not yet implemented.");
          }}
        />
        <CardList beers={filteredBeers} />
      </div>
    </>
  );
};

export default App;
