import React from 'react';
import './App.css';

import BuisnessList from "../BuisnessList/BuisnessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (<div className="App">
            <h1>ravenous</h1>
            <SearchBar />
            <BuisnessList />
          </div>);
          }

export default App;
