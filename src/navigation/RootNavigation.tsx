import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import DashBoardScreen from "../screens/DashBoardScreen";
import LeadCreationScreen from "../screens/LeadCreationScreen";
import ApplicationCreationScreen from "../screens/ApplicationCreationScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
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
  const token = false;
  return (
    <NavigationContainer>
      {!token ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
