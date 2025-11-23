import { View, Text, Button } from "react-native";
import React from "react";

const LeadCreationScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LeadCreationScreen</Text>

      <Button
        title="Go Back to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default LeadCreationScreen;
