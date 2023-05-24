import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';

const foodList = [
  { name: 'Banana', calories: 96, protein: 1 },
  { name: 'Maça', calories: 53, protein: 0.3 },
  { name: 'Laranja', calories: 43, protein: 1 },
  { name: 'Melão', calories: 30, protein: 0.6 },
  { name: 'Abacate', calories: 167, protein: 4 },
  { name: 'Melancia', calories: 30, protein: 1 },
];

const FoodItem = ({ name, calories, protein }) => (
  <View style={styles.foodItem}>
    <Text style={styles.foodName}>{name}</Text>
    <Text style={styles.foodCalories}>{calories} cal</Text>
    <Text style={styles.foodProtein}>{protein} g</Text>
  </View>
);

const FoodList = () => {
  return (
    <FlatList
      data={foodList}
      renderItem={({ item }) => (
        <FoodItem
          name={item.name}
          calories={item.calories}
          protein={item.protein}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <FoodList />
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
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  foodName: {
    fontSize: 16,
  },
  foodCalories: {
    fontSize: 16,
    color: 'gray',
  },
  foodProtein: {
    fontSize: 16,
    color: 'gray',
  },
});