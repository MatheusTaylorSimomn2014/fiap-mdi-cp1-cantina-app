import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function SobreCantina() {
  const router = useRouter();

  const [fila, setFila] = useState(5);
  const [tempos, setTempos] = useState([]);
  const [media, setMedia] = useState(0);
  const [variancia, setVariancia] = useState(0);
  const [estimativa, setEstimativa] = useState(0);

  const gerarTempoAtendimento = () => {
    return Math.floor(Math.random() * 5) + 2;
  };

  const calcularMedia = (lista) => {
    const soma = lista.reduce((acc, val) => acc + val, 0);
    return lista.length ? soma / lista.length : 0;
  };

  const calcularVariancia = (lista, media) => {
    const soma = lista.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    return lista.length ? soma / lista.length : 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const novaFila = fila + (Math.random() > 0.5 ? 1 : -1);
      const filaAtual = Math.max(novaFila, 0);

      const novoTempo = gerarTempoAtendimento();
      const novosTempos = [...tempos, novoTempo].slice(-10);

      const novaMedia = calcularMedia(novosTempos);
      const novaVariancia = calcularVariancia(novosTempos, novaMedia);

      const novaEstimativa = novaMedia * filaAtual;

      setFila(filaAtual);
      setTempos(novosTempos);
      setMedia(novaMedia.toFixed(2));
      setVariancia(novaVariancia.toFixed(2));
      setEstimativa(novaEstimativa.toFixed(1));

    }, 2000);

    return () => clearInterval(interval);
  }, [fila, tempos]);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Simulação da Cantina</Text>

      <View style={styles.cardGrande}>
        <Text style={styles.cardTitulo}>Fila atual</Text>
        <Text style={styles.numero}>{fila} pessoas</Text>
      </View>

      {fila === 0 && (
        <Text style={styles.vazio}>Sem fila no momento 🎉</Text>
      )}

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTexto}>Média</Text>
          <Text style={styles.valor}>{media} min</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTexto}>Variância</Text>
          <Text style={styles.valor}>{variancia}</Text>
        </View>
      </View>

      <View style={styles.cardEstimativa}>
        <Text style={styles.cardTitulo}>Tempo estimado</Text>
        <Text style={styles.numero}>{estimativa} min</Text>
      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    padding: 20
  },

  titulo: { 
    fontSize: 26, 
    fontWeight: 'bold',
    marginBottom: 20
  },

  vazio: {
    marginBottom: 10,
    color: '#888'
  },

  cardGrande: {
    backgroundColor: '#F23064',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center'
  },

  cardEstimativa: {
    backgroundColor: '#32CD32',
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
    width: '80%',
    alignItems: 'center'
  },

  numero: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold'
  },

  cardTitulo: {
    color: '#fff',
    fontSize: 16
  },

  cardsContainer: {
    flexDirection: 'row',
    gap: 15
  },

  card: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  cardTexto: {
    color: '#fff'
  },

  valor: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },

  voltar: { 
    fontSize: 16, 
    color: '#4169E1', 
    fontWeight: '600',
    marginTop: 20
  },
});