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
  Image,
  Linking,
} from "react-native";
import { useState, useEffect, Component } from "react";
import HTML, { buildTREFromConfig } from "react-native-render-html";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  const { width } = useWindowDimensions();
  const [name, setName] = useState("");
  const [postList, setPostList] = useState([]);
  const fetchData = async () => {
    try {
      const query = "blisters";
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

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./assets/doc.jpg")} // Replace './yourBackgroundImage.png' with the path to your background image
        style={styles.backgroundImage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleInputChange}
          defaultValue={name}
          //onChangeText={(newText) => setName(newText)}
          //defaultValue={name}
          placeholder="What is your Emergency?"
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={() => fetchData()} style={styles.button}>
          <Image
            source={require("./assets/send.png")} // Replace './yourImage.png' with the path to your image
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
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
          <Button
            title="Find Nearest Hospitals"
            onPress={handleFindHospitalsPress}
          />
        </View>
        {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  input: {
    height: 50,
    margin: 10,
    padding: 8,
    fontSize: 20,
    backgroundColor: "#FFFAFA",
    fontFamily: "Georgia", // Set placeholder font family here
    color: "#00008B",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#FFFAFA",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    fontFamily: "Georgia",
    padding: 16,
  },
  titleText: {
    fontSize: 30,
    color: "#00008B",
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  button: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  buttonImage: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginRight: 10,
    padding: 13,
    width: 24,
    height: 24,
  },
  map: {
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 500,
    minWidth: "100%",
    alignSelf: "center",
    marginTop: 5,
    backgroundColor: "#373F51",
    padding: 150,
    top: 10,
    borderRadius: 10,
  },
  gmap: {
    borderRadius: 20,
    borderWidth: 0.5,
    backgroundColor: "#FFFAFA",
    justifyContent: "center",
    alignItems: "center",
  },
});
