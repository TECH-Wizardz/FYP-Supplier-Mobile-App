import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { COLORS, images, icons, SIZES } from "../../constants";
import DatePick from "./DatePick";
import { useRouter } from "expo-router";

const HarvestingFrom = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Harvesting Form </Text>
      <View style={styles.InputItemContainer}>
        <Text>Quantity (KG)</Text>
        <TextInput style={styles.formInput}></TextInput>
      </View>

      <View>
        <DatePick />
      </View>

      <View style={styles.ProvenanceTrackingContainer}>
        <Text style={styles.PTDHeading}>Provenance Tracking Details</Text>

        <View style={styles.TextHeading}>
          <Text>Tea Type :</Text>
        </View>
        <View style={styles.TextHeading}>
          <Text>Harvesting Location :</Text>
        </View>

        <View style={styles.TextHeading}>
          <Text>Fertilizer Method :</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={styles.SubmitButton}
          onPress={() => {
            router.push(`/transactionqr`);
          }}
        >
          <Text style={{ color: COLORS.white }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    marginHorizontal: 10,
    flex: 1,
  },

  heading: {
    fontSize: SIZES.large,
    textAlign: "center",
    marginVertical: 15,
  },
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

  ProvenanceTrackingContainer: {
    backgroundColor: COLORS.lightWhite,
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
  PTDHeading: {
    textAlign: "center",
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginBottom: 15,
  },

  TextHeading: {
    marginVertical: 5,
  },
});

export default HarvestingFrom;
