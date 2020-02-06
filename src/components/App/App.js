import React from 'react';
import './App.css';

import BuisnessList from "../BuisnessList/BuisnessList";
import SearchBar from "../SearchBar/SearchBar";

const buisness = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const buisnesses = [
  buisness,
  buisness,
  buisness,
  buisness,
  buisness,
  buisness
];

function searchYelp(term, location, sortBy) {
  console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
}

function App() {
  return (<div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={searchYelp}/>
            <BuisnessList buisnesses={buisnesses} />
          </div>);
          }

export default App;
