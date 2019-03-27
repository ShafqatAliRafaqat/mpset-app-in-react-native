import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {
Container,
Content,
} from 'native-base';

export default class RateUs extends Component{

    
static navigationOptions = {
    title:"Rate Us",
    drawerIcon: ({ tintColor }) => (
        <Image
        source={require('./../../../../assets/rating.png')} 
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      ) 
    };
    
    render(){
        return(
       
            <Container>
                <Content>
                    <View  style={{alignItems:'center',justifyContent:'center'}} >
        
                        <Text>
                            Rate Us
                        </Text>
               
                    </View>
                </Content>
            </Container>
        );
    }
}

