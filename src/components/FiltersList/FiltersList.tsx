import React, { ChangeEvent } from "react";
import "./FiltersList.scss";

type FiltersListProps = {
  onFilterChange: (filterType: string, value: boolean) => void;
};

const FiltersList = ({ onFilterChange }: FiltersListProps) => {
  //   const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, filterType: string
  //   ) => {
  //     const { checked } = event.target;
  //     onFilterChange(filterType, checked);
  //   };

  return (
    <div className="filters">
      <label className="filters__label">
        <br />
        <input
          className="filters__input"
          type="checkbox"
          //onChange={(e) => handleCheckboxChange(e, 'highAlcohol')}
        />
        High ABV ({">"} 6.0%)
      </label>
      <label className="filters__label">
        <input
          className="filters__input"
          type="checkbox"
          //onChange={(e) => handleCheckboxChange(e, 'classicRange')}
        />
        Classic Range
      </label>
      <label className="filters__label">
        <input
          className="filters__input"
          type="checkbox"
          //onChange={(e) => handleCheckboxChange(e, 'highAcidity')}
        />
        Acidic (pH {"<"} 4)
      </label>
    </div>
  );
};

export default FiltersList;
