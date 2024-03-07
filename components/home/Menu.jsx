import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import transaction from "../../assets/icons/transaction.png";
import dashboard from "../../assets/icons/dashboard.png";

import React from "react";
import { COLORS, images, icons, SIZES } from "../../constants";
import { useRouter } from "expo-router";

const Menu = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          router.push("/harvestingPage");
        }}
      >
        <Image source={transaction} style={styles.icon} />
        <Text style={styles.Icontitle}>Transaction</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          router.push("/dashbord");
        }}
      >
        <Image source={dashboard} style={styles.icon} />
        <Text style={styles.Icontitle}>Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 20,
  },

  icon: {
    width: 50,
    height: 50,
  },

  Icontitle: {
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
});

export default Menu;
