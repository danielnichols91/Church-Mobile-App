import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Dimensions, Image} from 'react-native';
import BottomNavBar from '../bottomNavBar';
import { useNavigation } from '@react-navigation/native';

export default function ReoccurringEvents(props) {
    const url = "https://www.sjfirstumc.org/_functions/reoccurringEvents";
    const navigation = useNavigation();
    const [eventData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let win = Dimensions.get('window');
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
        const Item = ({title, description, location, schedule, startTime, img, endTime }) => {
            newTime = new Date("1970-01-01T" + startTime);
            let newformat = newTime.getHours() >= 12 ? 'PM' : 'AM';
            // Find current hour in AM-PM Format
            let hour = newTime.getHours() % 12;
            // To display "0" as "12"
            hour = hour ? hour : 12;
            let minutes = newTime.getMinutes();
            minutes =  newTime.getMinutes() < 10 ? '0' + minutes : minutes;
            let imgUrl;
            let imgUrlFull; 
            if(img!=null){
                imgUrl= img.split("/");
                imgUrlFull = "https://static.wixstatic.com/media/" + imgUrl[3]; 
            }
            return(
                <View style = {styles.event}>
                    <View style = {styles.eventInfo}>
                        { img!=null ? <Image style={{width: (0.9*(win.width)), height: 200,}}source={{uri: imgUrlFull,}}/> : null }
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.time}>{hour}:{minutes} {newformat}</Text>
                        <Text style={styles.location}>Schedule: {schedule}</Text>
                        <Text style={styles.location}>At {location}</Text>
                        <Text style={styles.text} numberOfLines={1}>{description}</Text>
                    </View>
                </View>
            )
        }
        const renderItem = ({item})=>(
            <Item itemData = {item} title={item.title} description={item.description} location={item.location} schedule={item.reoccurringSchedule} startTime={item.startTime} img={item.image} endTime={item.endTime}/>
        );
        return ( 
            <SafeAreaView style={{flex: 1,}}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity onPress={() =>  navigation.navigate('Events')}>
                            <Text style={styles.eventNav2}>Special Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>  navigation.navigate('ReoccurringEvents')}>
                            <Text style={styles.eventNav}>Reoccurring Events</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={eventData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                    />
                    <Text style={{fontSize:40, color:'#778899'}}>BottomNavBar</Text>
                </SafeAreaView>
                <BottomNavBar/>  
            </SafeAreaView>
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