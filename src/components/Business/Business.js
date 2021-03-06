import React from "react";
import PropTypes from "prop-types";
import "./Business.css";

const Business = props => {
  return (
    <div className="Business">
      <div className="image-container">
        <a
          target="_blank"
          href={props.business.yelpUrl}
          rel="noreferrer noopener"
        >
          <img
            src={props.business.imageSrc}
            alt=''
            href={props.business.yelpUrl}
          />
        </a>
      </div>
      <h2>
        <a
          target="_blank"
          href={props.business.yelpUrl}
          rel="noreferrer noopener"
          className="yelp-link"
        >
          {props.business.name}
        </a>
      </h2>
      <div className="Business-information">
        <div className="Business-address">
          <a target="_blank" href={props.business.mapUrl} rel="noreferrer noopener">
          {props.business.address}
          </a>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3>{props.business.category.toUpperCase()}</h3>
          <h3 className="rating">{`${props.business.rating} stars`}</h3>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
}

Business.propTypes = {
  business: PropTypes.object
}

export default Business;
