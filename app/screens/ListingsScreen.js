import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, Button } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listing";
import { client } from "../api/client";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    // const response = await listingsApi.getListings();
    // setListings(response.data);
    // console.log(response.data);
    setLoading(true);
    // fetch("http://192.168.1.251:7889/api/listings")
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setListings(responseJson);
    //   });
    listingsApi.getListings();
    setLoading(false);
  };

  const handleOnClick = () => {
    // loadListings();
    //const response2 = client.get("/listings").then((response2) => response2)
    // fetch("http://192.168.1.251:7889/api/listings")
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setListings(responseJson);
    //   });
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings...</AppText>
          <AppButton title="Retry" onClick={loadListings} />
        </>
      )}
      <ActivityIndicator visible={true} />
      {/* <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
