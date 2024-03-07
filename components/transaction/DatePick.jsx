import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, images, icons, SIZES } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
const DatePick = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={showDatepicker} style={styles.dateBtn}>
        <Text>Harvest Date</Text>
      </TouchableOpacity>

      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dateBtn: {
    width: 150,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: COLORS.lightGreen,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
export default DatePick;
