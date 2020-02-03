import React from "react";
import "./BuisnessList.css";
import Buisness from "../Buisness/Buisness";

class BuisnessList extends React.Component{
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.buisnesses.map(buisness => {
            return <Buisness buisness={buisness} />
          })
        }
      </div>
    );
  }
}
export default BuisnessList;
