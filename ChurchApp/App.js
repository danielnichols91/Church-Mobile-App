import { StyleSheet, View } from 'react-native';
import  OnlineService  from './screens/OnlineService'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavBar from './bottomNavBar';
import Events from './screens/Events';


function App() {
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
  return (
    <View style={styles.container} testID="app">
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
        initialRouteName='Events'>
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
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
