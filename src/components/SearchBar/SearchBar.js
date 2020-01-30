import React from "react";
import "./SearchBar.css";

const sortByOption = {
  "Best Math": "best_match",
  "Highest Rated": "rating",
  "Most Review": "review_count"
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOption).map(option => {
      const optionValue = sortByOption[option];
      return <li key={optionValue}>{option}</li>;
    });
  }

  render() {
    return (<div className="SearchBar">
              <div className="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
              </div>
              <div className="SearchBar-submit">
                <a>Let&apos;s Go</a>
              </div>
            </div>);
  }
}

export default SearchBar;
