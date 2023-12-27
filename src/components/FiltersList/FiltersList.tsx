import FilterItem from "../FilterItem/FilterItem";

type FiltersListProps = {
  onFilterChange: (filterType: string, value: boolean) => void;
};

const filterItems = [
  {
    id: "highAlcohol",
    label: "High ABV (> 6.0%)",
    value: false,
  },
  {
    id: "classicRange",
    label: "Classic Range",
    value: false,
  },
  {
    id: "highAcidity",
    label: "Acidic (pH < 4)",
    value: false,
  },
];

const FiltersList = ({ onFilterChange }: FiltersListProps) => {
  const handleFilterChange = (filterId: string, value: boolean) => {
    onFilterChange(filterId, value);
  };

  return (
    <div className="filters">
      {filterItems.map((filter) => (
        <FilterItem
          key={filter.id}
          filter={filter}
          handleChecked={handleFilterChange}
        />
      ))}
    </div>
  );
};

export default FiltersList;
