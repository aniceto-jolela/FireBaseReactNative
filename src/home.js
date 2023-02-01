import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import Logout from "../share/logout";


export const Home = ({ navigation }) => {
 
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={styles.textTop}>Autenticação feita com sucesso!</Text>
        <Image
          style={styles.logo}
          source={require("../assets/feliz-sabado-icegif-12.gif")}
        />
        <Text style={styles.textDown}>
          Selecione o botão, para ver os dados de usuário.
        </Text>
      </View>
      <Button
        title="Ver perfil"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <Logout/>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 160,
    marginLeft: 50,
  },
  textTop: {
    fontSize: 20,
  },
  textDown: {
    marginBottom: 5,
    marginTop: 4,
    backgroundColor: "#c0c2bd",
    color: "#FFFFFF",
    padding: 3,
  },
});
