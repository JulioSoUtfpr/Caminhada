import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const PointsScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [points, setPoints] = useState("");
  const [nomes, setNomes] = useState("");

  const getPoints = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().points}`);
    });
  };

  const getData = () => {
    console.log(points);
  };
  useEffect(() => {
    getPoints();
  }, []);

  return (
    <View style={styles.content}>
      <Text style={[styles.back]} onPress={() => navigation.navigate("Map")}>
        back
      </Text>
      <Text style={[styles.title]}>Pontos</Text>
      <Text style={[styles.title]}>{points}</Text>
      <Text style={[styles.title]} onPress={() => getPoints()}>
        rq
      </Text>
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
