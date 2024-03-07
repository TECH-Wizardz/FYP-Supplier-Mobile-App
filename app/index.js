import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, images, icons, SIZES } from "../constants";
import bgImage from "../assets/images/background.jpg";
import iconWhite from "../assets/icons/leafLinkLogo.svg";
import { Stack, router, useRouter, Link } from "expo-router";
import LoginAndRegister from "../components/firstPage/LoginAndRegister";
import { MenuProvider } from "react-native-popup-menu";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ImageBackground source={bgImage} resizeMode="cover" style={{ flex: 1 }}>
        <LoginAndRegister />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
