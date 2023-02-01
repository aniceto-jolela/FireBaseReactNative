import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Logout from "../../share/logout";

export const ViewGoogle = () => {
  const dados = useSelector((state) => state.DadosGoogle);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: dados[0],
        }}
      />
      <Text style={styles.text}>
        Nome: <Text style={styles.textIn}>{dados[1]}</Text>
      </Text>
      <Text style={styles.text}>
        Email: <Text style={styles.textIn}>{dados[2]}</Text>
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
  logo: {
    width: 66,
    height: 66,
    marginBottom: 10,
    borderRadius: 50,
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
