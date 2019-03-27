import React from 'react';
import SplashScreen from "./Components/Screens/SplashScreen";
import HomeScreen from "./Components/Screens/HomeScreen";

import LoginScreen from "./Components/Screens/Auth/LoginScreen";
import LogoutScreen from "./Components/Screens/Auth/LogoutScreen";
import RegisterScreen from "./Components/Screens/Auth/RegisterScreen";
import TermsAndConditions from "./Components/Screens/ContactScreens";
import PrivacyPolicy from "./Components/Screens/ContactScreens/PrivacyPolicy";
import About from "./Components/Screens/ContactScreens/About";
import ContactUs from "./Components/Screens/ContactScreens/ContactUs";
import RateUs from "./Components/Screens/ContactScreens/RateUs";
import NotificationScreen from './Components/Screens/Notifications/NotificationScreen';
import Inbox from './Components/Screens/ChatScreens/Inbox';
import Chat from './Components/Screens/ChatScreens/Chat';
import ChatScreen from './Components/Screens/TempScreens/ChatScreen';

import Friends from './Components/Screens/MyFriends/Friends';
import AddFriend from './Components/Screens/MyFriends/AddFriend';
import MainJoinEvent from './Components/Screens/JoinEventScreens/MianJoinEvent';
import JoinDetailPage from './Components/Screens/JoinEventScreens/JoinDetailPage';
import { Container, Content, Text, Body, Header, View } from 'native-base';

import { Image } from 'react-native';


import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { Icon } from 'expo';
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 150, backgroundColor: '#D3D3D3', }}>
      <Body style={{ alignItems: 'center', justifyContent: 'center' }}>

        <Image style={{ width: 90, height: 90 }} source={require('./../assets/avatar.png')} />

      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)
const headerStyle = {
  headerStyle: {
    backgroundColor: '#a78c52',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const appStackNavigator = createStackNavigator({
  Home: HomeScreen,
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: headerStyle,
    navigationOptions:
    {
      title: 'Lobby',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./../assets/event.png')}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      ),
      headerStyle: { height: 150, backgroundColor: 'transparent', opacity: 1 },
    },
  })

const appLoginStackNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  NotificationScreen: {
    screen: NotificationScreen,
  },

  Inbox: {
    screen: Inbox,
  },
  Chat: {
    screen: Chat,
  },
  Friends: {
    screen: Friends,
  },
 
  RegisterScreen: {
    screen: RegisterScreen,
  },
  AddFriend: {
    screen: AddFriend,
  },
  MainJoinEvent: {
    screen: MainJoinEvent,
    
  },
  JoinDetailPage: {
    screen: JoinDetailPage,
  },

}, {
    defaultNavigationOptions: headerStyle
  })

const appDrawerNavigator = createDrawerNavigator({ HomeScreen: appStackNavigator, TermsAndConditions, PrivacyPolicy, About, ContactUs, RateUs, LogoutScreen }, {
  headerTintColor: '#fff',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#000',
  },
  defaultNavigationOptions:headerStyle,

})

const AppNavigator = createSwitchNavigator(
  {
    HomeScreen,
    HomeScreen: appDrawerNavigator,
    LoginScreen: appLoginStackNavigator,
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}