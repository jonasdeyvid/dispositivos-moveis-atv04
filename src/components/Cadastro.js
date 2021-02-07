import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

// import { Container } from './styles';

const Cadastro = () => {
    const [nome, setNome] = useState(true);
    const [idade, setIdade] = useState(true);
    const [email, setEmail] = useState(true);
  return (
    <View style={styles.view}>
      <Text style={styles.text}> Cadastro</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => {
            setNome(text)

        }}
      ></TextInput>
      <TextInput placeholder="Idade"></TextInput>
      <TextInput placeholder="Email" keyboardType="email-address"></TextInput>
      <Button title="OK" />
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 20,
  },
});
