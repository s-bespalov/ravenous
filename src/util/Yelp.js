const apiKey = "QHD84PlJWv2LqX_itVkeGsUqr8bgYFOEw5BtttC43gsdz25U1rmLHi8oGTW1bnO8zpDnCh3NjCSvIZ_Yw49z_yOF7Xr5kSK2WOKz3rGLJZc067JRcNL5qf_Jfis_XnYx";

const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            category: business.categories[0].title,
            state: business.location.state,
            zipCode: business.location.zip_code,
            rating: business.rating,
            reviewCount: business.review_count,
            mapUrl: `https://www.google.com/maps/search/?api=1&query=${business.coordinates.latitude},${business.coordinates.longitude}`,
            yelpUrl: `https://www.yelp.com/biz/${business.alias}`
          };
        });
      }else {
        return [];
      }
    });
  }
};

export default Yelp;
