import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Restaurantes');
  };

  return (
    <ImageBackground
      source={require('../assets/restaurantes/restaurante.jpg')}
      style={{ flex: 1, justifyContent: 'center', padding: 24 }}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10, padding: 20 }}>
        <Text style={{ fontSize: 24, color: '#D4AF37', marginBottom: 16, textAlign: 'center' }}>
          Login
        </Text>

        <TextInput
          placeholder="E-mail ou NIF"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            marginBottom: 12,
            padding: 10,
            borderRadius: 8,
          }}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            marginBottom: 12,
            padding: 10,
            borderRadius: 8,
          }}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{ backgroundColor: '#D4AF37', padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ color: '#D4AF37', textAlign: 'center', marginTop: 12 }}>
            Não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
