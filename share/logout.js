import React from "react";
import { Button, View, StyleSheet, Vibration } from "react-native";
import { useDispatch } from "react-redux";
import { statusApp } from "../store/actions/status.app.action";

export default function Logout() {
  const dispatch = useDispatch();
 
  return (
    <View style={styles.button}>
      <Button
        title="Sair"
        onPress={() => {
          Vibration.vibrate();
          dispatch(statusApp(false));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 4,
    width: 60,
    borderRadius: 8,
    backgroundColor: "crimson",
  },
});
