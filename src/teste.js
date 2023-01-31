// Aboutscreen.js
import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

export default function Teste() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
       <Image
        style={styles.logo}
        source={{
          uri:photoURL ,
        }}
      />
      <Button
        title="Open URL with the system browser"
        onPress={() => Linking.openURL("https://expo.dev")}
        style={styles.button}
      />

      <Button
        title="Open URL with an in-app browser"
        onPress={() => WebBrowser.openBrowserAsync("https://expo.dev")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 11,
    color: "red",
  },
  logo: {
    width: 66,
    height: 58,
  },
});
