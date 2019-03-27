import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Container,
  Content,
  Button,
  Item,
  Input,
  Form,
  Text,
  Icon,
  View,

} from "native-base";
import { Facebook, Google } from "expo";

import { Image } from "react-native";

import * as types from "../../../Store/Actions/type";
import * as actions from "../../../Store/Actions/AuthActions";

import { errorHandler } from './../../../util/functions';



import styles from "./../styles";

class LoginScreen extends Component {


  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",

    inProgress: false,
  };

  login = () => {

    let { login, dispatch, navigation } = this.props;
    let { navigate } = navigation;

    this.setState({
      inProgress: true
    });

    const { email, password } = this.state;

    const params = { email, password };

    login(params).then(res => {

      dispatch({
        type: types.LOGIN,
        payload: res.data
      });

      navigate("HomeScreen");

    }).catch(e => {

      errorHandler(e);

      this.setState({
        inProgress: false
      });

    });

  };

  // https://docs.expo.io/versions/latest/sdk/facebook/
  // not testing, need to configure
  facebookLogin = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('1995323644093662', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  // https://docs.expo.io/versions/latest/sdk/google/
  // not testing, need to configure

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {

        const token = result.accessToken;

        let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        return Alert.alert('User Json', `${await userInfoResponse.json()} !`);

      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    const inputStyle = {
      marginLeft: 30,
      marginRight: 30,
    };
    const centerStyle = {
      flex:1, 
      justifyContent: 'center'
    };

    const { email, password, inProgress } = this.state;
    let { navigation } = this.props;
    let { navigate } = navigation;
    return (
      <Container style={styles.container}>
        <Content >

          <View style={{ flex: 1, justifyContent: 'center',marginTop:120 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image style={{ width: 240, height: 80 }} source={require('./../../../../assets/logo.png')} />
            </View>
            <Form style={{ marginTop: 30 }}>
              <Item style={inputStyle}>
                <Icon active name='mail' />
                <Input placeholder='Email' value={email} onChangeText={email => { this.setState({ email }) }} />
              </Item>
              <Item style={inputStyle}>
                <Icon active name='lock' />
                <Input placeholder='Password' secureTextEntry value={password} onChangeText={password => { this.setState({ password }) }} />
              </Item>
            </Form>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flex: 1 }}>
                <Button rounded style={{ marginTop: 30, width: 200, backgroundColor: '#a78c52', alignItems: 'center', justifyContent: 'center' }} onPress={this.login}>
                  <Text>
                    {(inProgress) ? "Please wait..." : "Sign in"}
                  </Text>
                </Button>
              </View>
              <View style={{ flex: 1 }}>
                <Button transparent style={{ marginTop: 10 }} onPress={() => navigate('RegisterScreen')} >
                  <Text style={{ color: "#a78c52" }}>Register Now</Text>
                </Button>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Button rounded info style={{ backgroundColor: '#3b5998', width: 50, height: 50 }} onPress={this.facebookLogin}>
                  <Icon name="logo-facebook" />
                </Button>
                <Button rounded info style={{ marginLeft: 10, backgroundColor: '#db4a39', width: 50, height: 50 }} onPress={this.signInWithGoogleAsync}>
                  <Icon name="logo-google" />
                </Button>
              </View>
            </View>
          </View>    

        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    login: data => actions.login(data)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
