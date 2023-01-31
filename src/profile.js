import React from "react";
import { View, Text } from "react-native";
import { Author } from "../share/author";
import { ViewGoogle } from "./components/view.google";

export const Profile = () => {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ViewGoogle />
      <Author />
    </View>
  );
};
