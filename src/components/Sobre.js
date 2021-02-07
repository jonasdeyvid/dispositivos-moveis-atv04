import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonHome from "./shared/buttonHome";

// import { Container } from './styles';

const components = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.headerPage}> Sobre</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.baseText}>Aluno: </Text>
        <Text>Jonas Deyvid</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.baseText}>Curso: </Text>
        <Text>Engenharia de Software</Text>
      </View>
      <View style={{...styles.infoContainer, marginBottom: 30}}>
        <Text style={styles.baseText}>Matrícula: </Text>
        <Text>385432</Text>
      </View>
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
    fontSize: 30,
    marginBottom: 20,
  },
  baseText: {
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
  },
});
