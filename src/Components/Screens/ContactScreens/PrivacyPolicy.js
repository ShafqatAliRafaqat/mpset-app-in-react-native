import React, {Component} from 'react';
import {View,WebView,Image} from 'react-native';
export default class PrivacyPolicy extends Component{

    
static navigationOptions = {
    title:"Privacy Policy",
    drawerIcon: ({ tintColor }) => (
        <Image
        source={require('./../../../../assets/terms.jpg')} 
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    };
    render(){
        return(
            <View style={{flex:1}}>
            <WebView style={{flex:1,marginTop:20}}
            source={{uri: 'https://www.websitepolicies.com/policies/view/70RGLAJn'}}
          />
             </View>
        );
    }
}

