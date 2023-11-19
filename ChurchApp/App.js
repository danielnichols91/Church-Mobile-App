import { View, Text} from 'react-native';
import  OnlineService  from './screens/OnlineService'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Events from './screens/Events';
import Home from './screens/Home';
import EventDetails from './screens/EventDetails';
import {registerNNPushToken, registerIndieID} from 'native-notify';
import React, { useState, useEffect } from 'react';
import * as Device from 'expo-device';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    dark: false,
    colors: {
      primary: '#9AC0CD',
      background: '#778899',
      card: '#CED3D8',
      text: '#000000',
      border: 'rgb(176,176,176)',
      notification: '#8DA399'
    }
  };
  const [deviceId, setDeviceId] = 
    useState(Device.deviceName);

  const getdeviceId = () => {
    var uniqueId = Device.deviceName;
    setDeviceId(uniqueId);
  }
  const yourLoginFunction = () => {
    console.log(deviceId);
    registerNNPushToken(14741, 'NZGd9jHb0hi1p3wBcZYreB');
    registerIndieID(deviceId, 14741, 'NZGd9jHb0hi1p3wBcZYreB');
    
  }
  yourLoginFunction;
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',}}
      testID="app"
    >
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
        initialRouteName='Home'>
        <Stack.Screen
            name = "Home"
            component={Home}
            options = {{
              title: "Home",
              headerStyle: {
                textAlign: 'center',
              },
            }} 
          />
          <Stack.Screen
            name = "OnlineService"
            component={OnlineService}
            options = {{
              title: "Online Service",
              headerStyle: {
                textAlign: 'center',
              }
            }} 
          />
          <Stack.Screen
            name = "Events"
            component={Events}
            options = {{
              title: "Events",
              headerStyle: {
                textAlign: 'center',
              },
            }} 
          />
          <Stack.Screen
            name = "EventDetails"
            component={EventDetails}
            options = {{
              title: "Event Details",
              headerStyle: {
                textAlign: 'center',
              },
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

