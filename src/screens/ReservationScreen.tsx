import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export default function ReservationScreen({ route, navigation }: any) {
  const { restaurante, userId } = route.params;

  const [mesa, setMesa] = useState('normal');
  const [data, setData] = useState(new Date());
  const [mostrarPicker, setMostrarPicker] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const confirmarReserva = async () => {
    try {
      setCarregando(true);

      const payload = {
        userId,
        serviceId: restaurante.id,
        tableType: mesa,
        date: data.toISOString(),
      };

      await axios.post('https://backendbulir-production.up.railway.app/reservations', payload);

      Alert.alert('Sucesso', 'Reserva feita com sucesso!');
      navigation.navigate('MyReservations', { userId });
    } catch (error) {
      console.error('Erro ao reservar:', error);
      Alert.alert('Erro', 'Não foi possível concluir a reserva.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={restaurante.imagem} style={styles.image} />
      <Text style={styles.title}>{restaurante.nome}</Text>
      <Text style={styles.description}>{restaurante.descricao}</Text>

      <Text style={styles.label}>Tipo de mesa</Text>
      <Picker
        selectedValue={mesa}
        onValueChange={(itemValue) => setMesa(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Normal" value="normal" />
        <Picker.Item label="VIP" value="vip" />
        <Picker.Item label="Casal" value="casal" />
        <Picker.Item label="Grupo" value="grupo" />
      </Picker>

      <Text style={styles.label}>Data e Hora</Text>
      <TouchableOpacity onPress={() => setMostrarPicker(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>{data.toLocaleString()}</Text>
      </TouchableOpacity>

      {mostrarPicker && (
        <DateTimePicker
          value={data}
          mode="datetime"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || data;
            setMostrarPicker(false);
            setData(currentDate);
          }}
        />
      )}

      <TouchableOpacity
        style={[styles.confirmButton, carregando && { backgroundColor: '#aaa' }]}
        onPress={confirmarReserva}
        disabled={carregando}
      >
        <Text style={styles.confirmButtonText}>
          {carregando ? 'Enviando...' : 'Confirmar Reserva'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 12, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  description: { fontSize: 16, color: '#666', marginBottom: 15 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: 'bold' },
  picker: { height: 50, marginBottom: 15 },
  dateButton: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  dateText: { fontSize: 16 },
  confirmButton: {
    backgroundColor: '#D4AF37',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: { fontWeight: 'bold', color: '#000' },
});
