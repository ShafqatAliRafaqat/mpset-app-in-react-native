import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {
Container,
Content,
} from 'native-base';
import JoinList from "./JoinList" ;
import JoinMap from "./JoinMap" ;


import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';



const JoinTabs = createMaterialTopTabNavigator({
    JoinList: {
        screen: JoinList,
        navigationOptions: {
        }
    },
    JoinMap: JoinMap,
  },{
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        fontSize:20,
        scrollEnabled:false,
        indicatorStyle:{
            backgroundColor:'black',
        },
       
        style: {
            backgroundColor: '#fff',
          },
    
          
      },
  });

  export default createAppContainer(JoinTabs);