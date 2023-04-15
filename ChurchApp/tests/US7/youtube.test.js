import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, fireEvent } from '@testing-library/react-native';
import OnlineService from '../../screens/OnlineService';
import {waitFor} from '@testing-library/react-native';

describe('youtube videos', () => {
  test('test youtube videos', async () => {
    const Stack = createNativeStackNavigator();
    const { queryByTestId  } = render(
        <OnlineService/>
    );
    const video1 = await waitFor(() => queryByTestId ('video1'));
    const video2 = await waitFor(() =>queryByTestId ('video2'));
    console.log(video1);
    expect(video1).not.toBeNull();
    expect(video2).not.toBeNull();
    expect(video1).toBeDefined();
    expect(video1.props.videoId).not.toBeNull();
    expect(video2.props.videoId).not.toBeNull(); 
  });
});
