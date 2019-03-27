import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import Upcomming from "./Upcoming";
import Attending from "./Attending";
import Archive from "./Archive";
import Hosting from "./Hosting";
import Pending from "./Pending";

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


class TabsNavigation extends Component {

    state = {
        ...this.props.user,
    }
    // static navigationOptions = {
    //     title:"About", 
    //     };

    render() {

        return (

            <Container>
                <Content>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >

                        <Text>
                            This is About
                        </Text>

                    </View>
                </Content>
            </Container>
        );
    }
}
const TabNavigator = createMaterialTopTabNavigator({
    Upcomming:{screen: Upcomming,},
    Attending: Attending,
    Pending: Pending,
    Hosting: Hosting,
    Archive: Archive,
}, {
        tabBarOptions: {

            activeTintColor: 'black',
            inactiveTintColor: 'white',
            fontSize: 20,
            scrollEnabled: true,
            indicatorStyle: {
                backgroundColor: 'black',
            },
            tabStyle: {
                width: 120,
            },
            style: {
                backgroundColor: '#a78c52',
            },
        },
    });

export default createAppContainer(TabNavigator);