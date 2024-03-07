import React from "react";
import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import DatePick from "../transaction/DatePick";
import leaficon from "../../assets/icons/leaficon.png";

const DATA = [
  { id: "1", title: "item 1" },
  { id: "2", title: "item 2" },
  { id: "3", title: "item 3" },
  { id: "4", title: "item 4" },
  { id: "5", title: "item 4" },
  { id: "6", title: "item 4" },
  { id: "7", title: "item 4" },
  { id: "8", title: "item 4" },
  { id: "9", title: "item 4" },
  { id: "11", title: "item 4" },
  { id: "12", title: "item 4" },
  { id: "13", title: "item 4" },
  { id: "14", title: "item 4" },
  { id: "15", title: "item 4" },
  { id: "16", title: "item 4" },
  { id: "17", title: "item 4" },
  { id: "18", title: "item 4" },
  { id: "19", title: "item 4" },
  { id: "20", title: "item 4" },
  { id: "21", title: "item 4" },
  { id: "22", title: "item 4" },
  { id: "23", title: "item 4" },
];

const Dashboard = () => {
  const router = useRouter(); // <-- Move useRouter to the top level

  const handleItemPress = (item) => {
    router.push('/day', { item });
  }
    const Item = ({ title }) => (
      <TouchableOpacity style={styles.harvestItem} onPress={() => handleItemPress(title)}>
        <Image source={leaficon} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <View>
        <Text style={styles.heading}>Harvesting Dashboard</Text>
      </View>
      <View>
        <Text>Search by Date</Text>
        <DatePick />
      </View>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    // Add more styling if needed
  },
  heading: {
    color: COLORS.green,
    fontSize: SIZES.large,
    textAlign: "center",
    marginVertical: 25,
  },
  harvestItem: {
    borderRadius: 10,
    padding: 10,
    margin: 10,

    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  title: {
    color: COLORS.primary,
    textAlign: "center",
  },
});

export default Dashboard;
