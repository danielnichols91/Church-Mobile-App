import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import BottomNavBar from '../bottomNavBar';

export default function Events(props) {
    const test = 0; 
    //console.log(props);
    return ( 
        <View style={styles.container}>
            <BottomNavBar/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
});