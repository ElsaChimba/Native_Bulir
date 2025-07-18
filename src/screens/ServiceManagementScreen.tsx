import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

type Service = {
  id: string;
  nome: string;
  descricao: string;
};

export default function ServiceManagementScreen() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [services, setServices] = useState<Service[]>([]);

  const addService = () => {
    if (!nome || !descricao) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const novoServico: Service = {
      id: Date.now().toString(),
      nome,
      descricao,
    };

    setServices([novoServico, ...services]);
    setNome('');
    setDescricao('');
  };

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Serviços</Text>

      <TextInput
        placeholder="Nome do serviço"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={addService}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.serviceName}>{item.nome}</Text>
              <Text style={styles.serviceDesc}>{item.descricao}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteService(item.id)}>
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#D4AF37', marginBottom: 16 },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#D4AF37',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: { color: '#000', fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  serviceName: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  serviceDesc: { color: '#ccc', fontSize: 14 },
  deleteText: { color: 'red', fontWeight: 'bold', marginLeft: 12 },
});
