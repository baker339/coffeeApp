import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  PickerIOSItem,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "../components/Screen";
import PickerItem from "../components/PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType="slide">
        <Screen>
          <View style={{ marginBottom: 20 }}>
            <Button title="Close" onPress={() => setModalVisable(false)} />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
