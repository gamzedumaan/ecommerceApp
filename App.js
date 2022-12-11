import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Articles from './src/components/Screen/Articles/Articles';
import FirstHome from './src/components/Screen/FirstHome/FirstHome';
import Home from './src/components/Screen/Home/Home';
import Login from './src/components/Screen/Login/Login';
import LoginScreen from './src/components/Screen/LoginScreen/LoginScreen';
import Notification from './src/components/Screen/Notification/Notification';
import Register from './src/components/Screen/Register/Register';
import SeeAll from './src/components/Screen/SeeAll/SeeAll';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FirstName" component={FirstHome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Articles" component={Articles} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="SeeAll" component={SeeAll} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
