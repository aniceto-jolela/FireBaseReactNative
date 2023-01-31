import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { Button, View, Image, StyleSheet, Text } from "react-native";
import Auth from "./auth.config";
import { useDispatch } from "react-redux";
import { dadosGoogle } from "../../store/actions/dados.google.action";
import { statusApp } from "../../store/actions/status.app.action";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAutenticacao() {
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "162971688372-d3jsgcqgl4oov8qng4vh8lq5a6tbsv43.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(Auth, credential)
        .then((e) => {
          console.log(e.user.providerData);
          setEmail(e.user.email);
          dispatch(
            dadosGoogle(e.user.photoURL, e.user.displayName, e.user.email)
          );
          dispatch(statusApp(true));
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("CONSEGUISTE.");
    }
  }, [response]);

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
