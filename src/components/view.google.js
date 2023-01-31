import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Logout from "../../share/logout";

export const ViewGoogle = () => {
  const dados = useSelector((state) => state.DadosGoogle);
  console.log(dados)
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: dados[0],
        }}
      />
      <Text style={styles.text}>Nome: {dados[1]}</Text>
      <Text style={styles.text}>Email: {dados[2]}</Text>

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
  logo: {
    width: 200,
    height: 160,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
