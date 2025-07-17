import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ReservaScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Text style={{ color: '#D4AF37', fontSize: 24, marginBottom: 20 }}>Reserva Screen</Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#D4AF37', padding: 12, borderRadius: 6 }}>
        <Text style={{ color: 'black' }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
