import React, { useEffect } from "react";
import * as PropTypes from "prop-types";
import { useState } from "react";
import "./DropDown.css";

export function DropDown (props) {
  const { defaultValue, items, onSelectChange } = props;
  const [currentValue, setCurrentValue] = useState(null);
  const listElements = items
    .map((item, index) =>
      <li key={index} data-selected={item === currentValue} onClick={() => setCurrentValue(item)}>{item}</li>
    );
  const [isOpen, toggleList] = useState(false);
  useEffect(() => {
    document.addEventListener("click", () => {
      toggleList(false);
    });
  }, []);
  return (
    <div className="DropDown" onClick={(e) => { e.stopPropagation(); toggleList(!isOpen); }}>
      <label htmlFor="DropDownList" data-isopen={!isOpen}>{currentValue == null ? defaultValue : currentValue}</label>
      <ul data-isopen={isOpen}>
        {listElements}
      </ul>
    </div>
  );
}


DropDown.propTypes = {
  defaultValue: PropTypes.string,
  currentValue: PropTypes.string,
  items: PropTypes.array,
  onSelectChange: PropTypes.func
};
