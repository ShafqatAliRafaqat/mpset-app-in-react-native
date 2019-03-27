import React from 'react';

import { connect } from "react-redux";

import { StyleSheet, Text, View, Image } from 'react-native';

import * as types from "../../../Store/Actions/type";

class LogoutScreen extends React.Component {
  static navigationOptions = {
    title: "Logout",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../../assets/logout.png')}
        resizeMode="contain"
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };
  componentWillMount() {

    const { navigation, dispatch } = this.props;

    const { navigate } = navigation;

    dispatch({
      type: types.LOGOUT
    });

    setTimeout(() => {
      navigate("LoginScreen");
    }, 1000); // 1 sec

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Please Wait...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutScreen);