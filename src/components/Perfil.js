import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ButtonHome from "./shared/buttonHome";

// import { Container } from './styles';

const components = ({ navigation, route }) => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.headerPage}> Perfil</Text>
      <View style={styles.contentImage}>
        <Image
          style={styles.perfilImage}
          source={{
            uri:
              "https://blogs.opovo.com.br/artesanatodamente/wp-content/uploads/sites/52/2018/08/Esqueceram-de-Mim-740x555.jpg",
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.baseText}>Nome: </Text>
        <Text>{route.params.nome}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.baseText}>Idade: </Text>
        <Text>{route.params.idade}</Text>
      </View>
      <View style={{ ...styles.infoContainer, marginBottom: 20 }}>
        <Text style={styles.baseText}>Curso: </Text>
        <Text>ES</Text>
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
  perfilImage: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
  contentImage: {
    justifyContent: "center",
    alignItems: "center",
  },
});
