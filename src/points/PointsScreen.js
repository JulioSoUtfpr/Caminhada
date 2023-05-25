import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PointsScreen = ({ navigation }) => {
  const [points, setPoints] = useState("");

  return (
    <View style={styles.image}>
      <Text style={[styles.title]}>Pontos</Text>
      <Text style={[styles.title]}>{points}</Text>
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
  shadow: {
    shadowColor: "#FFFFFF",
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
});

export default PointsScreen;
