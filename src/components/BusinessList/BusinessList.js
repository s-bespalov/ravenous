import React from "react";
import PropTypes from "prop-types";
import "./BusinessList.css";
import Business from "../Business/Business";

const BusinessList = props => {
  return (
    <div className="BusinessList">
      {
        props.businesses.map(business => {
          return <Business key={business.id} business={business} />
        })
      }
    </div>
  );
}

BusinessList.propTypes = {
  businesses: PropTypes.array
}

export default BusinessList;
