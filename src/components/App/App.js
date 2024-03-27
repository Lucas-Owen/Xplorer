import { useState } from 'react';
import PlaceArticle from '../PlaceArticle/PlaceArticle';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';
import data from "../../mockData.json";
import React from "react";
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

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
        <article className='about'>
          <p>
            Are you ready to embark on a virtual journey across the globe? Look no further! Whether you're a seasoned traveler or an armchair adventurer, our website is your passport to fascinating destinations, hidden gems, and awe-inspiring landscapes.
          </p>

          <h2>
            Explore the Map
          </h2>
          <p>
            Hover over continents, zoom in on countries, and discover pins that mark captivating places. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Bali, the world is at your fingertips.
          </p>
          <h2>
            Dropdown Delight
          </h2>
          <p>
            Can't decide where to start? No worries! Our dropdown menu lets you choose by region, theme, or even serendipity. Feeling spontaneous? Click that “Random Destination” button and let destiny guide your cursor.
          </p>
          <h2>
            Immerse Yourself
          </h2>
          <p>
            Dive into rich narratives, stunning photographs, and local insights. Learn about ancient temples, bustling markets, serene lakes, and mouthwatering street food. Each place has a story waiting to be told.
          </p>
          <h2>
            Share the Magic
          </h2>
          <p>
            Found a spot that stole your heart? Share it with friends, family, or fellow wanderers. Spread the joy of discovery and inspire others to explore.
            So, whether you're dreaming of sipping chai in a Marrakech riad or chasing the Northern Lights in Iceland, Explorer is your gateway to wanderlust fulfilled. Bon voyage!
          </p>
          <h2>Let's Go!</h2>
        </article>
        <SearchForm formData={data} location={location} onSelectChange={(newState) => onPlaceChange({ ...location, ...newState })} />
        <PlaceArticle location={location} />
      </div>
      <footer className='App-footer'>
        <h3>Check us out</h3>
        <div className='socials'>
          <div className="social-link-container">
            <a href="#" className="social-link"><Twitter/></a>
          </div>
          <div className="social-link-container">
            <a href="#" className="social-link"><Instagram/></a>
          </div>
          <div className="social-link-container">
            <a href="#" className="social-link"><Linkedin/></a>
          </div>
          <div className="social-link-container">
            <a href="#" className="social-link"><Github/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
