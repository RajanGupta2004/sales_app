import { View, Text, Button } from "react-native";
import React from "react";

const ApplicationCreationScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ApplicationCreationScreen</Text>

      <Button
        title="Go Back to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default ApplicationCreationScreen;
