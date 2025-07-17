import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { restaurantes } from '../data/restaurantes';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantesScreen() {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.bg}
    >
      <View style={styles.overlay} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Restaurantes Disponíveis</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={restaurantes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RestaurantCard restaurante={item} />}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    padding: 20,
    paddingTop: 0,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
