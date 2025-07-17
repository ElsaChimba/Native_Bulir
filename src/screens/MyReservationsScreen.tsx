import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

interface Reservation {
  id: string;
  restaurantName: string;
  tableType: string;
  date: string;
  time: string;
}

export default function MyReservationsScreen({ route }: any) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const { userId } = route.params;

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await axios.get(
          `https://backendbulir-production.up.railway.app/reservations/user/${userId}`
        );
        setReservations(response.data);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    }

    fetchReservations();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Restaurante: {item.restaurantName}</Text>
            <Text>Mesa: {item.tableType}</Text>
            <Text>Data: {item.date}</Text>
            <Text>Hora: {item.time}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Você ainda não fez reservas.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
});
