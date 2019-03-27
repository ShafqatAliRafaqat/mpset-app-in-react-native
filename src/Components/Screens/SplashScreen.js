import React, { Component } from 'react';

import { connect } from "react-redux";
import { getItem } from './../../util/functions';
import { View, Text, Image, ImageBackground } from 'react-native';

import { Permissions, Notifications } from 'expo';

import * as types from "../../Store/Actions/type";

class SplashScreen extends Component {


  registerForPushNotifications = async (cb) => {

    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );

    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      cb();
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    // send this token to server

    console.log({ token });
    cb();
  }

  componentDidMount() {

    const { navigation, dispatch } = this.props;

    const { navigate } = navigation;

    this.registerForPushNotifications(() => {

      getItem("mpsetUser", value => {

        const user = (value) ? JSON.parse(value) : null;
        let screen = (user) ? "HomeScreen" : "LoginScreen";

        dispatch({
          type: types.SET_USER,
          payload: user
        });

        setTimeout(() => {
          navigate(screen);
        }, 1000); // 1 sec

      });
    });

  }

  render() {

    const style = {
      width: 240,
      height: 80
    };

    return (
      <View style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}>
        <ImageBackground
          resizeMode={'cover'}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          source={require('./../../../assets/bglogo.png')}>
          <Image style={style} source={require('./../../../assets/logo.png')} />
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SplashScreen);