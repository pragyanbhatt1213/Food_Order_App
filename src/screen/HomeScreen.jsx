import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ProductCard from '../components/ProductCard';
import productData from '../data/data.json';

const categories = ['Trending Now', 'All', 'Veg', 'Non-Veg'];
const sortOptions = [
  { label: 'Price ↑', value: 'priceAsc' },
  { label: 'Price ↓', value: 'priceDesc' },
  { label: 'Name A-Z', value: 'nameAsc' },
  { label: 'Name Z-A', value: 'nameDesc' },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    filterAndSortProducts();
  }, [selectedCategory, sortOrder, searchQuery]);

  const filterAndSortProducts = () => {
    let filtered = productData;
    
    if (selectedCategory !== 'All' && selectedCategory !== 'Trending Now') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(lowercaseQuery) ||
        item.category.toLowerCase().includes(lowercaseQuery)
      );
    }

    switch (sortOrder) {
      case 'priceAsc':
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'priceDesc':
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'nameAsc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <LinearGradient colors={['#c3ddfa', '#D6E7F8']} style={styles.container}>
      <Header />
      <Text style={styles.text1}>What To Eat!!</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Search..." 
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={styles.iconContainer}>
          <EvilIcons name="search" size={24} color={'#6EA5E9'} />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={[
              styles.categoryButtonText,
              selectedCategory === item && styles.selectedCategoryButtonText
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sortContainer}>
        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.sortOption,
              sortOrder === option.value && styles.selectedSortOption
            ]}
            onPress={() => setSortOrder(option.value)}
          >
            <Text style={styles.sortOptionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList 
        data={filteredProducts} 
        renderItem={({ item }) => (
          <ProductCard item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={5}
        removeClippedSubviews={true}
        decelerationRate="normal"
        scrollEventThrottle={16}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  text1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50', 
    marginBottom: 20, 
    textAlign: 'center', 
    textShadowColor: '#B0C4DE',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    flexDirection: 'row-reverse', 
    alignItems: 'center',
    paddingHorizontal: 10, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20, 
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10, 
    fontSize: 16,
    color: '#333',
  },
  iconContainer: {
    padding: 5, 
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: '#6EA5E9',
  },
  categoryButtonText: {
    color: '#2C3E50',
    fontWeight: '600',
    fontSize: 14,
  },
  selectedCategoryButtonText: {
    color: '#FFFFFF',
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sortOption: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  selectedSortOption: {
    backgroundColor: '#B0C4DE',
  },
  sortOptionText: {
    color: '#2C3E50',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productList: {
    paddingVertical: 10,
  },
});

export default HomeScreen;