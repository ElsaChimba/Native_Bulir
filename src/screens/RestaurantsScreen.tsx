import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { restaurantes } from '../data/restaurantes';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Escolha um restaurante</Text>
      {restaurantes.map((restaurante) => (
        <RestaurantCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4AF37',
    marginBottom: 16,
    textAlign: 'center',
  },
});
