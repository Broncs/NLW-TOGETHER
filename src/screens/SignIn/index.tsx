import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export const SignIn = () => {
  const [textInput, setTextInput] = useState("");

  return (
    <View style={styles.container}>
      <Text>HI NLW</Text>

      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={setTextInput}
      />
      <Text>Voce digitou : {textInput} </Text>
    </View>
  );
};
