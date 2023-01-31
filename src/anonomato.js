import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Linking from "expo-linking";
import App from "./app.config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { StyleSheet, Text, View, Image,Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();
export default function OutrosAssuntosoogleAutenticacaos() {
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [photoURL, setPhotoURL] = React.useState("");

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "162971688372-pageic0led48v8g8i8mvckhfj504ddda.apps.googleusercontent.com",
    responseType: ResponseType,
  });

  const auth = getAuth(App);
  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((e) => {
          //console.log(e.user.providerData)
          console.log(e.user.phoneNumber);
          setPhotoURL(e.user.photoURL);
          setDisplayName(e.user.displayName);
          setEmail(e.user.email);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("CONSEGUISTE.");
    }
  }, [response]);

  const Logout = () => {
    //setIdClient("Aniceto")
    response != null ? (response.type = "dismiss") : "";
    signOut(auth)
      .then((e) => {
        // Sign-out successful.
        console.log(response.type);
        setPhotoURL("");
        setDisplayName("");
        setEmail("");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../../assets/vecteezy_3d-social-media-icons-google_9428333_21.png")}
      />

      <Text>Email : {email}</Text>

       <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />

      <Button title='Logout' onPress={Logout} />

      <Button
        title="Open URL with the system browser"
        onPress={() => Linking.openURL("https://expo.dev")}
        style={styles.button}
      />

      <Button
        title="Open URL with an in-app browser"
        onPress={() => WebBrowser.openBrowserAsync("https://expo.dev")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 11,
    width: 200,
  },
  logo: {
    width: 200,
    height: 160,
  },
});
