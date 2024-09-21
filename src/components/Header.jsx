import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/appicon.png')} style={styles.appIcon} />
        <Text></Text>
      </View>
      <Image source={require('../assets/profile.png')} style={styles.profileIcon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 10, 
    paddingTop: 20, 
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  appIcon: {
    height: 30,
    width: 30,
    borderRadius:11,
  },
  profileIcon: {
    height: 30,
    width: 30,
    marginRight: 10, 
  },
});
