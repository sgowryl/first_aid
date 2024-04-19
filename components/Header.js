import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
  Image,
  Linking,
} from "react-native";
import { useState } from "react";
export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const callNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>QUICK AID</Text>
      <TouchableOpacity
        style={styles.sidePanelButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Image source={require("../assets/call.png")} style={styles.menuIcon} />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.sidePanel}>
          <Button
            title="CLOSE"
            color="black"
            fontWeight="bold"
            onPress={() => setIsModalVisible(false)}
          />
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => callNumber("111")}
          >
            <Text style={styles.optionButtonText}>Call NHS - 111</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => callNumber("112")}
          >
            <Text style={styles.optionButtonText}>Call Emergency - 112</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => callNumber("911")}
          >
            <Text style={styles.optionButtonText}>Call Ambulance - 911</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => callNumber("999")}
          >
            <Text style={styles.optionButtonText}>
              Any other Emergency - 999
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  sidePanelButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    zIndex: 1,
  },

  optionButtonText: {
    backgroundColor: "white",
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    padding: 20,
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    color: "#000080",
  },

  header: {
    height: 100,
    marginTop: -60,
    backgroundColor: "#6495ED",
    //babyblue: 89CFF0
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    fontSize: 25,
    color: "#13274F",
  },
  sidePanel: {
    flex: 1,
    backgroundColor: "#B6D0E2",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },

  optionButton: {
    marginVertical: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
  },
  menuIcon: {
    marginTop: 20,
    marginLeft: 10,
    width: 30,
    height: 30,
  },
});
