import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { restaurantes } from '../data/restaurantes';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantesScreen({ navigation, route }: any) {
  const userId = route?.params?.userId ?? null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#D4AF37" />
        </TouchableOpacity>
        <Text style={styles.header}>Escolha um restaurante</Text>
      </View>

      {restaurantes.map((restaurante) => (
        <RestaurantCard
          key={restaurante.id}
          restaurante={restaurante}
          navigation={navigation}
          userId={userId}
        />
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 12,
    padding: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4AF37',
  },
});
