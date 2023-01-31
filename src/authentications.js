import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Tab, TabView, Text } from "@ui-kitten/components";
import GoogleAutenticacao from "./authentication/google";
import EmailPassword from "./authentication/email.password";
import VerificationNumber from "./authentication/verification.number";

export default function Authentications() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <TabView
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={(index) => setSelectedIndex(index)}
      style={styles.tabContainer}
    >
      <Tab title="Google">
        <Layout style={styles.tabBody}>
          <GoogleAutenticacao />
        </Layout>
      </Tab>
      <Tab title="Email/Password">
        <Layout style={styles.tabBody}>
          <EmailPassword />
        </Layout>
      </Tab>
      <Tab title="Number">
        <Layout style={styles.tabBody}>
          <VerificationNumber />
        </Layout>
      </Tab>
    </TabView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#d3d5d5",
    width: "100%",
  },
  tabBody: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});
