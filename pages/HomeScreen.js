import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    image: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: '2',
    name: 'Product 2',
    price: 100,
    image: 'https://picsum.photos/200/300?random=2'
  },
  {
    id: '3',
    name: 'Product 3',
    price: 100,
    image: 'https://picsum.photos/200/300?random=3'
  }
];



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>${item.price}</Text>
          <img src={item.image} alt={item.name} style={{ width: 200, height: 300 }} />
        </View>
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,    
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
