import React, { useState, useEffect } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

const useBackground = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=medical`,
          {
            headers: {
              Authorization:
                "Client-ID 17Paf1HZjHH0QlaiYal7dPKmmPn3SxQKHd7Vy23bmHI",
            },
          }
        );
        const data = await response.json();
        setBackgroundImage(data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.imageBackground}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default useBackground;
