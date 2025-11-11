import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashSecreen from "../screens/SplashSecreen";
import LoginScreen from "../screens/LoginScreen";
import DashBoardScreen from "../screens/DashBoardScreen";
import LeadCreationScreen from "../screens/LeadCreationScreen";
import ApplicationCreationScreen from "../screens/ApplicationCreationScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashSecreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        <Stack.Screen name="Lead" component={LeadCreationScreen} />
        <Stack.Screen
          name="application"
          component={ApplicationCreationScreen}
        />
      </Stack.Navigator>
    );
  };
  const token = null;
  return (
    <NavigationContainer>
      {!token ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
