import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import Auth from "./auth.config";



export default function EmailPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //

  const handleCreateAccount = async () => {
    await createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        Alert.alert("Usuário criado com sucesso!");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSigIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        setIsAuthenticated(true);
        console.log(user);
        
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Saiu");
        // Sign-out successful.
      })
      .catch((error) => {
        Alert.alert(error);
        // An error happened.
      });
  };


  const GoogleAuth = async () => {

   // Before
  // ==============
 await signInWithRedirect(auth, new GoogleAuthProvider());
  // After the page redirects back
  const userCred = await getRedirectResult(auth);

  // After
  // ==============
  const userCredA = await signInWithPopup(auth, new GoogleAuthProvider());


  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSigIn}>
        <Text style={styles.buttonText}> Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}> Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={SignOut}>
        <Text style={styles.buttonText}> SignOut</Text>
      </TouchableOpacity>

      {isAuthenticated ? <Text>Logado com sucesso</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    borderColor: "#EEE",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  button: {
    height: 45,
    backgroundColor: "#069",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
