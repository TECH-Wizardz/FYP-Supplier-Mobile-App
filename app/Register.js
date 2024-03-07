import { View, SafeAreaView, ImageBackground, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import bgImage from "../assets/images/background.jpg";
import Login from "../components/Login/Login";
import RegisterForm from "../components/Register/RegisterForm";
import { COLORS, images, icons, SIZES } from "../constants";

function Register() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightGreen },

          headerShadowVisible: false,
          headerTitle: "Leaf Link",
        }}
      />

      <RegisterForm />
    </SafeAreaView>
  );
}

export default Register;
