import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import BottomNavBar from '../bottomNavBar';

export default function Events(props) {
    const url = "https://www.sjfirstumc.org/_functions/events";
    //const exampleURL = "https://api.github.com/users/hadley/orgs"; 
    const [eventData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
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
          .finally(() => setLoading(true));
      }; 
      if(loading){
        console.log(eventData);
        console.log(loading);
        const Item = ({title}) => {
            return(
                <View style = {styles.event}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            )
        }
        const renderItem = ({item})=>(
            <Item title={item.title}/>
        );
        return ( 
            <View style={styles.container}>
                <FlatList
                data={eventData}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                />
                <BottomNavBar/>
            </View> 
            );
        }
        else {
            return(<Text>Loading is False</Text>);
        }
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