import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// import { Container } from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}> ATV 0.3 </Text>
      <View style={{marginBottom: 20}}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate("Cadastro", {})}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Button title="IMC" onPress={() => navigation.navigate("IMC", {})} />
      </View>
      <View style={{marginBottom: 20}}>
        <Button
          title="Sobre"
          onPress={() => navigation.navigate("Sobre")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    padding: 20
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  }
});
