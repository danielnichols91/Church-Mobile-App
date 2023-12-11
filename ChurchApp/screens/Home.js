import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, Pressable, Linking} from 'react-native';
import BottomNavBar from '../bottomNavBar';
import { WebView } from 'react-native-webview'; 
import { useNavigation } from '@react-navigation/native';

export default function Home(route) {
    let win = Dimensions.get('window'); // Gets screen dimensions of device
    const navigation = useNavigation();
    return ( 
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView>
                <Image style={{width: win.width, height: (win.width*0.75),}}source={require('../assets/churchOutside.jpg')}/>
                <View style = {styles.welcome}>
                        <View style = {styles.eventInfo}>
                            <Text style={styles.title}>Pathway Global Methodist</Text>
                            <Text style={styles.location}>Welcome!</Text>
                            <Pressable onPress={() => {navigation.navigate('Events');}}>
                                <Image style={{width: (win.width*.9), height: (win.width*0.25),}}source={require('../assets/upcomingEvents.jpg')}/>
                                <Text style={styles.location}>Click to check out our upcoming events!</Text>
                            </Pressable>
                            {/* Image links to Facebook, Instagram, Youtube, and map location */}
                            <View style={styles.socialMedia}>
                            <Pressable onPress={() => { Linking.openURL('https://www.facebook.com/sjfirstumc')}}>
                                <Image style={{width: 50, height: 50, marginVertical: 10,}}source={require('../assets/facebook.png')}/>
                            </Pressable>
                            <Pressable onPress={() => { Linking.openURL('https://www.instagram.com/sjfirstumc/')}}>
                                <Image style={{width: 50, height: 50, marginVertical: 10}}source={require('../assets/instagram.png')}/>
                            </Pressable>
                            <Pressable onPress={() => { Linking.openURL('https://www.youtube.com/@st.joefirstumc6330')}}>
                                <Image style={{width: 50, height: 50, marginVertical: 10}}source={require('../assets/youtube.png')}/>
                            </Pressable>
                            <Pressable onPress={() => { Linking.openURL('https://maps.app.goo.gl/XbM2k3qxRs3pirxh6')}}>
                                <Image style={{width: 50, height: 50, marginVertical: 10}}source={require('../assets/location.png')}/>
                            </Pressable>
                            </View>
                        </View>
                </View>
                {/* Webview is an inset of html of the same chruch google calander on website */}
                <WebView 
                    scalesPageToFit={true}
                    bounces={true}
                    nestedScrollEnabled
                    javaScriptEnabled
                    style={{ height: 300, width: win.width }}
                    source={{  
                        html: `
                            <!DOCTYPE html>
                            <html>
                            <head></head>
                            <body>
                                <div id="baseDiv">
                                    <iframe width='900' height='800' src='https://www.google.com/calendar/embed?src=sjfirstumc.org_krn865i147229d60162nafqtkg@group.calendar.google.com&amp;amp;ctz=America/New_York'/>
                                </div>
                            </body>
                            </html>
                        `,  
                    }} 
                />
                <View style = {styles.welcome}>
                    <View style = {styles.eventInfo}>
                        <Text style={styles.title}>About Us</Text>
                        <Pressable onPress={() => {Linking.openURL('https://www.sjfirstumc.org/beliefs')}}>
                            <Image style={{width: (win.width*.9), height: (win.width*0.25), marginBottom:10, borderRadius:10,}}source={require('../assets/MissionBeliefs.png')}/>
                        </Pressable>
                        <Pressable onPress={() => {Linking.openURL('https://www.sjfirstumc.org/our-staff-new')}}>
                            <Image style={{width: (win.width*.9), height: (win.width*0.25), marginBottom:10, borderRadius:10,}}source={require('../assets/staff.png')}/>
                        </Pressable>
                        <Pressable onPress={() => {Linking.openURL('https://www.sjfirstumc.org')}}>
                            <Image style={{width: (win.width*.9), height: (win.width*0.25), marginBottom:10, borderRadius:10,}}source={require('../assets/moreInfo.png')}/>
                        </Pressable>
                    </View>
                </View>
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
    welcome: {
        backgroundColor: '#E8E8E8',
        borderRadius:10,
        padding: 10,
        margin:5,
        flexDirection: 'row',
        flex: 1,  
    },
    time: {
        fontWeight: '700',
        fontSize: 16,
    },
    title: {
        fontSize: 26,
        color: '#000000',
        fontWeight:'700',
        alignSelf: 'center',
    },
    text: {
        color: '#6c6c75',
        fontSize: 14,
    },
    location: {
        color: '#000000',
        fontSize: 14,
    },
    formTitle: {
        fontSize:20,
        fontWeight: 700,
        alignSelf: 'center',
    },
    inputTitle: {
        fontSize: 16, 
    },
    calendar:{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        borderRadius: 15,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      },
      inner: {
        padding: 1,
        flex: 1,
        justifyContent: 'space-around',
      }, 
      socialMedia: {
        flexDirection: 'row',
        flex: 1,  
        justifyContent:'space-around',
      },
      soicalIcon : {
        marginVertical: 10,
      },
});