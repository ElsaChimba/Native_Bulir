import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import { Restaurante } from '../type';

type Props = {
  restaurante: Restaurante;
};

export default function RestaurantCard({ restaurante }: Props) {
  return (
    <View style={styles.card}>
      <Image source={restaurante.imagem} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{restaurante.nome}</Text>
        <Text style={styles.desc}>{restaurante.descricao}</Text>
        <Button title="Reservar" onPress={() => Alert.alert('Reserva feita!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#000000a0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 150 },
  info: { padding: 10 },
  name: { fontSize: 20, color: '#fff', marginBottom: 4 },
  desc: { fontSize: 14, color: '#ccc', marginBottom: 8 },
});
