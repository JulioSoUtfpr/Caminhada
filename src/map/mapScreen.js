import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const MapScreen = ({ route, navigation }) => {
  const { uid } = route.params;

  const handlePoints = () => {
    navigation.navigate("Points", { uid: uid });
  };
  const handleConfig = () => {
    navigation.navigate("Configuration", { uid: uid });
  };

  const cover = require("../../assets/cover.jpg");

  return (
    <View style={styles.content}>
      <Image style={[styles.map]} source={require("../../assets/map.png")} />
      <View style={[styles.buttonBox]}>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={handlePoints}
        >
          <Text style={styles.buttonText}>Pontos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={handleConfig}
        >
          <Text style={styles.buttonText}>Config</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  map: {
    height: "80%",
  },
  textBox: {
    flexDirection: "column",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  buttonBox: {
    flexDirection: "row",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#E8C8FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 140,
    height: 50,
    marginTop: 50,
  },
  buttonText: {
    color: "#9500FF",
    fontSize: 24,
  },
  shadow: {
    shadowColor: "#FFFFFF",
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
});

export default MapScreen;
