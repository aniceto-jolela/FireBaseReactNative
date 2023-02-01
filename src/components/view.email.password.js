import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Logout from "../../share/logout";

export const ViewEmailPassword = () => {
  const dados = useSelector((state) => state.DadosEmailPassword);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Email: <Text style={styles.textIn}>{dados[0]}</Text>
      </Text>
      <Text style={styles.text}>
        Password: <Text style={styles.textIn}>{dados[1]}</Text>
      </Text>

      <Logout />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  textIn: {
    fontSize: 14,
  },
});
