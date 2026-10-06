import { Image, StyleSheet, Text, View } from 'react-native';

interface HeroCardProps {
  nome: string;
  classe: string;
}

export function HeroCard({ nome, classe}: HeroCardProps) {
  return (
    <View style={styles.card}>
      <Image 
        source={require('@/imagens/foto_avatar.png')} 
        style={styles.avatar}
      />
      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.class}>{classe}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#1b2540',
    borderRadius: 8,
    marginVertical: 6,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  class: {
    color: '#fff',
    fontSize: 14,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});