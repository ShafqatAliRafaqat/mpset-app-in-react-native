import React, {Component} from 'react';
import { View } from 'native-base';
import {Image,WebView} from 'react-native';

class TermsAndConditions extends Component {

  static navigationOptions = {
    title: 'Terms and Conditions',
    drawerIcon: ({ tintColor }) => (
      <Image
      source={require('./../../../../assets/terms.jpg')} 
        resizeMode="contain"
        style={{ width: 20, height: 20, tintColor: tintColor }}
      />
    )
  };

  render() {
    return (
        <View style={{flex:1}}>
        <WebView style={{flex:1,marginTop:20}}
        source={{uri: 'https://www.websitepolicies.com/policies/view/BF4arh0A'}}
      />
         </View>
    );
  }
}

export default TermsAndConditions;
