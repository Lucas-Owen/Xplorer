import { DropDown } from "../DropDown/DropDown";
import MapView from "../MapView/MapView";
import locationShape from "../utils/locationShape";
import "./SearchForm.css";
import * as PropTypes from "prop-types";

export default function SearchForm (props) {
  const { formData, location, onSelectChange } = props;
  const continents = Object.keys(formData);
  const countries = location.continent ? Object.keys(formData[location.continent]) : [];
  const places = location.country ? Object.keys(formData[location.continent][location.country]) : [];

  function onChangePlace (name) {
    const place = name ? formData[location.continent][location.country][name] : {};
    return { place: { name, ...place } };
  }
  return (
    <form className="Search-form" onSubmit={(e) => e.preventDefault()}>
      <div className="dropdowns">
        <DropDown items={continents} currentValue={location.continent} defaultValue={"Select a Continent"} onSelectChange={(value) => { onSelectChange({ "country": "", "continent": value }); }} />
        <DropDown items={countries} currentValue={location.country} defaultValue={"Select a Country"} onSelectChange={(value) => { onSelectChange({ "country": value }); }} />
        <DropDown items={places} currentValue={location.place.name} defaultValue={"Select a Place"} onSelectChange={(value) => onSelectChange(onChangePlace(value))} />
      </div>
      <div className="mapDiv">
        <MapView position={location.place.position} title={location.place.name}/>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  location: locationShape,
  onSelectChange: PropTypes.func,
  formData: PropTypes.object
};
