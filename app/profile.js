
import React from "react";
import { Stack } from "expo-router";
import { COLORS, images, icons, SIZES } from "../constants";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import ProfilePage from "../components/profile/ProfilePage";

const profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightGreen },

        headerShadowVisible: false,
        headerTitle: "Leaf Link",
        // headerRight: () => <ProfileButton />,
      }}
    />

<ProfilePage/>
  </SafeAreaView>
  );
};

export default profile;
