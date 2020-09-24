import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    // const response = await listingsApi.getListings();
    // setListings(response.data);
    // console.log(response.data);
    setLoading(true);
    fetch(apiFunc)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      });
    setLoading(false);
  };

  return { data, error, loading, request };
};
