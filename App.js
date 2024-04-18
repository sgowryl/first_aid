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
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import FadeInView from "./components/FadeInView";
import { Audio } from "expo-av";
import * as Permissions from "expo-permissions";

import * as FileSystem from "expo-file-system";
import { InstantSearch } from "react-instantsearch-native";
import algoliasearch from "algoliasearch/lite";

import config from "./config";
import SearchBox from "./components/SearchBox";
import Hits from "./components/Hits";

const searchClient = algoliasearch(
    config.ALGOLIA_APP_ID,
    config.ALGOLIA_API_KEY
);

const recordingOptions = {
    // android not currently in use. Not getting results from speech to text with .m4a
    // but parameters are required
    android: {
        extension: ".m4a",
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: ".wav",
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};

export default function App() {
    const { width } = useWindowDimensions();
    const [name, setName] = useState("");
    const [postList, setPostList] = useState([]);

    const [recording, setRecording] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        Permissions.askAsync(Permissions.AUDIO_RECORDING);
    }, []);

    const deleteRecordingFile = async () => {
        try {
            const info = await FileSystem.getInfoAsync(recording.getURI());
            await FileSystem.deleteAsync(info.uri);
        } catch (error) {
            console.log("There was an error deleting recording file", error);
        }
    };

    const getTranscription = async () => {
        setIsFetching(true);
        try {
            const info = await FileSystem.getInfoAsync(recording.getURI());
            console.log(`FILE INFO: ${JSON.stringify(info)}`);
            const uri = info.uri;
            const formData = new FormData();
            formData.append("file", {
                uri,
                type: "audio/x-wav",
                name: "speech2text",
            });
            const response = await fetch(config.CLOUD_FUNCTION_URL, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setQuery(data.transcript);
        } catch (error) {
            console.log("There was an error reading file", error);
            stopRecording();
            resetRecording();
        }
        setIsFetching(false);
    };

    const startRecording = async () => {
        const { status } = await Permissions.getAsync(
            Permissions.AUDIO_RECORDING
        );
        if (status !== "granted") return;

        setIsRecording(true);
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        });
        const recording = new Audio.Recording();

        try {
            await recording.prepareToRecordAsync(recordingOptions);
            await recording.startAsync();
        } catch (error) {
            console.log(error);
            stopRecording();
        }

        setRecording(recording);
    };

    const stopRecording = async () => {
        setIsRecording(false);
        try {
            await recording.stopAndUnloadAsync();
        } catch (error) {
            // Do nothing -- we are already unloaded.
        }
    };

    const resetRecording = () => {
        deleteRecordingFile();
        setRecording(null);
    };

    const handleOnPressIn = () => {
        startRecording();
    };

    const handleOnPressOut = () => {
        stopRecording();
        getTranscription();
    };

    const handleQueryChange = (query) => {
        setQuery(query);
    };

    const fetchData = async () => {
        try {
            console.log(name);
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
        const url =
            "https://www.google.com/maps/search/accident+and+emergency/";
        Linking.openURL(url);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("./assets/med.png")}
                style={styles.backgroundImage}
            />
            <Header></Header>
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
            {/* <View style={styles.voicecontainer}>
                {isRecording && (
                    <FadeInView>
                        <FontAwesome
                            name="microphone"
                            size={32}
                            color="#48C9B0"
                        />
                    </FadeInView>
                )}
                {!isRecording && (
                    <FontAwesome name="microphone" size={32} color="#48C9B0" />
                )}
                <Text style={styles.voicetext}>Voice Search</Text>
                <TouchableOpacity
                    style={styles.voiceButton}
                    onPressIn={handleOnPressIn}
                    onPressOut={handleOnPressOut}
                >
                    {isFetching && <ActivityIndicator color="#ffffff" />}
                    {!isFetching && <Text>Hold for Voice Search</Text>}
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <InstantSearch
                    indexName={config.ALGOLIA_INDEX}
                    searchClient={searchClient}
                >
                    <SearchBox query={query} onChange={handleQueryChange} />
                    <Hits />
                </InstantSearch>
            </View> */}
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
                <View style={styles.gmap}>
                    <Button
                        title="Hospitals"
                        color="#D70040"
                        onPress={handleFindHospitalsPress}
                    />
                    <Image
                        source={require("./assets/map.png")}
                        style={styles.image}
                    />

                    <Button
                        title="Accident&Emergency"
                        color="#D70040"
                        onPress={handleFindEmergencyPress}
                    />
                    <Image
                        source={require("./assets/map.png")}
                        style={styles.image}
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
    voiceButton: {
        backgroundColor: "#48C9B0",
        paddingVertical: 20,
        width: "90%",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    voicetext: {
        color: "black",
        fontSize: 30,
    },
    voicecontainer: {
        marginTop: 40,
        backgroundColor: "#fff",
        alignItems: "center",
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
