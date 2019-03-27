import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch, StyleSheet, TextInput } from 'react-native';
import {
    Container,
    Content,
    Button
} from 'native-base';
import { Card, SearchBar } from 'react-native-elements';



class AddFriend extends React.Component {
    static navigationOptions = () => ({
        title: 'Add Friend',
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
                name: 'Poker Event Managament Sys',
            },
            {
                id: 4,
                name: 'Corner Game Point Sus',
            },
            {
                id: 5,
                name: 'Best Festival',
            },

        ],
        search: '',
    }
    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        const styleImage ={
             marginLeft: 10, width: 28, height: 28 
        }
        return (
            <View style={styles.container}>
                <View >
                    <SearchBar
                        placeholder="Search Here..."
                        round={true}
                        containerStyle={{ backgroundColor: 'white' }}
                        inputStyle={{ backgroundColor: '#D3D3D3' }}
                        inputContainerStyle={{ backgroundColor: '#D3D3D3' }}
                        lightTheme={true}
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </View>
                <ScrollView style={styles.main}>
                    <View style={styles.item}>
                        <ScrollView>

                            {

                                this.state.names.map((item, index) => (
                                    <Card key={item.id} style={{ marginBottom: 20 }}>

                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddFriend')}>

                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1, flexDirection: 'row', marginRight: 15 }}>
                                                    <Image style={{ marginBottom: 5, marginRight: 5, width: 50, height: 50 }} source={require('./../../../../assets/defaulticon.png')} />
                                                    <Text style={{ fontSize: 14, margin: 13 }}>Mr Jhon Wick </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                                    <TouchableOpacity>
                                                        <Image style={{ marginLeft: 10, marginTop: 2, width: 25, height: 17 }} source={require('./../../../../assets/view.png')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image style={{         marginLeft: 10, width: 25, height: 22  }} source={require('./../../../../assets/chat.png')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image style={{ marginLeft: 10, width: 22, height: 22 }} source={require('./../../../../assets/cancelred.png')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image style={{ marginLeft: 10, width: 22, height: 22 }} source={require('./../../../../assets/unfriend.png')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image style={{ marginLeft: 10, width: 22, height: 22 }} source={require('./../../../../assets/decline.png')} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Card>
                                ))
                            }
                        </ScrollView>

                    </View>
                </ScrollView>

                <View style={styles.bbar}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: 'bold' }}>Invite a Friend</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image style={styleImage} source={require('./../../../../assets/emaill.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styleImage} source={require('./../../../../assets/sms.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styleImage} source={require('./../../../../assets/whatsapp.png')} />
                        </TouchableOpacity>

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
        height: 70,
        backgroundColor: '#f1f1f1',

    },
});
export default AddFriend;