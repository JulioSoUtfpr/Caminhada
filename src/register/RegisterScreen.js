import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigation.navigate("Map");
  };

  const cover = require("../../assets/cover.jpg");

  return (
    <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
      <Text style={[styles.back]} onPress={() => navigation.navigate("Login")}>
        back
      </Text>
      <Text style={[styles.title]}>Registrar</Text>
      <View style={[styles.content]}>
        <View style={[styles.textBox]}>
          <View>
            <Text style={[styles.textShadow]}>Nome</Text>
            <TextInput
              style={[styles.input, styles.shadow]}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View>
            <Text style={[styles.textShadow]}>Senha</Text>
            <TextInput
              style={[styles.input, styles.shadow]}
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={[styles.buttonBox]}>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  image: {
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "#9500FF",
    fontSize: 36,
    marginTop: 50,
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
    justifyContent: "center",
  },
  input: {
    color: "black",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 35,
    width: 230,
    marginVertical: 10,
    fontSize: 14,
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
  textShadow: {
    fontSize: 32,
    color: "#9500FF",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default RegisterScreen;
