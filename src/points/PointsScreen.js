import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PointsScreen = ({ navigation }) => {
  const [points, setPoints] = useState("");

  // const getData = async () => {
  //   try {
  //     const response = fetch("http://localhost:3000/users");
  //     const json = response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const getData = () => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.points);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.content}>
      <Text style={[styles.back]} onPress={() => navigation.navigate("Map")}>
        back
      </Text>
      <Text style={[styles.title]}>Pontos</Text>
      <Text style={[styles.title]}>{points}</Text>
      <Text style={[styles.title]} onPress={() => getData()}>
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
