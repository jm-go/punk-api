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
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [highABV, setHighABV] = useState<boolean>(false);
  const [classicRange, setClassicRange] = useState<boolean>(false);
  const [acidic, setAcidic] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  // Handler for search input changes
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(nameInput);
  };

  const getBeers = async (
    page: number,
    abv: boolean,
    classic: boolean,
    acidic: boolean,
    searchTerm: string
  ) => {
    try {
      const url = "https://api.punkapi.com/v2/beers";
      let urlWithParams = url + `?page=${page}`;

      if (abv) {
        urlWithParams += `&abv_gt=6`;
      }

      if (classic) {
        urlWithParams += `&brewed_before=01-2010`;
      }

      if (searchTerm.length > 0) {
        urlWithParams += `&beer_name=${searchTerm}`;
      }

      const response = await fetch(urlWithParams);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data: Beer[] = await response.json();
      
      if (acidic) {
        data = data.filter(beer => beer.ph < 4);
      }

      setBeers(data);
    } catch (error) {
      console.error("Error fetching beer data:", error);
    }
  };

  useEffect(() => {
    getBeers(page, highABV, classicRange, acidic, searchTerm);
  }, [page, highABV, classicRange, acidic, searchTerm]);

  // add comment
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
