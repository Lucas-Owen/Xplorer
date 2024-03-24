import { useState } from 'react';
import PlaceArticle from '../PlaceArticle/PlaceArticle';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';
import data from "../../mockData.json";
import React from "react";

function App () {
  const [location, onPlaceChange] = useState({
    continent: "",
    country: "",
    place: {
      name: "",
      images: [],
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
  return (
    <div className="App">
      <div id="earth"></div>
      <header className="App-header">
        <h1>XPLORER</h1>
      </header>
      <div className='App-body'>
        <SearchForm formData={data} location={location} onSelectChange={(newState) => onPlaceChange({...location, ...newState})} />
        <PlaceArticle location={location} />
      </div>
    </div>
  );
}

export default App;
