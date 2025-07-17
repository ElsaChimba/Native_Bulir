import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Restaurante } from '../services/type';

interface Props {
  restaurante: Restaurante;
  navigation: any;
  userId: string;
}

export default function RestaurantCard({ restaurante, navigation, userId }: Props) {
  const handleReservar = () => {
    navigation.navigate('Reservation', {
      restaurante,
      userId,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleReservar}>
      <ImageBackground
        source={restaurante.imagem}
        style={styles.image}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{restaurante.nome}</Text>
          <Text style={styles.description}>{restaurante.descricao}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Reservar</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#D4AF37',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
