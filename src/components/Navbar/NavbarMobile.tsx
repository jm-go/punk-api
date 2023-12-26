import { FormEventHandler } from "react";
import "./NavbarMobile.scss";
import SearchBox from "../SearchBox/SearchBox";

type NavbarMobileProps = {
  onSearch: FormEventHandler<HTMLInputElement>;
};

const NavbarMobile = ({ onSearch }: NavbarMobileProps) => {
  return (
    <nav className="navbar-mobile">
      <h1 className="navbar-mobile__heading">Punk API</h1>
      <SearchBox onSearch={onSearch} />
    </nav>
  );
};

export default NavbarMobile;
