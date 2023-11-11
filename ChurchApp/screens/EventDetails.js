import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import BottomNavBar from '../bottomNavBar';
import { Dimensions } from 'react-native';

export default function EventDetails({ route, navigation }) {
    const { title, description, location, date, startTime, img, endTime, registration} = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [numAttendees, setNumAttendees] = useState('');
    let endHour;
    let endFormat;
    let endMinutes;
    if(endTime!=""){
        let newTime = new Date("1970-01-01T" + endTime);
        endFormat = newTime.getHours() >= 12 ? 'PM' : 'AM';
        endHour = newTime.getHours() % 12;
        endHour = endHour ? endHour : 12; // To display "0" as "12"
        endMinutes = newTime.getMinutes();
        endMinutes =  newTime.getMinutes() < 10 ? '0' + endMinutes : endMinutes;
    }
    let imgUrl;
    let imgUrlFull; 
    let win = Dimensions.get('window');
    //const inputs: JSX.Element[] =[];
    const individualSubmit=()=> {
        const url = "https://www.sjfirstumc.org/_functions/registration";
        let result = fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(
                {
                    eventTitle: title,
                    email: email,
                    eventDate: date,
                    numAttendees: "1",
                    title: name,
                    phone: phone,
                }
            )
        });
        if(result){
            Alert.alert('Regestration Successful', 'Regestration Successful! Please sumbit as many individuals as needed.', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            setEmail('');
            setName('');
            setPhone('');
        }
    }
    const groupSubmit=()=> {
        const url = "https://www.sjfirstumc.org/_functions/registration";
        let result = fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(
                {
                    eventTitle: title,
                    email: email,
                    eventDate: date,
                    numAttendees: numAttendees,
                    title: name,
                    phone: phone,
                }
            )
        });
        if(result){
            Alert.alert('Regestration Successful', 'Regestration Successful!', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
              setEmail('');
              setName('');
              setPhone('');
              setNumAttendees('');
        }
      }
    if(img!=null){
        imgUrl= img.split("/");
        imgUrlFull = "https://static.wixstatic.com/media/" + imgUrl[3]; 
    }
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let newDate = new Date(date);
    let newTime = new Date("1970-01-01T" + startTime);
    let newformat = newTime.getHours() >= 12 ? 'PM' : 'AM';
    let hour = newTime.getHours() % 12;
    hour = hour ? hour : 12; // To display "0" as "12"
    let minutes = newTime.getMinutes();
    minutes =  newTime.getMinutes() < 10 ? '0' + minutes : minutes;
    return ( 
        <SafeAreaView style={{flex: 1,}}>
            <SafeAreaView style={styles.container}>
                { img!=null ? <Image style={{width: win.width, height: 200,}}source={{uri: imgUrlFull,}}/> : null }
                <View style = {styles.event}>
                    <View style = {styles.dateBox}>
                        <Text style={styles.date}>{months[newDate.getMonth()]}</Text>
                        <Text style={styles.date}>{newDate.getDate()}</Text>
                    </View>
                    <View style = {styles.eventInfo}>
                        <Text style={styles.title}>{title}</Text>
                        { endTime=="" ? <Text style={styles.time}>{hour}:{minutes} {newformat}</Text> : <Text style={styles.time}>{hour}:{minutes} {newformat} - {endHour}:{endMinutes} {endFormat}</Text> }
                        <Text style={styles.location}>At {location}</Text>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                </View>
            </SafeAreaView>
            {registration=="Group" ? 
                <View style={styles.registration}>
                    <Text style={styles.formTitle}>{"Event Regestration"}</Text>
                    <Text style={styles.inputTitle}>First and Last Name:</Text>
                    <TextInput 
                        placeholder='Enter Name' 
                        style = {styles.input}  
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.inputTitle}>Email:</Text>
                    <TextInput 
                        placeholder='Enter Email' 
                        keyboardType='email-address' 
                        style = {styles.input}  
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    /> 
                    <Text style={styles.inputTitle }>Phone:</Text>
                    <TextInput 
                        keyboardType='phone-pad' 
                        placeholder='Enter Phone #' 
                        style = {styles.input}
                        value={phone}  
                        onChangeText={(text) => setPhone(text)}
                    />
                    <Text style={styles.inputTitle}>Number of attendees(including yourself):</Text>
                    <TextInput 
                        placeholder='Enter # of Attendees' 
                        keyboardType='number-pad' 
                        style = {styles.input} 
                        value={numAttendees}
                        onChangeText={(text) => setNumAttendees(text)}
                    />  
                    <Pressable style={styles.sumbitBtn} onPress={groupSubmit}>
                        <Text style={styles.btnText}>Sumbit</Text>
                    </Pressable>
                </View>
            : null}
            {registration=="Individual" ? 
                <View style={styles.registration}>
                <Text style={styles.formTitle}>{"Event Regestration"}</Text>
                <Text style={styles.inputTitle}>First and Last Name:</Text>
                <TextInput 
                    placeholder='Enter Name' 
                    style = {styles.input}  
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.inputTitle}>Email:</Text>
                <TextInput 
                    placeholder='Enter Email' 
                    keyboardType='email-address' 
                    style = {styles.input}  
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                /> 
                <Text style={styles.inputTitle }>Phone:</Text>
                <TextInput 
                    keyboardType='phone-pad' 
                    placeholder='Enter Phone #' 
                    style = {styles.input}
                    value={phone}  
                    onChangeText={(text) => setPhone(text)}
                />
                <Pressable style={styles.sumbitBtn} onPress={individualSubmit}>
                    <Text style={styles.btnText}>Sumbit</Text>
                </Pressable>
            </View>
            : null}
            <Text style={{fontSize:40, color:'#778899'}}>BottomNavBar</Text>
            <BottomNavBar/>  
        </SafeAreaView>
    );
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
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight:'700'
    },
    text: {
        color: '#6c6c75',
        fontSize: 14,
    },
    location: {
        color: '#000000',
        fontSize: 14,
    },
    registration: {
        flex:1,
        backgroundColor: '#aabbb3',
        borderRadius:10,
        padding: 10,
        margin:5,
    },
    formTitle: {
        fontSize:20,
        fontWeight: 700,
        alignSelf: 'center',
    },
    inputTitle: {
        fontSize: 16, 
    },
    input: {
        backgroundColor: '#E8E8E8',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginBottom:10,
    },
    sumbitBtn: {
        backgroundColor: "#CED3D8",
        borderRadius: 5,
    },
    btnText: {
        color: '#000000',
    },
});