import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import OnlineService from '../../screens/OnlineService';
import { Linking } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import {getByTestId} from '@react-testing-library';
//import {getByTestId} from '@testing-library/react'
import App from '../../App';

describe('OnlineService', () => {
  test('renders two Youtube videos', async () => {
    const Stack = createNativeStackNavigator();
    const { getByText } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnlineService"
            component={OnlineService}
            options={{
              title: 'Online Service',
              headerStyle: {
                textAlign: 'center',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
    // const element = getByText('9am Traditional');
    // expect(element).not.toBeNull();
  //});

  // test('renders App component', async () => {
  //   const { getByTestId } = render(<App />);
  //   const element = getByTestId('app');
  //   expect(element).not.toBeNull();
 
    //await act(async () => {
      //const { getByTestId } = render(<OnlineService />);
    
      // const {getByPlaceholder, getByText, getAllByText} = render(
      //   <OnlineService/>,
      // );

      // //await for getVideos() //function to fetch and set video IDs
      // await new Promise(resolve => setTimeout(resolve, 500));
    
      // const video1 = getByTest('video1');
      // const video2 = getByTest('video2');
    
      // expect(video1.props.videoId).not.toBeNull();
      // expect(video2.props.videoId).not.toBeNull();  
    //});
    //})
  });

  test('opens Youtube channel link when link is pressed', () => {
    //act(() => {
      // const { getByText } = render(<OnlineService />);
      // const link = getByText('Youtube Channel');
      // fireEvent.press(link);
      // expect(Linking.openURL).toHaveBeenCalledWith('https://www.youtube.com/channel/UCHo_NAei6lwlmC9HSFtO-Xw');
    //});
  });
});

