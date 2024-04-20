import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
  Image,
  Linking,
  TextInput,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import DropDownComponent from "./DropDownComponent";
import { useFontSize } from "../Context/FontSizeContext";

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFontTab, setIsFontTab] = useState(false);
  const { setFontSize } = useFontSize();

  const changeFontSize = (newFontSize) => {
    setFontSize(newFontSize);
    console.log(newFontSize);
  };
  //const [fontSize, setFontSize] = useState(16);
  const [font, setFont] = useState(16);
  const callNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  // const handleFontSizeChange = (font) => {
  //   setFont(font);
  // };
  // const handleCalls = () =>{
  //   setFont(fontSize)
  // }

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.fontButton}
        onPress={() => setIsFontTab(true)}
      >
        <Image
          source={require("../assets/font-size.png")}
          style={styles.fontImage}
        />
      </TouchableOpacity>
      <Modal
        visible={isFontTab}
        onRequestClose={() => setIsFontTab(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.sidePanel}>
          <Button
            title="CLOSE"
            color="black"
            fontWeight="bold"
            onPress={() => setIsFontTab(false)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter font size"
            placeholderTextColor="black"
            onChangeText={(text) => setFont(text)}
          />
          <Button title="Apply" onPress={() => changeFontSize(font)} />
        </View>
      </Modal>

      <Text style={styles.headerText}>QUICK AID</Text>
      <TouchableOpacity
        style={styles.menuIconContainer}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    marginTop: -60,
    backgroundColor: "#6495ED",
    //babyblue: 89CFF0
    justifyContent: "center",
  },
  headerText: {
    fontSize: 25,
    color: "#13274F",
    marginTop: 40,
  },
  menuIconContainer: {
    position: "absolute",
    right: 20,
  },
  fontImage: {
    width: 25,
    height: 25,
    marginTop: 30,
    marginLeft: -100,
  },
  menuIcon: {
    width: 25,
    height: 25,
    marginTop: 30,
  },
  sidePanel: {
    flex: 1,
    backgroundColor: "#B6D0E2",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
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
  optionButton: {
    marginVertical: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
  },
});
