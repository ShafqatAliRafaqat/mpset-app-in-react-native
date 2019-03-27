import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
    Container,
    Content,
} from 'native-base';
import { Card, SearchBar } from 'react-native-elements';

class JoinList extends Component {


    static navigationOptions = {
        title: "JoinList",

    };
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
        ],

        search: '',

    }
    updateSearch = search => {
        this.setState({ search });
    };
    render() {



        const { search } = this.state;
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
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <Card key={item.id} style={{ marginBottom: 20 }}>
  <TouchableOpacity onPress={() => this.props.navigation.navigate('JoinDetailPage')}>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: 'bold', }}>
                                                {item.name}
                                                {/* {this.state.data!==''?this.state.data.data.data[0].name:'hello'} */}
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 3 }}>
                                            <Text>Host Name</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, alignContent: 'flex-end', alignItems: 'flex-end', marginRight: 3, }}>
                                        <Text style={{ fontWeight: 'bold', }}>Name</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 3 }}>
                                            <View >
                                                <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/location.png')} />
                                            </View>
                                            <View >
                                                <Text style={{ marginLeft: 10, fontSize: 13 }}>Divine Center Lahore</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignContent: 'flex-end', alignItems: 'flex-end', }}>

                                            <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: 'bold', }}>4.0</Text>

                                            <Image style={{ width: 15, height: 15, marginLeft: 5 }} source={require('./../../../../assets/star.png')} />

                                        </View>
                                    </View>


                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View>
                                            <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/calendar.png')} />
                                        </View>
                                        <View >
                                            <Text style={{ marginLeft: 10, fontSize: 13 }}>Feb,15 2019, 12:20 Am</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View>
                                            <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/gametype.png')} />
                                        </View>
                                        <View >
                                            <Text style={{ marginLeft: 10, fontSize: 13 }}>Tournament</Text>
                                        </View>
                                    </View>

                                </TouchableOpacity>

                            </Card>
                        ))
                    }
                </ScrollView>


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
export default JoinList;