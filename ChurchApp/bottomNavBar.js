import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Text style={styles.navigationBtn}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OnlineService')}>
        <Text style={styles.navigationBtn}>Watch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.sjfirstumc.org/donate')}>
        <Text style={styles.navigationBtn}>Donate</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
    height: 50,
  },
  navigationBtn: { 
    color: '#ffffff',
    fontSize: 20,
  },
});

export default BottomNavBar;