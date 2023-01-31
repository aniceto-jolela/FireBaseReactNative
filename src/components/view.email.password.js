import React from "react";
import { Button, View, Text,StyleSheet, } from "react-native";

export const ViewEmailPassword=()=> {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nome:</Text>
      <Text>Email:</Text>
      <Text>This is {route.params.name}'s profile</Text>

      <Button style={styles.button}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
    button: {
      margin: 10,
      padding: 11,
      width: 200,
    },
    logo: {
      width: 200,
      height: 160,
    },
  });
  