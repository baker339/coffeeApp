import { client } from "./client";

const endpoint = "/listings";

const getListings = () => {
  return client.get(endpoint);
};

// const getListings = () => {
//   fetch("http://192.168.1.251:7889/api/listings")
//     .then((response) => response.json())
//     .then((responseJson) => {
//       setListings(responseJson);
//     });
//   return responseJson;
// };

const addListing = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryid", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "name" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("http://192.168.1.251:7889/api/listings", requestOptions);

  /*
    return client.post(endpoint, data)
    */
};

export default {
  addListing,
  getListings,
};
