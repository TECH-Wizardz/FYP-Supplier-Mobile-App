import {
  TouchableOpacity,
  Text,

  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import usericon from "../../assets/icons/usericon.png";
const ProfileButton = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  return (
    <View>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setVisible(true)}
      >
        <Image source={usericon} />
      </TouchableOpacity>

      <Modal transparent visible={visible}>
        <Pressable onPress={() => setVisible(false)} style={{ flex: 1 }}>
          <SafeAreaView>
            <View style={styles.popup}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  router.push(`/profile`);
                  setVisible(false);
                }}
              >
                <Text>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    width: "80%",
    height: "80%",
  },
  popup: {
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    position: "absolute",
    top: 80,
    right: 20,
  },

  option: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default ProfileButton;
