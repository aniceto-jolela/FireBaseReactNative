import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { Author } from "../share/author";
import { ViewEmailPassword } from "./components/view.email.password";
import { ViewGoogle } from "./components/view.google";
import { ViewNumber } from "./components/view.number";

export const Profile = () => {
  const Google = useSelector((state) => state.DadosGoogle);
  const DadosEmail = useSelector((state) => state.DadosEmailPassword);
  const NumberCode = useSelector((state) => state.DadosNumber);

  return (
    <View style={styles.container}>
      {Google[3] === "Google" ? (
        <>
          <Image style={styles.logo} source={require("../assets/view/1.jpg")} />
          <ViewGoogle />
          <Author />
        </>
      ) : DadosEmail[2] === "DadosEmail" ? (
        <>
          <Image
            style={styles.logo}
            source={require("../assets/view/0.jpg")}
          />
          <ViewEmailPassword />
          <Author />
        </>
      ) : NumberCode[2] === "NumberCode" ? (
        <>
          <Image style={styles.logo} source={require("../assets/view/2.jpg")} />
          <ViewNumber />
          <Author />
        </>
      ) : (
        ""
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
