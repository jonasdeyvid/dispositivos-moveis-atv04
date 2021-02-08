import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonHome from "./shared/buttonHome";

// import { Container } from './styles';

const components = ({ navigation, route }) => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.headerPage}> Resultado</Text>
      <Text> Seu IMC é: {route.params.imc.toFixed(2)}</Text>
      <Text style={{marginBottom: 20}}>{msgResultado(27)}</Text>
      <ButtonHome navigation={navigation} />
    </View>
  );
};

export default components;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
  },
  headerPage: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
});

function msgResultado(imc) {
  if (imc < 17) return "Muito abaixo do peso";
  if (imc >= 17 && imc <= 18.49) return "Abaixo do peso";
  if (imc > 18.49 && imc <= 24.99) return "Peso normal";
  if (imc > 24.99 && imc <= 29.99) return "Acima do peso";
  if (imc > 29.99 && imc <= 34.99) return "Obesidade I";
  if (imc > 34.99 && imc <= 39.99) return "Obesidade II (severa)";
  if (imc > 39.99) return "Obesidade III (mórbida)";
  else return `imc inválido: ${imc}`;
}
