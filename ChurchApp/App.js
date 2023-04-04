import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import  OnlineService  from './screens/OnlineService'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: ' rgb(50, 50, 50)',
    background: 'rgb(190, 178, 161)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(176,176,176)',
    notification: 'rgb(128, 124, 118)',
  },
};

export default function App() {
  return (
    <View style={styles.container} testID="app">
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name = "OnlineService"
            component={OnlineService}
            options = {{
              title: "Online Service",
              headerStyle: {
                textAlign: 'center',
              },
            }} 
          >
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
