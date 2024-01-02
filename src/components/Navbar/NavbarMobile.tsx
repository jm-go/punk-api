import { FormEventHandler } from "react";
import "./NavbarMobile.scss";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

type NavbarMobileProps = {
  onSearch: FormEventHandler<HTMLInputElement>;
  onFilterChange: (filterType: string, value: boolean) => void;
};

const NavbarMobile = ({ onSearch, onFilterChange }: NavbarMobileProps) => {
  return (
    <nav className="navbar-mobile">
      <a className="navbar-mobile__link" href="/punk-api/">
        <h1 className="navbar-mobile__heading">Punk API</h1>
      </a>
      <SearchBox onSearch={onSearch} />
      <FiltersList onFilterChange={onFilterChange} />
    </nav>
  );
};

export default NavbarMobile;
