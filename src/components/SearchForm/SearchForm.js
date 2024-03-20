import { DropDown } from "../DropDown/DropDown";
import MapView from "../MapView/MapView";
import "./SearchForm.css";
import * as PropTypes from "prop-types";

export default function SearchForm (props) {
  const { formData, placeData, onSelectChange } = props;
  const continents = Object.keys(formData).map(continent => <option key={continent} value={continent}>{continent}</option>);
  const countries = placeData.continent ? Object.keys(formData[placeData.continent]).map(country => <option key={country} value={country}>{country}</option>) : [];
  const places = placeData.country ? Object.keys(formData[placeData.continent][placeData.country]).map(name => <option key={name} value={name}>{name}</option>) : [];

  function onChangePlace (e) {
    const name = e.target.options[e.target.selectedIndex].value;
    const images = name ? formData[placeData.continent][placeData.country][name].images : [];
    return { "place": name, "images": images };
  }
  return (
    <form className="Search-form" onSubmit={(e) => e.preventDefault()}>
      <select onChange={(e) => { onSelectChange({ "country": null, "continent": e.target.options[e.target.selectedIndex].value }); }}>
        <option value="">Select a Continent</option>
        {continents}
      </select>
      <select onChange={(e) => { onSelectChange({ "country": e.target.options[e.target.selectedIndex].value }); }}>
        <option value="">Select a Country</option>
        {countries}
      </select>
      <select onChange={(e) => onSelectChange(onChangePlace(e))}>
        <option value="">Select a City/Place</option>
        {places}
      </select>
      <DropDown items={Object.keys(formData)} defaultValue={"Continent"} currentValue={placeData.continent} onSelectChange={onSelectChange} />
      <MapView />
    </form>
  );
}

SearchForm.propTypes = {
  placeData: PropTypes.shape({
    continent: PropTypes.string,
    country: PropTypes.string,
    place: PropTypes.string,
    images: PropTypes.array,
    description: PropTypes.string
  })
};
