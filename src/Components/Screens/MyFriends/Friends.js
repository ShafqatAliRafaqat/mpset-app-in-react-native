import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import {
    Container,
    Content,
    Icon
} from 'native-base';
import { Card, SearchBar } from 'react-native-elements';
import axios from "axios";
import DeleteModel from "./../../Common/Model/DeleteModel";

class Friends extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'My Friends',
        headerRight:
            <View style={{ paddingRight: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('AddFriend')}>
                    <Icon
                        name="add"
                        size={30}
                        style={{ color: 'white' }}
                    />
                </TouchableOpacity>
            </View>,
    });
    state = {
        ...this.props,
        isLoading: true,
        search: '',

    }
    updateSearch = search => {
        this.setState({ search });
    };
    get = () => {

        this.setState({
            isLoading: true
        });
        // let { user} = this.state.navigation.state.params;
        // console.log("user =>",user.auth.access_token);
        axios.get('http://182.184.66.211:8080/~saad/mpset/public/api/v1/en/user/friends', {
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIyM2ZmY2Q1NGE2ZjE5NzI1NDlkMzMwZTcwMjIyMGVjNzdkNzZiOTk0NWE4M2Q3YzQ1MzJkNjIwNTkzYWY1NTE5MzhmOTc0OTBiOTEzZDdlIn0.eyJhdWQiOiIyIiwianRpIjoiMjIzZmZjZDU0YTZmMTk3MjU0OWQzMzBlNzAyMjIwZWM3N2Q3NmI5OTQ1YTgzZDdjNDUzMmQ2MjA1OTNhZjU1MTkzOGY5NzQ5MGI5MTNkN2UiLCJpYXQiOjE1NTAwNDY2OTgsIm5iZiI6MTU1MDA0NjY5OCwiZXhwIjoxNTgxNTgyNjk4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qguGL3biz_uBpfuIyumDejMBi_ulikmDV3Za1qzk9dDqRZFCDQ2gAU-bwjSZLGR1pcOsryOmIR5PH1VeEQgzMH63eEEK0CFT_8vpNx9zhBm5Yjdh195KAJRRRjagprPys2-QlKR8NwMUxk6SHXmBnJlXWZnl3jHJyW-hudTaNmaQRLX_U5IFPWDQr6s43sewiouCtggHmjDgmT6WjzPDObUgxRZ4mx1iGk3aox7AddJnyM9c0pamFzjWdypZvOONeNWXhsYMoKUzTB7ukG8AWxXT-pA2cj6cfOMYKgfbRwFBMQ8RdagK5DSTWwEdtmPMUwX3BxlM8uNO9X6MTk-EfBGZbLO61UFgqnORjLE_fojcx003MKBZlFy7jeML6cTGNWoST6tUbCbkc-mHdlzDghZIFC5ba4iLyFPE6ldMxA7Kklp9-7gdQBmE21erXPZel3BVtzlt2hFBT3RMyMd8lGFZKrg_22sr5RYL5hitPTVMtGV43ecPKN_nREDD1trpMUi41ZABM06O1IpNMbDepRDLFZJZBNSodh8nqSeyptNbqdw7QV9ljyhiKe_pmNLig_UB-QpO31Hnkcw2TSgAGjTaxoKPv3j9QMKVGalr9-MppsQFvCsbCvT0CppXT0xDtzurTZHORGWe605GQXzpoA6WG0SYyILyi8rvpfpDHuU'
                // 'Authorization':'Bearer '+ user.auth.access_token
            }
        })
            .then(res => {
                this.setState({
                    friends: res.data.data,
                });
            }).catch(e => {
                errorHandler(e);
            }).finally(() => {
                this.setState({
                    isLoading: false
                });
            });;
    };

    componentDidMount() {
        this.get();
    }
    render() {
        if (this.state.isLoading) {
            return false;
        }
        const { friends, search } = this.state;

        console.log("friends =>", friends);

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
                                friends.map((item, index) => (
                                    <Card key={item.id} style={{ marginBottom: 20 }}>

                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddFriend')}>

                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1, flexDirection: 'row', marginRight: 15 }}>
                                                    <Image style={{ marginBottom: 5, marginRight: 5, borderRadius: 64, width: 50, height: 50 }} source={{ uri: item.avatar }} />
                                                    <Text style={{ fontSize: 14, margin: 13 }}>{item.nick_name} </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                                    <TouchableOpacity>
                                                        <Image style={{ marginLeft: 10, marginTop: 2, width: 25, height: 17 }} source={require('./../../../../assets/view.png')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image style={{ marginLeft: 10, width: 25, height: 22 }} source={require('./../../../../assets/chat.png')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <DeleteModel />
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
export default Friends;