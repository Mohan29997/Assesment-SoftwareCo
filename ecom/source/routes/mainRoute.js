import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CartMainPage} from '../screen/cartScreen';
import {ProductScreen} from '../screen/productScreen/productScreen';

export const MainScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={ProductScreen} />
        <Stack.Screen name="Cart" component={CartMainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
