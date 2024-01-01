import { FormEventHandler } from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

type NavbarProps = {
  onSearch: FormEventHandler<HTMLInputElement>;
  onFilterChange: (filterType: string, value: boolean) => void;
};

const Navbar = ({ onSearch, onFilterChange }: NavbarProps) => {
  return (
    <nav className="navbar">
      <a className="navbar__link" href="/punk-api/">
        <h1 className="navbar__heading">Punk API</h1>
      </a>
      <SearchBox onSearch={onSearch} />
      <FiltersList onFilterChange={onFilterChange} />
    </nav>
  );
};

export default Navbar;
