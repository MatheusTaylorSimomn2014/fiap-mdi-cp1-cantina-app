import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [fila, setFila] = useState(0);
  const [status, setStatus] = useState('Carregando...');

  useEffect(() => {
    const interval = setInterval(() => {
      const pessoas = Math.floor(Math.random() * 15);

      setFila(pessoas);

      if (pessoas < 5) setStatus('🟢 Tranquilo');
      else if (pessoas < 10) setStatus('🟡 Moderado');
      else setStatus('🔴 Cheio');

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Cantina Inteligente FIAP</Text>

      <Text style={styles.subtitulo}>
        Monitoramento de Fila em Tempo Real
      </Text>

      {/* IMAGEM */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' }}
        style={styles.imagem}
      />

      {/* CARD */}
      <View style={styles.cardPrincipal}>
        <Text style={styles.cardTitulo}>Fila atual</Text>
        <Text style={styles.numero}>{fila} pessoas</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      {/* BOTÕES */}
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => router.push('/sobre')}
      >
        <Text style={styles.botaoTexto}>
          Ver análise completa →
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botaoSecundario} 
        onPress={() => router.push('/status')}
      >
        <Text style={styles.botaoTexto}>
          Ver histórico da fila →
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f5f5f5',
    padding: 20
  },

  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 5
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center'
  },

  imagem: {
    width: 80,
    height: 80,
    marginBottom: 20
  },

  cardPrincipal: {
    backgroundColor: '#F23064',
    width: '85%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25
  },

  cardTitulo: {
    color: '#fff',
    fontSize: 16
  },

  numero: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold'
  },

  status: {
    color: '#fff',
    marginTop: 5,
    fontWeight: '600'
  },

  botao: { 
    backgroundColor: '#32CD32', 
    padding: 16, 
    borderRadius: 12,
    marginBottom: 10
  },

  botaoSecundario: {
    backgroundColor: '#1E90FF',
    padding: 14,
    borderRadius: 12
  },

  botaoTexto:{ 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});