import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import BottomNavBar from '../bottomNavBar';

export default function Events(props) {
    const url = "https://www.sjfirstumc.org/_functions/events";
    //const exampleURL = "https://api.github.com/users/hadley/orgs"; 
    let [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const options= {
        method:"GET",
    }
    useEffect(()=>{ 
        fetchData() 
      },[]); 
    
      const fetchData = () => { 
        fetch(url,options) 
          .then(response => response.json()) 
          .then(json => setData(json.items)) 
          .catch(error => console.log(error)) 
          .finally(() => setLoading(false));
      }; 
      console.log(data);
      const Event = ({title}) => (
        <View style={styles.event}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    return ( 
        <View style={styles.container}>
            <FlatList
              listData={data}
              renderItem={({event}) => <Event title={event.title} />}
              keyExtractor={event => event._id}
            />
            <BottomNavBar/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      event: {
      },
      title: {
    },
});