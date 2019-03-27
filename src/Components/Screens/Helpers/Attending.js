import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
    Container,
    Content,
    Button,
} from 'native-base';
import { Card } from 'react-native-elements';
import axios from 'axios';

export default class Attending extends React.Component {
    state = {
        attending: "",
        inProgress: "",
        isLoading: true
    };
    alertItemName = (item) => {
        alert(item.id)
    }
    get = () => {

        this.setState({
            isLoading: true
        });
        axios.get('http://182.184.66.211:8080/~saad/mpset/public/api/v1/en/user/event/attending', {
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIyM2ZmY2Q1NGE2ZjE5NzI1NDlkMzMwZTcwMjIyMGVjNzdkNzZiOTk0NWE4M2Q3YzQ1MzJkNjIwNTkzYWY1NTE5MzhmOTc0OTBiOTEzZDdlIn0.eyJhdWQiOiIyIiwianRpIjoiMjIzZmZjZDU0YTZmMTk3MjU0OWQzMzBlNzAyMjIwZWM3N2Q3NmI5OTQ1YTgzZDdjNDUzMmQ2MjA1OTNhZjU1MTkzOGY5NzQ5MGI5MTNkN2UiLCJpYXQiOjE1NTAwNDY2OTgsIm5iZiI6MTU1MDA0NjY5OCwiZXhwIjoxNTgxNTgyNjk4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qguGL3biz_uBpfuIyumDejMBi_ulikmDV3Za1qzk9dDqRZFCDQ2gAU-bwjSZLGR1pcOsryOmIR5PH1VeEQgzMH63eEEK0CFT_8vpNx9zhBm5Yjdh195KAJRRRjagprPys2-QlKR8NwMUxk6SHXmBnJlXWZnl3jHJyW-hudTaNmaQRLX_U5IFPWDQr6s43sewiouCtggHmjDgmT6WjzPDObUgxRZ4mx1iGk3aox7AddJnyM9c0pamFzjWdypZvOONeNWXhsYMoKUzTB7ukG8AWxXT-pA2cj6cfOMYKgfbRwFBMQ8RdagK5DSTWwEdtmPMUwX3BxlM8uNO9X6MTk-EfBGZbLO61UFgqnORjLE_fojcx003MKBZlFy7jeML6cTGNWoST6tUbCbkc-mHdlzDghZIFC5ba4iLyFPE6ldMxA7Kklp9-7gdQBmE21erXPZel3BVtzlt2hFBT3RMyMd8lGFZKrg_22sr5RYL5hitPTVMtGV43ecPKN_nREDD1trpMUi41ZABM06O1IpNMbDepRDLFZJZBNSodh8nqSeyptNbqdw7QV9ljyhiKe_pmNLig_UB-QpO31Hnkcw2TSgAGjTaxoKPv3j9QMKVGalr9-MppsQFvCsbCvT0CppXT0xDtzurTZHORGWe605GQXzpoA6WG0SYyILyi8rvpfpDHuU'
            }
        })
            .then(res => {
                this.setState({
                    attending: res.data.data,
                    inProgress: res.data.meta.inProgress,
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
    renderInProgress = () => {
        if (this.state.isLoading) {
            return false;
        }
        const { inProgress } = this.state;
        if (inProgress < [0]) {
            return false
        }
        return (
            <View>
                <View style={{ marginLeft: 20, marginTop: 5 }}>
                    <Text>In Progress</Text>
                </View>
                <View>
                    {
                        inProgress.map((item, index) => (
                            <Card key={item.id} style={{ marginBottom: 20 }}>

                                <TouchableOpacity onPress={() => ''}>
                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: 'bold', }}>
                                                {item.name}
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 3 }}>
                                            <View >
                                                <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/location.png')} />
                                            </View>
                                            <View >
                                                <Text style={{ marginLeft: 10, fontSize: 13 }}>
                                                    {item.address}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 3 }}>
                                            <View >
                                                <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/calendar.png')} />
                                            </View>
                                            <View >
                                                <Text style={{ marginLeft: 10, fontSize: 13 }}>
                                                    {item.date_string}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View>
                                            <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/gametype.png')} />
                                        </View>
                                        <View >
                                            <Text style={{ marginLeft: 10, fontSize: 13 }}>
                                                {item.game_type_string}
                                            </Text>
                                        </View>
                                    </View>


                                </TouchableOpacity>
                            </Card>
                        ))
                    }
                </View>
            </View>
        )
    }
    render() {
        if (this.state.isLoading) {
            return false;
        }
        const { attending } = this.state;
        return (

            <Container>
                <Content>
                    <View style={{ marginBottom: 15 }} >

                        <ScrollView>
                            {this.renderInProgress()}
                            <View style={{ marginLeft: 20, marginTop: 5 }}>
                                <Text>Attending</Text>
                            </View>
                            {
                                attending.map((item, index) => (
                                    <Card key={item.id} style={{ marginBottom: 20 }}>

                                        <TouchableOpacity
                                            onPress={() => this.alertItemName(item)}>
                                            <View style={{ flexDirection: 'row' }} >
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ fontWeight: 'bold', }}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                                <View style={{ flex: 1, flexDirection: 'row', marginRight: 3 }}>
                                                    <View >
                                                        <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/location.png')} />
                                                    </View>
                                                    <View >
                                                        <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.address}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                                <View>
                                                    <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/gametype.png')} />
                                                </View>
                                                <View >
                                                    <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.game_type_string}</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                                <View style={{ flex: 1, flexDirection: 'row', marginRight: 3 }}>
                                                    <View >
                                                        <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/calendar.png')} />
                                                    </View>
                                                    <View >
                                                        <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.date_string}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <View>
                                                        <Image style={{ width: 15, height: 15 }} source={require('./../../../../assets/status.png')} />
                                                    </View>
                                                    <View >
                                                        <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.PublicStatus}</Text>
                                                    </View>
                                                </View>
                                                <View >
                                                    <Button rounded style={{ width: 100, height: 30, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ color: '#fff' }}>
                                                            Cancel
                                                        </Text>
                                                    </Button>
                                                </View>
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

