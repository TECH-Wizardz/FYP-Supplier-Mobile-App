import { View, SafeAreaView, ImageBackground, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import bgImage from "../assets/images/background.jpg";
import React from "react";
import Menu from "../components/home/Menu";

import { COLORS, images, icons, SIZES } from "../constants";
import ProfileButton from "../components/profile/ProfileButton";

const menuPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightGreen },

          headerShadowVisible: false,
          headerTitle: "Leaf Link",
          headerRight: () => <ProfileButton />,
        }}
      />

      <ImageBackground source={bgImage} resizeMode="cover" style={{ flex: 1 }}>
        <Menu />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default menuPage;
