import { useState } from "react";
import "./FilterItem.scss";

type FilterItemProps = {
  filter: {
    id: string;
    label: string;
    value: boolean;
  };
  handleChecked: (filterId: string, value: boolean) => void;
};

const FilterItem = ({ filter, handleChecked }: FilterItemProps) => {
  const { id, label, value } = filter;
  const [isChecked, setIsChecked] = useState(value);

  /* Function to toggle the checkbox state. When checkbox is clicked, it
   inverses the current checked state, updates the local state, and
   calls "handleChecked" to inform the parent component.*/
  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    handleChecked(id, newValue);
  };

  return (
    <div className="filters">
      <label className="filters__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="filters__input"
        type="checkbox"
        id={id}
        value={value.toString()}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </div>
  );
};

export default FilterItem;
