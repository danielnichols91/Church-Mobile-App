import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import BottomNavBar from '../bottomNavBar';
import { useNavigation } from '@react-navigation/native';

export default function Events(props) {
    const url = "https://www.pathwaymethodist.org/_functions/events";
    const navigation = useNavigation();
    const [eventData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const options= {
        method:"GET",
    }
    useEffect(()=>{ 
        fetchData() 
      },[]); 
        // Get API equest that returns a JSON with all the upcoming special events from Wix database on website 
      const fetchData = () => { 
        fetch(url,options) 
          .then(response => response.json()) 
          .then(json => setData(json.items)) 
          .catch(error => console.log(error)) 
          .finally(() => setLoading(true));
      };
      // Creates tabs for switching between special and reoccurring events
      const getTabs = () => {
        return <View style={styles.tabsContainer}>
                    <TouchableOpacity onPress={() =>  navigation.navigate('Events')}>
                        <Text style={styles.eventNav}>Special Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>  navigation.navigate('ReoccurringEvents')}>
                        <Text style={styles.eventNav2}>Reoccurring Events</Text>
                    </TouchableOpacity>
                </View>;
    }; 
      if(loading){
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Used to map month number to abbreviation
        const Item = ({title, description, location, date, startTime, img, endTime, registration }) => {
            newDate = new Date(date);
            newTime = new Date("1970-01-01T" + startTime);
            let newformat = newTime.getHours() >= 12 ? 'PM' : 'AM'; // Convert to 12 hour time format
            // Find current hour in AM-PM Format
            let hour = newTime.getHours() % 12;
            // To display "0" as "12"
            hour = hour ? hour : 12;
            let minutes = newTime.getMinutes();
            minutes =  newTime.getMinutes() < 10 ? '0' + minutes : minutes;
            return(
                <View style = {styles.event} onTouchEnd={() => navigation.navigate('EventDetails', {
                    title: title,
                    description: description,
                    location: location,
                    date: date,
                    startTime: startTime,
                    img: img,
                    endTime: endTime,
                    registration: registration,
                  })}>
                    <View style = {styles.dateBox}>
                        <Text style={styles.date}>{months[newDate.getMonth()]}</Text>
                        <Text style={styles.date}>{newDate.getDate()}</Text>
                    </View>
                    <View style = {styles.eventInfo}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.time}>{hour}:{minutes} {newformat}</Text>
                        <Text style={styles.location}>At {location}</Text>
                        <Text style={styles.text} numberOfLines={1}>{description}</Text>
                    </View>
                    
                </View>
            )
        }
        // Pass parameters in when creating a new event item
        const renderItem = ({item})=>(
            <Item itemData = {item} title={item.title} description={item.description} location={item.location} date={item.startDatetime} startTime={item.startTime} img={item.image} endTime={item.endDatetime} registration = {item.requestRsvp}/>
        );
        return ( 
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <FlatList
                        data={eventData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                        ListHeaderComponent={getTabs}
                    />
                    <Text style={{fontSize:40, color:'#778899'}}>BottomNavBar</Text>
                </View>
                <BottomNavBar/>  
            </View>
            );
        }
        else {
            return(<Text style={{fontSize: 20,}}>Loading...</Text>);
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
        backgroundColor: '#8DA399',
        height: 70,
        borderRadius:10,
        justifyContent: 'center',
        marginRight: 8,
    },
    date :{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700', 
    },
    time: {
        fontWeight: '700',
    },
    title: {
        fontSize: 17,
        color: '#000000',
        fontWeight:'700'
    },
    text: {
        color: '#6c6c75',
        fontSize: 12,
    },
    location: {
        color: '#000000',
        fontSize: 12,
    },
    eventNav: {
        backgroundColor: '#8da399',
        color: '#000000',
        fontSize:20,
        borderRadius:10,
        fontWeight:'700',
        padding: 5,
        margin: 5,
    },
    eventNav2: {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize:20,
        borderRadius:10,
        fontWeight:'700',
        padding: 5,
        margin: 5,
    },
    tabsContainer:{
        flexDirection: 'row',
        flex: 1,
    },

});