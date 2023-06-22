import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/login/LoginScreen";
import RegisterScreen from "./src/register/RegisterScreen";
import PointsScreen from "./src/points/PointsScreen";
import React, { useEffect, useState } from "react";
import ConfigurationScreen from "./src/configuration/ConfigurationScreen";
import MapScreen from "./src/map/MapScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#11001E",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          header: () => {},
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Points" component={PointsScreen} />
        <Stack.Screen name="Configuration" component={ConfigurationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
