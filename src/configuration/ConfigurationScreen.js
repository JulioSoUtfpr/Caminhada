import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const ConfigurationScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  const handleClear = () => {
    console.log("clear");
  };

  const cover = require("../../assets/cover.jpg");

  return (
    <View>
      <Text style={[styles.title]}>Configurações</Text>
      <View style={[styles.textBox]}>
        <View>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>Resetar Progresso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#9500FF",
    fontSize: 36,
    marginTop: 50,
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
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
    width: 300,
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

export default ConfigurationScreen;
