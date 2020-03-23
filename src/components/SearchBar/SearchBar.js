import React from "react";
import PropTypes from "prop-types";
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

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption? "active" : "";
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOption).map(option => {
      const optionValue = this.sortByOption[option];
      return <li
        key={optionValue}
        className={this.getSortByClass(optionValue)}
        onClick={this.handleSortByChange.bind(this, optionValue)}
        >
        {option}
        </li>;
    });
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption}, () => {
      if (this.state.term) {
        this.handleSearch();
      }
    });
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    if (event) {
      event.preventDefault();
    }
  }

  handleEnterPress(event) {
    if (event.keyCode === 13) {
      this.handleSearch(event);
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleEnterPress, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleEnterPress, false);
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let&apos;s Go</a>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchYelp: PropTypes.func
}

export default SearchBar;
