import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("Map");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-email") {
          alert("E-mail invalido");
        }
      });
  };

  const cover = require("../../assets/cover.jpg");

  return (
    <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
      <Text style={[styles.title]}>Caminhada</Text>
      <View style={[styles.content]}>
        <View style={[styles.textBox]}>
          <View>
            <Text style={[styles.textShadow]}>E-mail</Text>
            <TextInput
              style={[styles.input, styles.shadow]}
              value={email}
              onChangeText={(text) => setEmail(text)}
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
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: "space-around",
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

export default LoginScreen;
