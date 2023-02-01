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
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Auth from "./auth.config";
import { useDispatch } from "react-redux";
import { dadosEmailPassword } from "../../store/actions/dados.email.password.action";
import { statusApp } from "../../store/actions/status.app.action";
import { dadosGoogle } from "../../store/actions/dados.google.action";
import { dadosNumber } from "../../store/actions/dados.number.action";

export default function EmailPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleCreateAccount = async () => {
    await createUserWithEmailAndPassword(Auth, email, password)
      .then(() => {
        Alert.alert("Usuário criado com sucesso!");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const handleSigIn = async () => {
    await signInWithEmailAndPassword(Auth, email, password)
      .then(() => {
        dispatch(dadosEmailPassword(email, password, "DadosEmail"));
        dispatch(dadosGoogle("", "", "", ""));
        dispatch(dadosNumber("", "", ""));
        dispatch(statusApp(true));
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        inputMode="email"
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
