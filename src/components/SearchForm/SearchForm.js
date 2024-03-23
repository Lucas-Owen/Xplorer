import { DropDown } from "../DropDown/DropDown";
import MapView from "../MapView/MapView";
import "./SearchForm.css";
import * as PropTypes from "prop-types";

export default function SearchForm (props) {
  const { formData, placeData, onSelectChange } = props;
  const continents = Object.keys(formData)
  const countries = placeData.continent ? Object.keys(formData[placeData.continent]) : [];
  const places = placeData.country ? Object.keys(formData[placeData.continent][placeData.country]) : [];
  
  function onChangePlace (name) {
    const images = name ? formData[placeData.continent][placeData.country][name].images : [];
    return { "place": name, "images": images };
  }
  return (
    <form className="Search-form" onSubmit={(e) => e.preventDefault()}>
      <DropDown items={continents} currentValue={placeData.continent} defaultValue={"Select a Continent"} onSelectChange={(value) => { onSelectChange({ "country": null, "continent": value }); }} />
      <DropDown items={countries} currentValue={placeData.country} defaultValue={"Select a Country"} onSelectChange={(value) => { onSelectChange({ "country": value }); }} />
      <DropDown items={places} currentValue={placeData.place} defaultValue={"Select a Place"} onSelectChange={(value) => onSelectChange(onChangePlace(value))} />
      <MapView />
    </form>
  );
}

SearchForm.propTypes = {
  placeData: PropTypes.objectOf({
    continent: PropTypes.string,
    country: PropTypes.string,
    place: PropTypes.string,
    images: PropTypes.array,
    description: PropTypes.string
  })
};
