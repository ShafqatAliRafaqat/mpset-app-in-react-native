import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {
Container,
Content,
} from 'native-base';
import { Linking } from 'expo';
export default class ContactUs extends Component{

    
static navigationOptions = {
    title:"Contact Us", 
    drawerIcon: ({ tintColor }) => (
        <Image
        source={require('./../../../../assets/email.png')} 
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    };
    
    render(){
        return(
       
            // <Container>
            //     <Content>
            //         <View  style={{alignItems:'center',justifyContent:'center'}} >
        
                    Linking.openURL('mailto:mpset@.co?subject=FeedBack&body=Data')
// {/*                
//                     </View>
//                 </Content>
//             </Container> */}
        );
    }
}

