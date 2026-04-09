import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function StatusFila() {
  const router = useRouter();

  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const novaFila = Math.floor(Math.random() * 15);
      const horario = new Date().toLocaleTimeString().slice(3, 8);

      setDados((prev) => {
        const novo = [...prev, { fila: novaFila, hora: horario }];
        return novo.slice(-10);
      });

      setLoading(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Gráfico da Fila da cantina</Text>

      {loading && (
        <Text style={styles.loading}>Carregando dados...</Text>
      )}

      {!loading && dados.length === 0 && (
        <Text style={styles.vazio}>Sem dados ainda 📭</Text>
      )}

      {!loading && dados.length > 0 && (
        <View style={styles.graficoContainer}>
          
          <View style={styles.grafico}>
            {dados.map((item, index) => (
              <View key={index} style={styles.coluna}>
                
                {/* NÚMERO ACIMA */}
                <Text style={styles.valorTopo}>
                  {item.fila}
                </Text>

                {/* BARRA */}
                <View 
                  style={[
                    styles.barra,
                    { height: item.fila * 10 }
                  ]}
                />

                {/* HORÁRIO */}
                <Text style={styles.label}>
                  {item.hora}
                </Text>

              </View>
            ))}
          </View>

          <Text style={styles.legenda}>
            Pessoas na fila ao longo do tempo
          </Text>

        </View>
      )}

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

  loading: {
    color: '#999'
  },

  vazio: {
    color: '#999'
  },

  graficoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },

  grafico: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 220,
    gap: 5
  },

  coluna: {
    alignItems: 'center'
  },

  valorTopo: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4
  },

  barra: {
    width: 20,
    backgroundColor: '#FF8C00',
    borderRadius: 5
  },

  label: {
    fontSize: 10,
    marginTop: 5
  },

  legenda: {
    marginTop: 10,
    fontSize: 20,
    color: '#000'
  },

  voltar: { 
    fontSize: 16, 
    color: '#4169E1', 
    fontWeight: '600'
  },
});