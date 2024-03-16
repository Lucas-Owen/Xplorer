import MapView from "../MapView/MapView";
import "./SearchForm.css";

export default function SearchForm (props) {
  const { formData, placeData, onSelectChange } = props;
  const continents = Object.keys(formData).map(continent => <option key={continent} value={continent}>{continent}</option>);
  const countries = placeData.continent ? Object.keys(formData[placeData.continent]).map(country => <option key={country} value={country}>{country}</option>) : [];
  const places = placeData.country ? Object.keys(formData[placeData.continent][placeData.country]).map(name => <option key={name} value={name}>{name}</option>): [];
  return (
    <form className="Search-form" onSubmit={(e) => e.preventDefault()}>
      <select onChange={(e) => {onSelectChange({"country": null, "continent": e.target.options[e.target.selectedIndex].value})} }>
        <option value="">Select a Continent</option>
        {continents}
      </select>
      <select onChange={(e) => { onSelectChange({"country": e.target.options[e.target.selectedIndex].value}); }}>
        <option value="">Select a Country</option>
        {countries}
      </select>
      <select onChange={(e) => { onSelectChange({"place": e.target.options[e.target.selectedIndex].value}); }}>
        <option value="">Select a City/Place</option>
        {places}
      </select>
      <input type="submit" value="Submit" />
      <MapView/>
    </form>
  );
}
