import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../src/home';
import {Profile} from '../src/profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Profile" options={{title: 'Perfil'}} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

