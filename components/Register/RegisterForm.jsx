import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, images, icons, SIZES } from "../../constants";
import React from "react";
import { router, useRouter } from "expo-router";

const RegisterForm = () => {
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.InputItemContainer}>
          <Text>First Name</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View style={styles.InputItemContainer}>
          <Text>Last Name</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View
          style={styles.InputItemContainer}
          numberOfLines={4}
          multiline={true}
        >
          <Text>Address</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View style={styles.InputItemContainer}>
          <Text>District</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View style={styles.InputItemContainer}>
          <Text>E-mail</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View style={styles.InputItemContainer}>
          <Text>Password</Text>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <View style={styles.InputItemContainer}>
          <Text>Conform Password</Text>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.RegisterButton}
          onPress={() => {
            router.push(`/trackingDetails`);
          }}
        >
          <Text style={styles.ButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

  RegisterButton: {
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

export default RegisterForm;
