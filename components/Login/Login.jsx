import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, images, icons, SIZES } from "../../constants";
import { router, useRouter } from "expo-router";

function Login() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 150,
      }}
    >
      <TextInput
        placeholder="User ID"
        placeholderTextColor="#fff"
        style={styles.loginInputs}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#fff"
        style={styles.loginInputs}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => router.push("./menuPage")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginInputs: {
    width: 325,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    color: COLORS.white,
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderColor: "#fFF",
  },
  LoginButton: {
    backgroundColor: "#fff",
    width: 250,
    height: 50,
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default Login;
