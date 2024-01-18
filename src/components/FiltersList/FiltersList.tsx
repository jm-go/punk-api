import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
  onFilterChange: (filterType: string, value: boolean) => void;
};

const filterItems = [
  {
    id: "highAlcohol",
    label: "HIGH ABV (> 6.0%)",
    value: false,
  },
  {
    id: "classicRange",
    label: "CLASSIC RANGE",
    value: false,
  },
  {
    id: "highAcidity",
    label: "ACIDIC (PH < 4)",
    value: false,
  },
];

const FiltersList = ({ onFilterChange }: FiltersListProps) => {

  return (
    <div className="filters-container">
      {filterItems.map((filter) => (
        <div className="filters" key={filter.id}>
          <FilterItem filter={filter} handleChecked={onFilterChange} />
        </div>
      ))}
    </div>
  );
};

export default FiltersList;
