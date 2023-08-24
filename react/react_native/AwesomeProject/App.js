import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native';
import CardsComponents from './componentes/cards/index';
import Header from './componentes/header/index'

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
    <StatusBar style="auto" />
      <Header/>
      <Text style={styles.paragraph}>
        Filmes
      </Text>
      <ScrollView horizontal={true}>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
      </ScrollView>
      <Text style={styles.paragraph}>
        Séries
      </Text>
      <ScrollView horizontal={true}>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
      </ScrollView>
      <Text style={styles.paragraph}>
        Animações
      </Text>
      <ScrollView horizontal={true}>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
      </ScrollView>
      <Text style={styles.paragraph}>
        Documentário
      </Text>
      <ScrollView horizontal={true}>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
        <CardsComponents/>
      </ScrollView>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 0,
    flex: 1,
    backgroundColor: '#27023B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paragraph:{
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
    
  },
});
