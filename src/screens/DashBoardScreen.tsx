import { View, Text, Button } from "react-native";
import React from "react";

const DashBoardScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>DashBoardScreen</Text>

      <Button
        title="Go to Lead Creation"
        onPress={() => navigation.navigate("Lead")}
      />

      <Button
        title="Go to Application Creation"
        onPress={() => navigation.navigate("application")}
      />
    </View>
  );
};

export default DashBoardScreen;
