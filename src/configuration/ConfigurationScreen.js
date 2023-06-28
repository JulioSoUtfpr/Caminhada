import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ConfigurationScreen = ({ route, navigation }) => {
  const { uid } = route.params;

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        AsyncStorage.clear().then(() => {
          navigation.navigate("Login");
        });
      })
      .catch((error) => {
        console.log("error: ", error.message);
      });
  };

  async function resetPoints() {
    await updateDoc(doc(db, "users", uid), {
      points: 0,
    });
  }

  const handleClear = async () => {
    Alert.alert("Atenção", "Deseja resetar seus pontos?", [
      {
        text: "Não",
        style: "cancel",
      },
      { text: "Sim", onPress: () => resetPoints() },
    ]);
  };

  const cover = require("../../assets/cover.jpg");

  return (
    <View style={styles.content}>
      <Text
        style={[styles.back]}
        onPress={() => navigation.navigate("Map", { uid: uid })}
      >
        Voltar
      </Text>
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
  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  back: {
    width: "100%",
    display: "flex",
    color: "#9500FF",
    fontSize: 36,
    marginTop: 50,
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
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
