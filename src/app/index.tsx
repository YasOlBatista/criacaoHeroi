import { HeroCard } from '@/components/HeroCad';
import CustomModal from '@/modais/CustomModal';
import { useState } from 'react';
import {
  ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';


interface Hero {
  name: string;
  classe: string;
}

export default function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveHero = (nome: string, classe: string) => {
    setHeroes([...heroes, { name: nome, classe }]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.headerTitle}>Guilda de Heróis</Text>
      <Text style={styles.text}>Lista de Heróis</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {heroes.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum herói cadastrado ainda.</Text>
        ) : (
          heroes.map((hero) => (
            <HeroCard
              nome={hero.name}
              classe={hero.classe}
            />
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Adicionar Herói</Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveHero}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111126',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 80,
  },
  emptyText: {
    color: '#7C7C8A',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#0419d3',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: '#121214',
    fontWeight: 'bold',
    fontSize: 16,
  },
});