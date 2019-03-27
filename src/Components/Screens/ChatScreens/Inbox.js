import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import { Card } from 'react-native-elements';

class Inbox extends React.Component {
    static navigationOptions = () => ({
        title: 'Inbox',
        // headerLeft:
        //   <View style={{ paddingLeft: 16 }}>
        //     <Icon
        //       name="md-menu"
        //       size={30}
        //       style={{ color: 'white' }}
        //       onPress={() => navigation.openDrawer()}
        //     />
        //   </View>,
    });
    state = {
        names: [
            {
                id: 0,
                name: 'Poker Event Managament Sys',
            },
            {
                id: 1,
                name: 'Corner Game Point Sus',
            },
            {
                id: 2,
                name: 'Best Festival',
            },
            {
                id: 3,
                name: 'Mary',
            },
            {
                id: 4,
                name: 'Mary',
            },
            {
                id: 5,
                name: 'Mary',
            },
            {
                id: 6,
                name: 'Shafqat',
            }
        ]
    }

    render() {
        return (

            <Container>
                <Content>

                    <View style={{ marginBottom: 15 }} >
                        <ScrollView>

                            {

                                this.state.names.map((item, index) => (
                                    <Card key={item.id} style={{ marginBottom: 20 }}>

                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>

                                            <View style={{ flex: 1, flexDirection: 'row',marginRight:15 }}>
                                                <Image style={{ marginBottom: 5, marginRight: 5, width: 50, height: 50 }} source={require('./../../../../assets/defaulticon.png')} />
                                                <Text style={{ fontSize: 14,margin: 10 }}>Last Message From Imran   {item.name}</Text>
                                            </View>

                                            <View style={{ flex: 1, alignContent: 'flex-end', alignItems: 'flex-end', }}>
                                                <Text style={{ fontSize: 11, }}>3 Days ago</Text>
                                            </View>



                                        </TouchableOpacity>
                                    </Card>
                                ))
                            }
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Inbox;