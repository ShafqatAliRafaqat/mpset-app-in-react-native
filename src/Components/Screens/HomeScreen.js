import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, ScrollView, TouchableOpacity, Image, } from 'react-native';
import { Icon, Button } from "native-base";

import TabsOfNavigation from './Helpers/TabsNavigation'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import RegisterScreen from './Auth/RegisterScreen';

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Lobby',
    headerLeft:
      <View style={{ paddingLeft: 16 }}>
        <Icon
          name="md-menu"
          size={30}
          style={{ color: 'white' }}
          onPress={() => navigation.openDrawer()}
        />
      </View>,
  });
  state = {
     ...this.props,
};

  render() {
    const imageSize = {
      width: 90,
      height: 90,
      margin: 10,
    };
    const {user} =this.state
    return (
      <View style={{ flex: 1 }}>
        {/* <Text> {(user)?"Welcome":"No User"}</Text> */}
        <ScrollView style={{ flex: 1 }} horizontal={false} showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={{ marginLeft: 15, marginTop: 15, marginBottom: 5, marginRight: 10, width: 40, height: 40 }} source={require('./../../../assets/defaulticon.png')} />
            <Text style={{ fontSize: 17, marginTop: 25 }}>Nick Name</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row' }}>

              <TouchableOpacity >
                <Image style={imageSize} source={require('./../../../assets/neweventn.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MainJoinEvent')}>
                <Image style={imageSize} source={require('./../../../assets/joineventn.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Friends',{...this.props})}>
                <Image style={imageSize} source={require('./../../../assets/myfriendsn.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')}>
                <Image style={imageSize} source={require('./../../../assets/chatn.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationScreen',{...this.props})}>
                <Image style={imageSize} source={require('./../../../assets/notificationsn.png')} />

              </TouchableOpacity>

            </View>
          </ScrollView>

          <View >
            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 20 }}>My Events</Text>
          </View>
          <View style={{ height: 605, marginTop: 10 }}>
            <TabsOfNavigation user={user}/>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.AuthReducer.user
  };
};

export default connect(
  mapStateToProps,
  null,
)(HomeScreen);