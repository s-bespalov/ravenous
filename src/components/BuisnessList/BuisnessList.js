import React from "react";
import "./BuisnessList.css";
import Buisness from "../Buisness/Buisness";

class BuisnessList extends React.Component{
  render() {
    return (
      <div className="BusinessList">
        <Buisness />
        <Buisness />
        <Buisness />
        <Buisness />
        <Buisness />
        <Buisness />
      </div>
    );
  }
}
export default BuisnessList;
