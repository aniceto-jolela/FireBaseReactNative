import React from "react";
import { View } from "react-native";
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {Google[3] === "Google" ? (
        <>
          <ViewGoogle />
          <Author />
        </>
      ) : DadosEmail[2] === "DadosEmail" ? (
        <>
          <ViewEmailPassword />
          <Author />
        </>
      ) : NumberCode[2] === "NumberCode" ? (
        <>
          <ViewNumber />
          <Author />
        </>
      ) : (
        ""
      )}
    </View>
  );
};
