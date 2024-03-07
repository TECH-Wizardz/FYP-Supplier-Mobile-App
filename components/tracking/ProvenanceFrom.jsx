import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LocationComponent from "./LocationComponent";
import { COLORS, images, icons, SIZES } from "../../constants";
import { router, useRouter } from "expo-router";

const Provenance = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <LocationComponent />
      <View style={styles.InputItemContainer}>
        <Text>Fertilizer Method</Text>
        <TextInput style={styles.formInput}></TextInput>
      </View>
      <View style={styles.InputItemContainer}>
        <Text>Fertilizer Details</Text>
        <TextInput style={styles.formInput}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.SubmitButton}
        onPress={() => {
          router.push(`/menuPage`);
        }}
      >
        <Text style={styles.ButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formText: {
    fontSize: SIZES.medium,
    marginVertical: 10,
  },

  formInput: {
    marginTop: 5,
    width: 325,
    height: 60,
    borderColor: COLORS.green,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  InputItemContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  SubmitButton: {
    width: 250,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 20,
    backgroundColor: COLORS.green,
  },

  ButtonText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
});

export default Provenance;
