import { Text, View, StatusBar } from 'react-native'
import React from 'react'
import SearchScreen from './Screens/SearchScreen'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './Screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#08F7F0" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => (<Entypo name='home' size={25} color="black" />),
            tabBarShowLabel: false
          }} 
            initialParams={{city:"lahore"}}
          />
          <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarIcon: () => (<AntDesign name='search1' size={25} color="black" />),
            tabBarShowLabel: false
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

