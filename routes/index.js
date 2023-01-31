import React from "react";
import { useSelector } from "react-redux";
import Layouts from "../share/layout";
import Authentications from "../src/authentications";
import Routes from "./routes";

export default function Default() {
  const status = useSelector((state) => state.StatusApp);
  return (
    <>
      {status ? (
        <Routes />
      ) : (
        <Layouts>
          <Authentications />
        </Layouts>
      )}
    </>
  );
}
