import React from "react";
import { Button, View, StyleSheet, Vibration, Image } from "react-native";
import { useDispatch } from "react-redux";
import { statusApp } from "../store/actions/status.app.action";

export default function Logout() {
  const [state, setState] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.button}>
        <Button
          disabled={state}
          title="Sair"
          onPress={() => {
            setState(true);
            Vibration.vibrate();
            dispatch(statusApp(false));
          }}
        />
      </View>
      <Image
        style={{
          width: 12,
          height: 12,
          marginBottom: 5,
          display: state ? "flex" : "none",
        }}
        source={require("../assets/buffer-gif-8.gif")}
      />
    </>
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
