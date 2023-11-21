import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, Pressable} from 'react-native';
import BottomNavBar from '../bottomNavBar';
import { WebView } from 'react-native-webview'; 
import { useNavigation } from '@react-navigation/native';

export default function Home(route) {
    const imgUrlFull ="https://64.media.tumblr.com/b1838627e1359f49d1a2249b3726ac6c/tumblr_inline_oxpohv4NeY1qd3yot_1280.jpg";
    let win = Dimensions.get('window');
    const upcomingEventsUrl ="https://www.hubbardumc.org/wp-content/uploads/2022/04/UpcomingEvents.jpg";
    const navigation = useNavigation();
    return ( 
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView>
                <Image style={{width: win.width, height: (win.width*0.75),}}source={{uri: imgUrlFull,}}/>
                <View style = {styles.welcome}>
                        <View style = {styles.eventInfo}>
                            <Text style={styles.title}>Pathway Global Methodist</Text>
                            <Text style={styles.location}>Welcome!</Text>
                            <Pressable onPress={() => {navigation.navigate('Events');}}>
                                <Image style={{width: (win.width*.9), height: (win.width*0.25),}}source={{uri: upcomingEventsUrl,}}/>
                                <Text style={styles.location}>Click to check out our upcoming events!</Text>
                            </Pressable>
                        </View>
                </View>
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
        fontSize: 20,
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
});