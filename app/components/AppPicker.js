import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Button,
} from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "../components/PickerItem";
function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
  numberOfColumns=1
}) {
  const [modalVisible, setmodalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={selectedItem ? styles.text : { color: "grey" }}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            color="white"
            titleTextColor="black"
            style={styles.button}
            onPress={() => setmodalVisible(false)}
            title="Close"
          ></Button>
          <FlatList
          numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setmodalVisible(false);
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
    padding: 15,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "white",
    color: "black",
  },
  icon: {
    marginLeft: -20,
    paddingRight: 20,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
