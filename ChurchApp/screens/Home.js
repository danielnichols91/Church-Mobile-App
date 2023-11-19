import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import BottomNavBar from '../bottomNavBar';
import { Dimensions } from 'react-native';

export default function Home(route) {
    const imgUrlFull ="https://64.media.tumblr.com/b1838627e1359f49d1a2249b3726ac6c/tumblr_inline_oxpohv4NeY1qd3yot_1280.jpg";
    let win = Dimensions.get('window');
    return ( 
        <SafeAreaView style={{flex: 1,}}>
            <ScrollView>
            <Image style={{width: win.width, height: (win.width*0.75),}}source={{uri: imgUrlFull,}}/>
            <View style = {styles.welcome}>
                    <View style = {styles.eventInfo}>
                        <Text style={styles.title}>Pathway Global Methodist</Text>
                        <Text style={styles.location}>Welcome!</Text>
                    </View>
                </View>
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
});