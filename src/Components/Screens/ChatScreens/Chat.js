import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch, StyleSheet, TextInput } from 'react-native';
import {
    Container,
    Content,
    Button
} from 'native-base';
import { Card } from 'react-native-elements';



class Chat extends React.Component {
    static navigationOptions = () => ({
        title: 'Chat',
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

        ]
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.main}>
                    <View style={styles.item}>
                        <View style={{ marginBottom: 15 }} >
                            {
                                this.state.names.map((item, index) => (
                                    <View key={item.id} style={{ flexDirection: 'row' }}>
                                        <View style={{ marginTop: 10 }}>
                                            <Image style={{ marginTop: 5, marginLeft: 5, width: 30, height: 30 }} source={require('./../../../../assets/defaulticon.png')} />

                                        </View>
                                        <Card>

                                            <TouchableOpacity >

                                                <View style={{ flex: 1, flexDirection: 'row', marginRight: 15 }}>
                                                    <Text style={{ fontSize: 13, marginRight: 20, width: 230 }}>Last Message From Imran   {item.name}</Text>
                                                </View>

                                                <View style={{ flex: 1, alignContent: 'flex-end', alignItems: 'flex-end', }}>
                                                    <Text style={{ fontSize: 11, }}>3 Days ago</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </Card>
                                    </View>
                                ))
                            }
                        </View>

                    </View>
                </ScrollView>

                <View style={styles.bbar}>
                <View style={{flex:1}}>
                    <TextInput
                        style={{ height: 40, borderColor: 'white', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
               
                <View style={{ alignItems:'center',justifyContent:'center'}}>
                <Button rounded style={{backgroundColor:'#000',width:60,height:32,alignItems:'center',justifyContent:'center'}} onPress={() => ""} >
                  <Text style={{ color: "#fff" }}>Send</Text>
                </Button>
              </View>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    main: {
        flex: 1
    },
    item: {
    },
    bbar: {
        height: 40,
        margin: 10,
        backgroundColor: 'red',
        flexDirection:'row'
    },
});
export default Chat;