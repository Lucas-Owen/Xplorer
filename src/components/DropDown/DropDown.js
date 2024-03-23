import React from "react";
import * as PropTypes from "prop-types";
import { useState } from "react";
import "./DropDown.css";

export function DropDown (props) {
  const { defaultValue, currentValue, items, onSelectChange } = props;
  const [isOpen, toggleList] = useState(false);
  const listElements = items.length ?
    items.map((item, index) =>
      <li key={index} data-selected={item === currentValue} onClick={() => { onSelectChange(item); toggleList(false); }}>{item}</li>
    ) :
    [<li style={{ textAlign: "center" }} onClick={(e) => toggleList(false)}>{"---"}</li>];
  const { displayValue, labelClass } = currentValue == null ?
    { displayValue: defaultValue, labelClass: "defaultValue" } :
    { displayValue: currentValue, labelClass: "" };

  return (
    <div tabIndex={1} className="DropDown" onBlur={(e) => toggleList(false)}>
      <label className={labelClass} htmlFor="DropDownList" onClick={(e) => toggleList(!isOpen)}>{displayValue}</label>
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
