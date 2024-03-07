import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, images, icons, SIZES } from "../constants";
import React from "react";
import ProvenanceFrom from "../components/tracking/ProvenanceFrom";
import ProfileButton from "../components/profile/ProfileButton";

const trackingDetails = () => {
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
        <ProvenanceFrom />
      </ScrollView>
    </SafeAreaView>
  );
};

export default trackingDetails;
