import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      extraScrollHeight={50} // Adjust scroll height to lift the input above the keyboard
      enableOnAndroid={true} // Ensures it works for Android
    >
      <Text style={styles.headingSection}>
        How was your visit to Little Lemon?
      </Text>
      <Text style={styles.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="First name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder="Last name"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        placeholder={"Phone Number"}
        keyboardType={"phone-pad"}
      />
      <TextInput
        style={styles.messageInput}
        value={message}
        onChangeText={onChangeMessage}
        placeholder="Message"
        multiline={true} // Keep multiline enabled
        maxLength={250}
        textAlignVertical="top" // Ensure text aligns at the top
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 90,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
    textAlignVertical: "top",
  },
  infoSection: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});

export default FeedbackForm;
