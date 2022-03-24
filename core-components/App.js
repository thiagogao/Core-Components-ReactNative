import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, Button} from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { useState } from "react";

export default function App() {
  const Nome = () => {
  const [nome, setNome] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  

  return (
    <View>
    <Text style={styles.titulo}>{nomeUsuario}</Text>
    <Text style={styles.paragraph}>
        Nome:
      </Text>
    <TextInput
        style={styles.input}
        placeholder="Insira seu nome"
        keyboardType="text"
        value={nome}
        onChangeText={setNome}
        
            
      />
    <Button style={styles.button}
      onPress={() => setNomeUsuario(nome)}
        title="Confirmar"
        color="#0559ff"
      />
    </View>
  )
}
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/imgFundo.jpg')} resizeMode="cover" style={styles.imageBackground}> 
      <Nome/>
      <AssetExample>
      </AssetExample>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#cf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageBackground: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    
  },
  button: {
    height: 35,
    borderBottonwidth: 45,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    margin: 15,
    fontSize: 20,
  }
});