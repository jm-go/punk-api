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
import qs from "query-string";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBeer, setFilteredBeer] = useState<Beer[]>([]); //?

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


  // ???
  const onFilterChange = (filterType: string, value: boolean): void => {
    if (filterType === "highAlcohol") {
      const filteredBeer = beers.filter((beer) => (value ? beer.abv > 6.0 : true));
      setFilteredBeer(filteredBeer);
    }
  }

  ///
  // const [users, setUsers] = useState<User[]>([]);
  // // state to keep track of how many users we want to see on the page
  // const [numberOfUsers, setNumberOfUsers] = useState<number>(7);
  // const [gender, setGender] = useState<Gender>("all");

  // const getUsers = async (resultNumber: number, genderFilter: Gender) => {
  //   const url = "https://randomuser.me/api";
  //   let urlWithParams = url + `?results=${resultNumber}`;

  //   if (genderFilter !== "all") {
  //     urlWithParams += `&gender=${genderFilter}`;
  //   }

  //   const res = await fetch(urlWithParams);
  //   const data: UserResult = await res.json();
  //   setUsers(data.results);
  // };

  // const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const userInput = event.currentTarget.value;

  //   if (userInput !== "all" && userInput !== "female" && userInput !== "male") {
  //     return;
  //   }

  //   setGender(userInput);
  // };

  // // <Button onClick={getUsers} label="Get Random Users" />
  // // use the useEffect hook to control what happens when the component load
  // useEffect(() => {
  //   getUsers(numberOfUsers, gender);
  // }, [numberOfUsers, gender]);

  //

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <NavbarMobile onSearch={handleInput}/>
          <Navbar
            onSearch={handleInput}
            onFilterChange={onFilterChange}
          />
          <Routes>
            <Route path="/punk-api/" element={<CardList beers={filteredBeers} />} />
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
