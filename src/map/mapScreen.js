import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const MapScreen = ({ route, navigation }) => {
  const { uid } = route.params;
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0029,
    longitudeDelta: 0.0012,
  });
  const [markers, setMarkers] = useState([
    {
      latitude: -25.7041,
      longitude: -53.0974,
    },
    {
      latitude: -25.7035,
      longitude: -53.0969,
    },
    {
      latitude: -25.7032,
      longitude: -53.0963,
    },
  ]);

  // [
  //   {
  //     latitude: -25.7041,
  //     longitude: -53.0974,
  //   },
  //   {
  //     latitude: -25.7035,
  //     longitude: -53.0969,
  //   },
  //   {
  //     latitude: -25.7032,
  //     longitude: -53.0963,
  //   },
  // ]

  const getPoints = async () => {
    await getDoc(doc(collection(db, "users"), uid)).then((value) => {
      addPoints(value.data().points);
    });
  };

  const getMarkers = async () => {
    await getDoc(doc(collection(db, "users"), uid)).then((value) => {
      setMarkers(value.data().markers);
    });
  };

  async function updateMarkers() {
    await updateDoc(doc(db, "users", uid), {
      markers: markers,
    });
    alert("50 pontos adicionados");
  }

  async function addPoints(add) {
    await updateDoc(doc(db, "users", uid), {
      points: add + 50,
    });
    alert("50 pontos adicionados");
  }

  const checkLocation = (coords) => {
    let removed = false;
    markers.forEach((marker, index) => {
      if (
        Math.round(coords.latitude * 10000) / 10000 ==
          Math.round(marker.latitude * 10000) / 10000 &&
        Math.round(coords.longitude * 10000) / 10000 ==
          Math.round(marker.longitude * 10000) / 10000
      ) {
        removed = true;
        let newList = markers;
        newList[index] = {
          latitude: -25.7049 + Math.floor(Math.random() * 22) / 10000,
          longitude: -53.0961 - Math.floor(Math.random() * 22) / 10000,
        };
        setMarkers(newList);
        updateMarkers();
        getPoints();
      }
    });
    if (removed == true) {
      // markers.splice(removeInd, 1);
      // removeInd = null;
    }
  };

  const handlePoints = () => {
    navigation.navigate("Points", { uid: uid });
  };
  const handleConfig = () => {
    navigation.navigate("Configuration", { uid: uid });
  };

  const cover = require("../../assets/cover.jpg");

  useEffect(() => {
    getMarkers();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        ...position,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(location);
    })();
  }, []);

  // useEffect(() => {
  //   console.log("awdwa");
  // }, [location]);

  return (
    <View style={styles.content}>
      <View style={[styles.mapContainer]}>
        <MapView
          showsUserLocation={true}
          onUserLocationChange={(local) =>
            checkLocation(local.nativeEvent.coordinate)
          }
          style={styles.map}
          region={position}
          onRegionChangeComplete={(region) => setPosition(region)}
        >
          {markers.map((coord, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: coord.latitude,
                  longitude: coord.longitude,
                }}
                pinColor="#9500FF"
              ></Marker>
            );
          })}
        </MapView>
      </View>
      <Text style={{ color: "white" }}>
        {position.latitude} | {position.longitude}
      </Text>
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
  mapContainer: {
    overflow: "hidden",
    borderRadius: 10,
    height: "75%",
    width: "80%",
    marginTop: 60,
  },
  map: {
    height: "100%",
    width: "100%",
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
