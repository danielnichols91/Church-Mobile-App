import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
//import {withNavigation} from 'react-navigation'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BottomNavBar = (nav) => {
  console.log(nav);
  return (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.sjfirstumc.org/donate')}>
        <Text style={styles.navigationBtn}>Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Text style={styles.navigationBtn}>Events</Text>
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