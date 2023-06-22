import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function asyncSave(value) {
    await AsyncStorage.setItem("uid", value);
  }

  const handleRegister = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(collection(db, "users"), userCredential.user.uid), {
          name: name,
          points: 0,
        });
        asyncSave(userCredential.user.uid);
        navigation.navigate("Map", { uid: userCredential.user.uid });
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          alert("Este e-mail já esta em uso");
        } else if (error.code == "auth/weak-password") {
          alert("Senha deve possuir 6 ou mais caracteres");
        }
        console.log(error.message);
      });
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
              onChangeText={(value) => setName(value)}
            />
          </View>
          <View>
            <Text style={[styles.textShadow]}>E-mail</Text>
            <TextInput
              style={[styles.input, styles.shadow]}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View>
            <Text style={[styles.textShadow]}>Senha</Text>
            <TextInput
              style={[styles.input, styles.shadow]}
              value={password}
              onChangeText={(value) => setPassword(value)}
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
    marginTop: 10,
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
    marginBottom: 30,
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
