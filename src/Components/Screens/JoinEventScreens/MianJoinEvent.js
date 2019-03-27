import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
    Container,
    Content,
    Icon
} from 'native-base';
import JoinTabs from './JoinTabs';
class MainJoinEvent extends Component {


    static navigationOptions = {
        title: "Join Event",
         headerRight:
          <View style={{ paddingRight: 16 }}>
            <Icon
              name="add"
              size={30}
              style={{ color: 'white' }}
              onPress={() => ''}
            />
          </View>,
    };

    render() {
        return (

            <Container>
                <Content>
                    <View  >
                        <View style={{ height: 605, marginTop: 10 }}>
                            <JoinTabs />
                        </View>

                    </View>
                </Content>
            </Container>
        );
    }
}

export default MainJoinEvent;