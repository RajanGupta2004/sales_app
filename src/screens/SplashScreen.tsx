import { View, Text, Button } from "react-native";
import React from "react";

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SplashScreen</Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
};

export default SplashScreen;
