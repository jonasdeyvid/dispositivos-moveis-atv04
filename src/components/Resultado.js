import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const components = ({ navigation, route }) => {
  return (
    <View>
        <Text> Seu IMC é: {route.params.imc.toFixed(2)}</Text>
    </View>
  );
}

export default components;