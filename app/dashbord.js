import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS, images, icons, SIZES } from "../constants";
import Dashbord from "../components/dashbord/Dashbord";
import ProfileButton from "../components/profile/ProfileButton";

const dashbord = () => {
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

      <Dashbord />
    </SafeAreaView>
  );
};

export default dashbord;
