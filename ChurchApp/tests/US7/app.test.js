import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, fireEvent } from '@testing-library/react-native';
import OnlineService from '../../screens/OnlineService';
import App from '../../App';

describe('App', () => {
  test('renders OnlineService screen', async () => {
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
    const element = getByText('9am Traditional');
    expect(element).not.toBeNull();
  });

  test('renders App component', async () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('app');
    expect(element).not.toBeNull();
  });
});
