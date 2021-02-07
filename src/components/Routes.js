import Home from "./Home";
import Cadastro from "./Cadastro";
import Sobre from "./Sobre";
import IMC from './IMC'
import Resultado from './Resultado'

//Versão 5.x (com MODAL - preciso de DUAS pilhas)
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const PilhaPrincipal = createStackNavigator();

function PilhaPrincipalTelas() {
  return (
    <NavigationContainer>
      <PilhaPrincipal.Navigator initialRouteName="Home">
        <PilhaPrincipal.Screen name="Home" component={Home} />
        <PilhaPrincipal.Screen name="Cadastro" component={Cadastro} />
        <PilhaPrincipal.Screen name="IMC" component={IMC} />
        <PilhaPrincipal.Screen name="Sobre" component={Sobre} />
        <PilhaPrincipal.Screen name="Resultado" component={Resultado} />
      </PilhaPrincipal.Navigator>
    </NavigationContainer>
  );
}

export default PilhaPrincipalTelas;
