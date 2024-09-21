import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity 
      onPress={() => setSelectedCategory(item)} 
      activeOpacity={0.7} 
      style={[
        styles.categoryText, 
        selectedCategory === item && styles.selectedCategoryText
      ]} 
    >
      <Text style={styles.textStyle}>{item}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    backgroundColor: '#DFDCDC', 
    borderRadius: 20,
    height: 50,
    justifyContent: 'center', 
    marginHorizontal: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  selectedCategoryText: {
    backgroundColor: '#6EA5E9', 
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center', 
  },
});
