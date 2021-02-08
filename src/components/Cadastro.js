import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

// import { Container } from './styles';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState(true);
  const [idade, setIdade] = useState(true);
  const [email, setEmail] = useState(true);
  return (
    <View style={styles.view}>
      <Text style={styles.text}> Cadastro</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => {
          setNome(text);
        }}
      ></TextInput>
      <TextInput
        placeholder="Idade"
        onChangeText={(text) => {
          setIdade(text);
        }}
      ></TextInput>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      ></TextInput>
      <Button
        title="OK"
        onPress={() => {
          navigation.navigate("Perfil", {
            nome: nome,
            idade: idade,
            email: email,
          });
        }}
      />
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  email: {
    marginBottom: 20,
  },
});
