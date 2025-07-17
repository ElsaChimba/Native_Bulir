import React from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import RestauranteCard from '../components/RestaurantCard';
import { restaurantes } from '../data/restaurantes';

export default function RestaurantesScreen() {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.bg}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={styles.overlay} />
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <RestauranteCard restaurante={item} />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    padding: 16,
    paddingTop: 60,
  },
});
