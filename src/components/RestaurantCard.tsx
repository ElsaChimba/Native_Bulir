import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Restaurante } from '../services/type'; 

type Props = {
  restaurante: Restaurante;
};

export default function RestauranteCard({ restaurante }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={restaurante.imagem} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.info}>
        <Text style={styles.nome}>{restaurante.nome}</Text>
        <Text style={styles.descricao}>{restaurante.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  info: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  nome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#fff',
    fontSize: 14,
  },
});
