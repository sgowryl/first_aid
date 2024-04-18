import { useState, useEffect, Component } from "react";
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
export default function App() {
    const { width } = useWindowDimensions();
    const [name, setName] = useState("");
    const [postList, setPostList] = useState([]);

    const fetchData = async () => {
        try {
            console.log(name);
            // if (name.contains(" ")) {
            //     name.replace(" ", "-");
            // }
            const response = await fetch(
                `https://api.nhs.uk/conditions/${name}`,
                {
                    headers: {
                        "subscription-key": "13a43248355e41c0beedcd663fc14c2b",
                    },
                }
            );
            //const data = await response.json();
            const result = await response.json();

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
    return (
        <SafeAreaView>
            <View style={styles.topBar}>
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
                    <TouchableOpacity
                        onPress={() => fetchData()}
                        style={styles.button}
                    >
                        <Image
                            source={require("./assets/send.png")}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={postList}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.titleText}>
                                    {item.headline}
                                </Text>
                                {item.text ? (
                                    <HTML
                                        source={{ html: item.text }}
                                        contentWidth={width}
                                    />
                                ) : (
                                    <Text></Text>
                                )}
                            </View>
                        );
                    }}
                />
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
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
    },
});
