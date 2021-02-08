import Home from "./Home";
import Cadastro from "./Cadastro";
import Sobre from "./Sobre";
import IMC from "./IMC";
import Resultado from "./Resultado";
import Perfil from "./Perfil";

//Versão 5.x (com MODAL - preciso de DUAS pilhas)
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const PilhaPrincipal = createStackNavigator();
const PilhaRaiz = createStackNavigator();

function PilhaPrincipalTelas() {
  return (
    <PilhaPrincipal.Navigator initialRouteName="Home">
      <PilhaPrincipal.Screen name="Home" component={Home} />
      <PilhaPrincipal.Screen name="Cadastro" component={Cadastro} />
      <PilhaPrincipal.Screen name="IMC" component={IMC} />
      <PilhaPrincipal.Screen name="Sobre" component={Sobre} />
      <PilhaPrincipal.Screen name="Resultado" component={Resultado} />
    </PilhaPrincipal.Navigator>
  );
}

function PilhaRaizTelas() {
  return (
    <NavigationContainer>
      <PilhaRaiz.Navigator>
        <PilhaRaiz.Screen
          name="Principal"
          component={PilhaPrincipalTelas}
          options={{ headerShown: false }}
        />
        <PilhaRaiz.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
      </PilhaRaiz.Navigator>
    </NavigationContainer>
  );
}

export default PilhaRaizTelas;
