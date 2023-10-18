import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import BottomNavBar from '../bottomNavBar';

export default function Events(props) {
    const test = 0; 
    //console.log(props);
    return ( 
        <View>
            <BottomNavBar/>
        </View>
        
    );

  
}

// const styles = StyleSheet.create({
//   subTitle:{
//     fontFamily: Platform.OS === 'ios' ? 'Avenir-Light' : 'sans-serif-light',
//     fontSize: 22,
//     backgroundColor:'rgb(50, 50, 50)',
//     color: 'rgb(255,255,255)',
//     margin: 20,
//     width: 200,
//     alignSelf: 'center',
//     borderRadius: 5,
//     textAlign: 'center',
//     fontWeight:'600',
//   }
//});