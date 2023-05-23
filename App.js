import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
const list = [
  { name: 'Banana', calories: 96, protein: 1 },
  { name: 'Maça', calories: 53, protein: 0.3 },
  { name: 'Laranja', calories: 43, protein: 1 },
  { name: 'Melão', calories: 30, protein: 0.6 },
  { name: 'Abacate', calories: 167, protein: 4 },
  { name: 'Melancia', calories: 30, protein: 1 },
];

const FoodItems = ({ name, calories, protein }) => (
  <View>
    <Text>{name}</Text>
    <Text>{calories} cal</Text>
    <Text>{protein} g</Text>
  </View>
);


const FoodList = () => {
  <FlatList
    data={list}
    renderItem={({ item }) => 
    <FoodItems name={item.name} 
      calories={item.calories} protein={item.protein} 
    />} 
  />
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FoodList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});