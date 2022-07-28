
import { StyleSheet, Text, View } from 'react-native';
import index from './index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';




  const Stack = createNativeStackNavigator();
const MyStack = () =>
 {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={index}
        options={{ title: 'LogIn' }}
      />
      <Stack.Screen name="Home" component={Home}
      options={{ title: 'Welcome' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
export default MyStack;