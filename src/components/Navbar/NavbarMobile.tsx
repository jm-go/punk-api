import { FormEventHandler } from "react";
import "./NavbarMobile.scss";
import SearchBox from "../SearchBox/SearchBox";

type NavbarMobileProps = {
  onSearch: FormEventHandler<HTMLInputElement>;
};

const NavbarMobile = ({ onSearch }: NavbarMobileProps) => {
  return (
    <nav className="navbar-mobile">
      <a className="navbar-mobile__link" href="/">
        <h1 className="navbar-mobile__heading">Punk API</h1>
      </a>
      <SearchBox onSearch={onSearch} />
    </nav>
  );
};

export default NavbarMobile;
