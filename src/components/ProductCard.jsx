import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const images = {
  haka_noodles: require('../assets/haka_noodles.jpeg'),
  chiken_noodles: require('../assets/chiken_noodles.jpeg'),
  white_pasta: require('../assets/white_pasta.jpeg'),
  chiken_burger: require('../assets/chiken_burger.jpeg'),
  manchurian: require('../assets/food1.png'),
  chiken_popcorn: require('../assets/chiken_popcorn.jpeg'),
  veg_burger: require('../assets/veg_curger.jpeg'),
  chicken_roll: require('../assets/chiken_roll.jpeg'),
  veg_Roll: require('../assets/veg_roll.jpeg'),
  momos: require('../assets/momos.jpeg'),
};

const ProductCard = ({ item }) => {
  const imageSource = images[item.image] ? images[item.image] : null;

  return (
    <View style={styles.container}>
      {imageSource ? (
        <Image source={imageSource} style={styles.coverImage} />
      ) : (
        <Text style={styles.errorText}>Image not found</Text> 
      )}
      <View style={styles.content}> 
        <Text style={styles.title}>{item.name}</Text>
        {/* Prefix price with ₹ symbol */}
        <Text style={styles.price}>₹ {item.price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    margin: 10,
  },
  coverImage: {
    height: 140,
    borderRadius: 20,
    width: '100%',
    marginVertical: 10,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: '#444444',
    fontWeight: '600',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#9C9C9C",
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});
