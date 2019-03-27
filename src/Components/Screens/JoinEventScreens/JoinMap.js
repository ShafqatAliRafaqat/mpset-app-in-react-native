import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {
Container,
Content,
} from 'native-base';

 class JoinMap extends Component{

    
static navigationOptions = {
    title:"Map",
    };
    
    render(){
        return(
       
            <Container>
                <Content>
                    <View  style={{alignItems:'center',justifyContent:'center'}} >
        
                        <Text>
                            Map
                        </Text>
               
                    </View>
                </Content>
            </Container>
        );
    }
}

export default JoinMap;