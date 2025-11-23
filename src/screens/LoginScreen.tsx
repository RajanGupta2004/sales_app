import { View, Text, Button, Alert } from "react-native";
import React from "react";
import { loginWithAzure } from "../services/auth/azureAuth";

const LoginScreen = () => {
  const handleLogin = async () => {
    try {
      const result = await loginWithAzure();
      console.log("result", result);
      Alert.alert("Success", "Login successful! Check console for tokens.");
    } catch (error) {
      Alert.alert("Login Failed", String(error));
    } finally {
    }
  };
  return (
    <View>
      <Text>LoginScreen</Text>

      <Button title="AD Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
