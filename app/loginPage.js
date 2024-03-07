import { View, SafeAreaView, ImageBackground, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import bgImage from "../assets/images/background.jpg";
import Login from "../components/Login/Login";

const loginPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ImageBackground source={bgImage} resizeMode="cover" style={{ flex: 1 }}>
        <Login />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default loginPage;
