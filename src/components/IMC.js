import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

// import { Container } from './styles';

const components = ({ navigation }) => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  return (
    <View style={styles.pageContainer}>
      <Text>IMC</Text>
      <TextInput
        placeholder="Peso"
        keyboardType="numeric"
        onChangeText={(peso) => {
          setPeso(peso);
        }}
      ></TextInput>
      <TextInput
        placeholder="Altura"
        keyboardType="numeric"
        onChangeText={(altura) => {
          setAltura(altura);
        }}
      ></TextInput>
      <Button
        title="OK"
        onPress={() => {
          if (
            altura.length > 0 &&
            peso.length > 0 &&
            typeof Number.parseFloat(altura) === "number" &&
            typeof Number.parseFloat(peso === "number")
          )
            navigation.navigate("Resultado", { imc: IMC(altura, peso) });
          else alert(`Insira peso e altura corretamente`);
        }}
      />
    </View>
  );
};

export default components;

function IMC(altura, peso) {
  return peso / altura ** 2;
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
  },
});
