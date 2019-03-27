import React, { Component } from 'react';

import { connect } from "react-redux";

import {
  Container,
  Content,
  Button,
  Item,
  Label,
  Input,
  Form,
  Text,
  Icon,
  View,
  Thumbnail,
} from "native-base";

import { Image, TouchableOpacity,Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import { errorHandler } from './../../../../util/functions';

import * as actions from "../../../../Store/Actions/AuthActions";

import styles from "./style";

class RegisterScreen extends Component {

  static navigationOptions = {
    title: 'Register',
  };

  state = {

    first_name: "",
    last_name: "",
    nick_name: "",
    email: "",
    phone: "",
    gender: "Male", // default
    password: "",
    conPassword: "",
    avatar: null,

    image: null,

    inProgress: false,
  };


  register = () => {


    let { register, dispatch, navigation } = this.props;
    let { navigate } = navigation;

    const { first_name, last_name, nick_name, email, phone, gender, password, conPassword, avatar } = this.state;

    if (password != conPassword) {

      return alert("Password & Confirm Password Does not match");

    }

    const params = { first_name, last_name, nick_name, email, phone, gender, password, avatar, address: "" };

    this.setState({
      inProgress: true
    });

    register(params).then(res => {

      alert("Registered Successfully");

      navigate("LoginScreen");

    }).catch(e => {

      errorHandler(e);

      this.setState({
        inProgress: false
      });

    });

  }

  pickImage = async (driver) => {

    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);

    if (status === 'granted') {

      let src = ImagePicker.launchImageLibraryAsync;

      if (driver == "camera") {
        src = ImagePicker.launchCameraAsync;
      }

      let result = await src({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        quality: 0.5
      });

      if (!result.cancelled) {
        let avatar = result.base64;
        avatar = avatar.replace(/\s/g, avatar);
        this.setState({ image: result.uri, avatar });
      }

    } else {
      return alert("Permission not granted");
    }

  };

  selectImageSrc = () => {

    Alert.alert(
      'Image Source',
      'Select Image From',[
        {text: 'Camera', onPress: () => this.pickImage("camera")},
        {text: 'Gallery', onPress: () => this.pickImage("gallary")},
      ],
      {cancelable: true},
    );

  }

  render() {

    const inputStyle = {
      marginLeft: 30,
      marginRight: 30,
    };

    const { first_name, last_name, nick_name, image,
      email, phone, gender, password, conPassword, inProgress
    } = this.state;

    let src = require('./../../../../../assets/avatar.png');

    if (image) {
      src = { uri: image };
    }

    const maleActive = (gender == "Male");
    const femaleActive = (gender == "Female");

    const {selectedSeg,nonSelectedSeg} = styles;

    return (
      <Container style={styles.container}>

        <Content>
          <Form>

            <View style={{ flex: 1, marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.selectImageSrc}>
                <Thumbnail large style={{ width: 120, height: 120 }} source={src} />
              </TouchableOpacity>
            </View>

            <Item style={inputStyle}>
              <Icon active name='person' />
              <Input placeholder='Nick Name' value={nick_name} onChangeText={nick_name => { this.setState({ nick_name }) }} />
            </Item>

            <Item style={inputStyle}>
              <Icon active name='person' />
              <Input placeholder='First Name' value={first_name} onChangeText={first_name => { this.setState({ first_name }) }} />
            </Item>

            <Item style={inputStyle}>
              <Icon active name='person' />
              <Input placeholder='Last Name' value={last_name} onChangeText={last_name => { this.setState({ last_name }) }} />
            </Item>


            <Item style={inputStyle}>
              <Icon active name='mail' />
              <Input placeholder='Your Email' value={email} onChangeText={email => { this.setState({ email }) }} />
            </Item>

            <Item style={inputStyle}>
              <Icon active name='lock' />
              <Input placeholder='Password' secureTextEntry value={password} onChangeText={password => { this.setState({ password }) }} />
            </Item>

            <Item style={inputStyle}>
              <Icon active name='lock' />
              <Input placeholder='Re-Password' secureTextEntry value={conPassword} onChangeText={conPassword => { this.setState({ conPassword }) }} />
            </Item>
            <Item style={inputStyle}>
              <Icon active name='call' />
              <Input placeholder='Mobile Number' value={phone} onChangeText={phone => { this.setState({ phone }) }} />
            </Item>



            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Label style={{ marginTop: 20, marginLeft: 30 }}>Gender</Label>
              </View>
              
              <View style={{ flex: 2, flexDirection: 'row' ,marginTop:18, alignItems: 'center', justifyContent: 'center' }}>
                

                <Button  style={(maleActive)?selectedSeg.button:nonSelectedSeg.button} first active={maleActive} onPress={() => this.setState({ gender: "Male" })}>
                    <Text style={(maleActive)?selectedSeg.text:nonSelectedSeg.text} >Male</Text>
                  </Button>
                  <Button  style={(femaleActive)?selectedSeg.button:nonSelectedSeg.button} active={femaleActive} onPress={() => this.setState({ gender: "Female" })}>
                    <Text style={(femaleActive)?selectedSeg.text:nonSelectedSeg.text}>Female</Text>
                  </Button>
              </View>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View >
                <Button rounded style={{ marginTop: 30, marginBottom: 30, width: 200, backgroundColor: '#a78c52', alignItems: 'center', justifyContent: 'center' }} onPress={this.register}>
                  <Text>
                    {(inProgress) ? "Please wait..." : "Register"}
                  </Text>
                </Button>
              </View>
            </View>
          </Form>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.AuthReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    register: data => actions.register(data)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
