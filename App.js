import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entry from './src/components/Entry';
import styles from './src/styles/style';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeScreen from './src/screens/HomeScreen';
import  DetailsScreen from './src/screens/DetailsScreen';
class App extends React.Component{
  render() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

    </View>
  );
}
}
const StackScreen = createStackNavigator ({
Home: {
screen: HomeScreen
},

Details: {
screen: DetailsScreen,

navigationOptions: ( {navigation}) => ({title: navigation.state.params.title,
                                          })

}

});
const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({

Home: {
screen: StackScreen,


navigationOptions:

{
title: 'Feed',
tabBarIcon: ( {focused, tintColor} ) => (
    <FontAwesome name= 'windows' color = {tintColor} size = {25} />
),
},
},


Post: {
screen: HomeScreen,
navigationOptions: {

tabBarIcon: ( { focused , tintColor} ) => (
    <FontAwesome name = 'apple' color = {tintColor} size = {25}  />
),

},
},

}));

export default MainScreenNavigator;



