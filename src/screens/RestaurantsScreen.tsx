import React from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import { Restaurante } from '../type';

const restaurantes: Restaurante[] = [
  {
    id: '1',
    nome: 'Restaurante Angola Grill',
    descricao: 'Especializado em grelhados angolanos.',
    imagem: require('../assets/restaurantes/restaurante1.jpg'),
  },
  {
    id: '2',
    nome: 'Sabores do Kwanza',
    descricao: 'Culinária tradicional com vista para o rio.',
    imagem: require('../assets/restaurantes/restaurante2.jpg'),
  },
];

export default function RestaurantesScreen() {
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.bg}>
      <View style={styles.overlay} />
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <RestaurantCard restaurante={item} />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  container: { padding: 16 }
});
