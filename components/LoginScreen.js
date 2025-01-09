import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Pressable,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState("Guillo");
  const [password, onChangePassword] = useState("secretpassWow");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={"email"}
        keyboardType={"email-address"}
        autoCapitalize="none"
        clearButtonMode="always" //only for iPhone, Does not work with multiLine
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={"password"}
        keyboardType={"default"}
        secureTextEntry={true}
        clearButtonMode="always"
      />
      <Pressable
        onPress={() => {
          setLoggedIn(!loggedIn);
          navigation.navigate("Welcome");
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Log in</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  loginButton: {
    padding: 20,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#F4CE14",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
  },
  loginText: {
    fontSize: 22,
    textAlign: "center",
    color: "black",
  },
});
