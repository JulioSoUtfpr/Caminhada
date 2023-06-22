import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const PointsScreen = ({ route, navigation }) => {
  const { uid } = route.params;
  const [points, setPoints] = useState("");

  useEffect(() => {
    getPoints();
  }, []);

  const getPoints = async () => {
    await getDoc(doc(collection(db, "users"), uid)).then((value) => {
      setPoints(value.data().points);
    });
  };

  return (
    <View style={styles.content}>
      <Text
        style={[styles.back]}
        onPress={() => navigation.navigate("Map", { uid: uid })}
      >
        back
      </Text>
      <Text style={[styles.title]}>Pontos</Text>
      <Text style={[styles.title]}>{points}</Text>
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
  shadow: {
    shadowColor: "#FFFFFF",
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
});

export default PointsScreen;
