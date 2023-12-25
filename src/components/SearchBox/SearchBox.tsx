import { FormEventHandler } from "react";

// Define the type for the props
type SearchBoxProps = {
  searchTerm: string;
  onSearch: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchTerm, onSearch }: SearchBoxProps) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={onSearch}
        className="search__input"
      />
    </div>
  );
};

export default SearchBox;