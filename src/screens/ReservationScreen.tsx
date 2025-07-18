import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  ReservaScreen: { id: string; restaurante: { imagem: any; nome: string; descricao: string } };
  MinhasReservas: undefined;
};

type ReservaScreenRouteProp = RouteProp<RootStackParamList, 'ReservaScreen'>;

const mesas = [
  { label: 'Mesa para 2', capacity: 2, price: 5000 },
  { label: 'Mesa para 5', capacity: 5, price: 12000 },
  { label: 'Mesa para 14', capacity: 14, price: 25000 },
];

export default function ReservaScreen() {
  const route = useRoute<ReservaScreenRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { id, restaurante } = route.params;

  const [selectedMesa, setSelectedMesa] = useState(mesas[0]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('Usuário não autenticado');

      await axios.post(
        'https://backendbulir-production.up.railway.app/reservations',
        {
          serviceId: id,
          details: selectedMesa,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Reserva realizada com sucesso!');
      setTimeout(() => {
        navigation.navigate('MinhasReservas');
      }, 1000);
    } catch (error) {
      setMessage('Erro ao realizar reserva.');
      Alert.alert('Erro', 'Não foi possível concluir a reserva.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#D4AF37" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <Image source={restaurante.imagem} style={styles.image} resizeMode="cover" />
        <Text style={styles.restauranteNome}>{restaurante.nome}</Text>
        <Text style={styles.restauranteDescricao}>{restaurante.descricao}</Text>

        <Text style={styles.title}>Escolha a mesa</Text>

        <View>
          {mesas.map((mesa) => {
            const isSelected = selectedMesa.label === mesa.label;
            return (
              <TouchableOpacity
                key={mesa.label}
                style={[styles.mesaItem, isSelected && styles.mesaItemSelected]}
                onPress={() => setSelectedMesa(mesa)}
                activeOpacity={0.7}
              >
                <View style={styles.mesaInfo}>
                  <Text style={styles.mesaLabel}>{mesa.label}</Text>
                  <Text style={styles.mesaCapacity}>Capacidade: {mesa.capacity} pessoas</Text>
                  <Text style={styles.mesaPrice}>Preço: {mesa.price} kz</Text>
                </View>
                {isSelected && (
                  <Ionicons name="checkmark-circle" size={28} color="#D4AF37" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          style={[styles.button, loading && styles.buttonDisabled]}
        >
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={styles.buttonText}>Confirmar Reserva</Text>
          )}
        </TouchableOpacity>

        {!!message && <Text style={styles.message}>{message}</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 20,
    padding: 5,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 100,
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 6,
  },
  restauranteNome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 2,
    textAlign: 'left',
  },
  restauranteDescricao: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'left',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: 20,
    textAlign: 'center',
  },
  mesaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  mesaItemSelected: {
    backgroundColor: 'rgba(212, 175, 55, 0.4)',
  },
  mesaInfo: {
    flexDirection: 'column',
  },
  mesaLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  mesaCapacity: {
    fontSize: 14,
    color: '#fff',
  },
  mesaPrice: {
    fontSize: 14,
    color: '#fff',
  },
  button: {
    backgroundColor: '#D4AF37',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
