import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function RegisterScreen({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nif, setNif] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://backendbulir-production.up.railway.app/auth/register', {
        nome,
        email,
        nif,
        senha,
      });
      Alert.alert('Conta criada com sucesso!');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Erro', error.response?.data?.message || 'Erro ao cadastrar');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.appTitle}>E. Restaurants</Text>

        <View style={styles.centerContent}>
          <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
              placeholderTextColor="#999"
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholderTextColor="#999"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="NIF"
              value={nif}
              onChangeText={setNif}
              style={styles.input}
              placeholderTextColor="#999"
            />
            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkContainer}>
              <Text style={styles.linkText}>
                Já tem conta? <Text style={styles.linkHighlight}>Entrar</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D4AF37',
    textAlign: 'center',
    marginBottom: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'rgba(48, 47, 47, 0.95)',
    borderRadius: 12,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#D4AF37',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#D4AF37',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
  },
  linkHighlight: {
    color: '#D4AF37',
    fontWeight: 'bold',
  },
});
