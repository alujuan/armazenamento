import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Lista de Alimentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});
