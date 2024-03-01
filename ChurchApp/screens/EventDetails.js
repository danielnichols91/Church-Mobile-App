import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, Alert,  KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, { useEffect, useState } from 'react';
import BottomNavBar from '../bottomNavBar';
import { Dimensions } from 'react-native';

export default function EventDetails({ route, navigation }) {
    const { title, description, location, date, startTime, img, endTime, registration} = route.params; //List of parameters 
    // Declare variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [numAttendees, setNumAttendees] = useState('');
    let endHour;
    let endFormat;
    let endMinutes;
    // Since end time is optional only do if not empty
    if(endTime!=""){
        //Format time in a javascript Date 
        let newTime = new Date("1970-01-01T" + endTime);
        endFormat = newTime.getHours() >= 12 ? 'PM' : 'AM'; // Change tp 12 hour format
        endHour = newTime.getHours() % 12;
        endHour = endHour ? endHour : 12; // To display "0" as "12"
        endMinutes = newTime.getMinutes();
        endMinutes =  newTime.getMinutes() < 10 ? '0' + endMinutes : endMinutes;
    }
    let imgUrl;
    let imgUrlFull; 
    let win = Dimensions.get('window'); // Used to get pixel dimension of device screen 
    const individualSubmit=()=> {
        const url = "https://www.pathwaymethodist.org/_functions/registration";
        //Post api request to send a JSON with regestration infomation to wix website for individual regestration
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
            // Based on result of attempting to send post request alrert the end user
            Alert.alert('Regestration Successful', 'Regestration Successful! Please sumbit as many individuals as needed.', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            // Clear all of the fields
            setEmail('');
            setName('');
            setPhone('');
        }
    }
    const groupSubmit=()=> {
        const url = "https://www.pathwaymethodist.org/_functions/registration";
        //Post api request to send a JSON with regestration infomation to wix website for group regestration
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
            // Based on result of attempting to send post request alrert the end user
            Alert.alert('Regestration Successful', 'Regestration Successful!', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
              // Clear all of the input fields
              setEmail('');
              setName('');
              setPhone('');
              setNumAttendees('');
        }
      }
    // Since image is optional for events, this section will only run if there is an image.
    if(img!=null){
        //Images are saved in a database on the wix website. To access these images can use the url below with the unique identifier
        imgUrl= img.split("/");
        imgUrlFull = "https://static.wixstatic.com/media/" + imgUrl[3]; 
    }
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //Map month number to abbreviation
    let newDate = new Date(date);
    let newTime = new Date("1970-01-01T" + startTime);
    // Format time as a javascript Date
    let newformat = newTime.getHours() >= 12 ? 'PM' : 'AM'; // Convert to 12 hour time format
    let hour = newTime.getHours() % 12;
    hour = hour ? hour : 12; // To display "0" as "12"
    let minutes = newTime.getMinutes();
    minutes =  newTime.getMinutes() < 10 ? '0' + minutes : minutes;
    //Return differently based on if there is an image and what type of registration if any
    return ( 
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView>
            <SafeAreaView style={styles.container}>
                {/* Place image if exists for this event, else don't put anything */}
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
            {/* if registration is set to Group create this section else do not*/}
            {registration=="Group" ? 
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.registration}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        {/* Text input fields for regestration form */}
                        <View style={styles.inner}>
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
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            : null}
            {/* If registration is set to Individual create this section else do not*/}
            {registration=="Individual" ? 
                <View style={styles.registration}>
                <Text style={styles.formTitle}>{"Event Regestration"}</Text>
                <Text style={styles.inputTitle}>First and Last Name:</Text>
                {/* Text input fields for registration form */}
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
            </ScrollView> 
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
    inner: {
        padding: 1,
        flex: 1,
        justifyContent: 'space-around',
      },    
});