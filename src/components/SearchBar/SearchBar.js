import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };

    this.sortByOption = {
      "Best Math": "best_match",
      "Highest Rated": "rating",
      "Most Review": "review_count"
    };
  }

  getSortByClass(sortByOption) {
    return this.state === sortByOption? "active" : "";
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOption).map(option => {
      const optionValue = this.sortByOption[option];
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
