import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  //searchTerm: string;
  onSearch: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        //value={searchTerm}
        onChange={onSearch}
        className="search__input"
      />
    </div>
  );
};

export default SearchBox;