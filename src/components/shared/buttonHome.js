import React from 'react';
import { View, Button } from 'react-native';

// import { Container } from './styles';

const ButtonHome = ({ navigation }) => {
  return (
      <View>
          <Button title="Home" onPress={() => {
              navigation.navigate('Home', {})
          }}/>
      </View>
  );
}

export default ButtonHome;