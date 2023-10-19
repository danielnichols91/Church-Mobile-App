import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import BottomNavBar from '../bottomNavBar';

export default function Events(props) {
    const url = "https://www.sjfirstumc.org/_functions/events";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            fetch(url)
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false)); 
          console.log(data);
        } catch (error) {
            console.log('response error')
            console.log(error);
        }
       
      }, []);
      console.log(data);
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