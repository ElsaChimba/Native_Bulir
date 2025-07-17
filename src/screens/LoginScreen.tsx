import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Restaurantes: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.bg}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} />
        <TextInput placeholder="Senha" placeholderTextColor="#ccc" style={styles.input} secureTextEntry />
        <Button title="Entrar" onPress={() => navigation.navigate('Restaurantes')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  container: { padding: 20 },
  title: { fontSize: 28, color: '#fff', marginBottom: 20 },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8
  }
});