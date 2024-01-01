import "./main.scss";
import "./types/types";
import "./data/beers";
import { FormEvent, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardList from "./components/CardList/CardList";
import { Beer } from "./types/types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./containers/CardDetails/CardDetails";
import NavbarMobile from "./components/Navbar/NavbarMobile";

const App = () => {
  // State hooks for managing beers, search term, and filters
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [highABV, setHighABV] = useState<boolean>(false);
  const [classicRange, setClassicRange] = useState<boolean>(false);
  const [acidic, setAcidic] = useState<boolean>(false);

  // Handler for search input changes
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(nameInput);
  };

  // Function to fetch beers from the Punk API with filters applied
  const getBeers = async (
    abv: boolean,
    classic: boolean,
    acidic: boolean,
    searchTerm: string
  ) => {
    try {
      const url = "https://api.punkapi.com/v2/beers";
      let urlWithParams = `${url}?per_page=80`;

      // Adding filters to the API request based on state
      if (abv) {
        urlWithParams += `&abv_gt=6`;
      }

      if (classic) {
        urlWithParams += `&brewed_before=01-2010`;
      }

      if (searchTerm.length > 0) {
        urlWithParams += `&beer_name=${searchTerm}`;
      }

      // Fetching data from the API
      const response = await fetch(urlWithParams);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parsing the response and applying client-side pH filtering
      let data: Beer[] = await response.json();

      if (acidic) {
        data = data.filter((beer) => beer.ph < 4);
      }

      // Updating the beers state with the fetched data
      setBeers(data);
    } catch (error) {
      console.error("Error fetching beer data:", error);
    }
  };

  // Effect hook to fetch beers when filters/search terms change
  useEffect(() => {
    getBeers(highABV, classicRange, acidic, searchTerm);
  }, [highABV, classicRange, acidic, searchTerm]);

  /**
   * Handler for changes in filter options. It updates the state based on the
   * type of filter selected. Supports filters for high alcohol content, classic
   * range, and high acidity.
   *
   * @param {string} filterType - The type of filter being changed.
   * @param {boolean} value - The new value of the filter (true or false).
   */
  const onFilterChange = (filterType: string, value: boolean): void => {
    if (filterType === "highAlcohol") {
      setHighABV(value);
    }
    if (filterType === "classicRange") {
      setClassicRange(value);
    }
    if (filterType === "highAcidity") {
      setAcidic(value);
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <NavbarMobile onSearch={handleInput} />
          <Navbar onSearch={handleInput} onFilterChange={onFilterChange} />
          <Routes>
            <Route path="/punk-api/" element={<CardList beers={beers} />} />
            <Route
              path="/punk-api/beers/:id"
              element={<CardDetails beers={beers} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
