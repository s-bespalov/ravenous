import React from "react";
import "./Buisness.css";

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

class Buisness extends React.Component {
  render() {
    return (<div className="Business">
              <div classNameName="image-container">
                <img src={buisness.imageSrc} alt=''/>
              </div>
              <h2>{buisness.name}</h2>
              <div className="Business-information">
                <div className="Business-address">
                  <p>{buisness.address}</p>
                  <p>{buisness.city}</p>
                  <p>{`${buisness.state} ${buisness.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                  <h3>{buisness.category.toUpperCase()}</h3>
                  <h3 className="rating">{`${buisness.rating} stars`}</h3>
                  <p>{`${buisness.reviewCount} reviews`}</p>
                </div>
              </div>
            </div>);
  }
}

export default Buisness;
