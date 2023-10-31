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
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const Item = ({title, description, location, date, startTime}) => {
            newDate = new Date(date);
            newTime = new Date("1970-01-01T" + startTime);
            let newformat = newTime.getHours() >= 12 ? 'PM' : 'AM';
            // Find current hour in AM-PM Format
            let hour = newTime.getHours() % 12;
            // To display "0" as "12"
            hour = hour ? hour : 12;
            let minutes = newTime.getMinutes();
            minutes =  newTime.getMinutes() < 10 ? '0' + minutes : minutes;
            return(
                <View style = {styles.event}>
                    <View style = {styles.dateBox}>
                        <Text style={styles.text}>{months[newDate.getMonth()]}</Text>
                        <Text style={styles.text}>{newDate.getDate()}</Text>
                    </View>
                    <View style = {styles.eventInfo}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.text}>{description}</Text>
                        <Text style={styles.text}>Location: {location}</Text>
                        <Text style={styles.text}>{hour}:{minutes} {newformat}</Text>
                    </View>
                    
                </View>
            )
        }
        const renderItem = ({item})=>(
            <Item title={item.title} description={item.description} location={item.location} date={item.startDatetime} startTime={item.startTime}/>
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
        backgroundColor: '#E8E8E8',
        borderRadius:10,
        padding: 10,
        margin:5,
        flexDirection: 'row',
        flex: 1,  
    },
    eventInfo: {
        flex:4,
    },
    dateBox:{
        flex:1,
    },
    title: {
        fontSize: 15,
        color: '#8DA399',
        fontWeight:'700'
    },
    text: {
        color: '#000000',
        fontSize: 12,
    }
});