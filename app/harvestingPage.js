import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, images, icons, SIZES } from "../constants";
import React from "react";
import HarvestingFrom from "../components/transaction/HarvestingFrom";
import ProfileButton from "../components/profile/ProfileButton";
const harvestingPage = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <HarvestingFrom />
      </ScrollView>
    </SafeAreaView>
  );
};

export default harvestingPage;
