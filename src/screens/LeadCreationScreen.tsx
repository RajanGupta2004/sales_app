import { View, Text, Button } from "react-native";
import React from "react";
import CustomerBasicDetailsForm from "../components/CustomerBasicDetailsForm";

const LeadCreationScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomerBasicDetailsForm />
    </View>
  );
};

export default LeadCreationScreen;
