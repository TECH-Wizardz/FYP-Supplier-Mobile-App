import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS, images, icons, SIZES } from "../../constants";
import { useRouter } from "expo-router";
function LoginAndRegister() {
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
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.large,
          fontWeight: "500",
          letterSpacing: 1,
          textAlign: "center",
          marginBottom: 100,
        }}
      >
        SUPPLYER
      </Text>
      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => router.push(`/loginPage`)}
      >
        <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.RegisterButton}
        onPress={() => router.push(`/Register`)}
      >
        <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: "#fff",
    width: 250,
    height: 50,
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  LoginText: {
    color: "#1C633E",
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },

  RegisterButton: {
    width: 250,
    height: 50,
    fontSize: SIZES.medium,
    borderColor: COLORS.white,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  RegisterText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
});

export default LoginAndRegister;
