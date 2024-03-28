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
    [<li key={0} style={{ textAlign: "center" }} onClick={(e) => toggleList(false)}>{"---"}</li>];
  const { displayValue, labelClass } = currentValue ?
    { displayValue: currentValue, labelClass: "" }
    :
    { displayValue: defaultValue, labelClass: "defaultValue" };

  return (
    <div tabIndex={1} className="DropDown" onBlur={(e) => toggleList(false)}>
      <div className={`${labelClass} label`} htmlFor="DropDownList" onClick={(e) => toggleList(!isOpen)}>{displayValue}</div>
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
