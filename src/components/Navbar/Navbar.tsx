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
      <h1 className="navbar__heading">Punk API</h1>
      <SearchBox onSearch={onSearch} searchTerm={""} />
      <FiltersList
        onFilterChange={onFilterChange}
      />
    </nav>
  );
};

export default Navbar;
