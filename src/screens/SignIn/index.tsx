import React from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import illustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={illustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
      </View>
    </View>
  );
};
