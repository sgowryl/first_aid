import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  FlatList,
  Button,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  Modal,
  Linking,
} from "react-native";
import { useState, useEffect, Component } from "react";
import HTML, { buildTREFromConfig } from "react-native-render-html";
import Header from "./components/Header";
import DropDownComponent from "./components/DropDownComponent";
import { FontSizeProvider } from "./Context/FontSizeContext";

export default function App() {
  const { width } = useWindowDimensions();
  const [name, setName] = useState("");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (name !== "") {
      fetchData();
    }
  }, [name]);

  const fetchData = async () => {
    try {
      console.log(name);
      const response = await fetch(`https://api.nhs.uk/conditions/${name}`, {
        headers: {
          "subscription-key": "13a43248355e41c0beedcd663fc14c2b",
        },
      });
      //const data = await response.json();
      const result = await response.json();
      const data = result.mainEntityOfPage;
      const headlines = data.map((el) => el.headline);
      const data1 = data.map((el) => el.mainEntityOfPage);
      const mappedData = data1.map((el) => {
        if (Array.isArray(el)) {
          return el.map((obj) => ({
            text: obj.text,
          }));
        } else {
          return el;
        }
      });
      const mappedResults = headlines.map((headline, index) => ({
        headline: headline,
        text: mappedData[index][0].text,
      }));
      //console.log(mappedResults);
      setPostList(mappedResults);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInputChange = (text) => {
    setName(text);
    //console.log(text);
  };
  const handleFindHospitalsPress = () => {
    const url = "https://www.google.com/maps/search/hospitals/";
    Linking.openURL(url);
  };
  const handleFindEmergencyPress = () => {
    const url = "https://www.google.com/maps/search/accident+and+emergency/";
    Linking.openURL(url);
  };

  const handleDropDownChange = (value) => {
    setName(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/med.png")}
        style={styles.backgroundImage}
      />
      <FontSizeProvider>
        <Header />
        <DropDownComponent onChange={handleDropDownChange} />
      </FontSizeProvider>

      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.headline}</Text>
                {item.text ? (
                  <HTML source={{ html: item.text }} contentWidth={width} />
                ) : (
                  <Text></Text>
                )}
              </View>
            );
          }}
        />
        <View style={styles.gmap}>
          <View style={styles.buttonandImage}>
            <Button
              title="Hospitals"
              color="#D70040"
              onPress={handleFindHospitalsPress}
            />
            <Image
              source={require("./assets/hospital-building.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.buttonandImage}>
            <Button
              title="A & E"
              color="#D70040"
              onPress={handleFindEmergencyPress}
            />
            <Image
              source={require("./assets/ambulance.png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topBar: {
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 3,
    marginTop: 2,
    marginBottom: 1,
    borderRadius: 10,
    borderColor: "#7393B3",
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    marginLeft: 10,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    backgroundColor: "#F0FFFF",
    fontFamily: "Georgia",
    padding: 16,
  },
  titleText: {
    fontSize: 30,
    color: "#00008B",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonImage: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  gmap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonandImage: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
});
