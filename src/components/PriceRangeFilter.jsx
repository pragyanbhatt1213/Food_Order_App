import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const PriceRangeFilter = ({ visible, onClose, minPrice, maxPrice, onPriceChange }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Price Range</Text>
          <View style={styles.sliderContainer}>
            <Text>Min: ${minPrice.toFixed(2)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={20}
              step={0.5}
              value={minPrice}
              onValueChange={(value) => onPriceChange(value, maxPrice)}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Text>Max: ${maxPrice.toFixed(2)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={20}
              step={0.5}
              value={maxPrice}
              onValueChange={(value) => onPriceChange(minPrice, value)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  button: {
    backgroundColor: '#6EA5E9',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PriceRangeFilter;