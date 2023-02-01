import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import Logout from "../../share/logout";

export const ViewNumber = () => {
  const dados = useSelector((state) => state.DadosNumber);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Telefone: <Text style={styles.textIn}>{dados[0]}</Text>
      </Text>
      <Text style={styles.text}>
        Código: <Text style={styles.textIn}>{dados[1]}</Text>
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
    marginTop: -200,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "#FFFFFF",
  },
  textIn: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
