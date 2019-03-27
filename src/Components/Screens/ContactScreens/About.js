import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import { Linking } from 'expo';


export default class About extends Component {


    static navigationOptions = {
        title: "About",
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../../../../assets/about.png')}
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: tintColor }}
            />
        )
    };

    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image style={{ width: 230, height: 80 }} source={require('./../../../../assets/logo.png')} />
                </View>
                <View style={{ flex: 2, }}>
                    <Text style={{ margin: 20 }}>
                        MPSET supplies the solution for managing private poker events between friends from the schedule action through managing the buy-ins and supplies statistics to the players. Furthermore, it manages public scheduled events and ability to manage open/public tables based on geo location.
        
                </Text>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <Text>Version no (1.0.0)</Text>
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('http://mpset.co')}>
                        Visit us
</Text>
                </View>
            </View>
        );
    }
}

