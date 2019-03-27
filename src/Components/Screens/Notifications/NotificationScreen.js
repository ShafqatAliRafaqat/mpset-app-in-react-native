import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { Container, Content } from 'native-base';
import { errorHandler } from './../../../util/functions';
import { connect } from "react-redux";

import { Card } from 'react-native-elements';
import * as actionCreater from "../../../Store/Actions/NotificationAction";
import * as actions from "../../../Store/Actions/type";
import axios from "axios";

class NotificationScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Notifications',
  });

  state = {
    ...this.props,
    notifications: "",
    notification_status: "",
    title: "",
    body: "",
    created_at: "",
    isLoading: true,
    infoSwitch: false // set the default state of switch to false
  };
  get = () => {

    this.setState({
      isLoading: true
    });
    // let { user} = this.state.navigation.state.params;

    // console.log("user =>",user.auth.access_token);
    axios.get('http://182.184.66.211:8080/~saad/mpset/public/api/v1/en/user/notifications', {
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIyM2ZmY2Q1NGE2ZjE5NzI1NDlkMzMwZTcwMjIyMGVjNzdkNzZiOTk0NWE4M2Q3YzQ1MzJkNjIwNTkzYWY1NTE5MzhmOTc0OTBiOTEzZDdlIn0.eyJhdWQiOiIyIiwianRpIjoiMjIzZmZjZDU0YTZmMTk3MjU0OWQzMzBlNzAyMjIwZWM3N2Q3NmI5OTQ1YTgzZDdjNDUzMmQ2MjA1OTNhZjU1MTkzOGY5NzQ5MGI5MTNkN2UiLCJpYXQiOjE1NTAwNDY2OTgsIm5iZiI6MTU1MDA0NjY5OCwiZXhwIjoxNTgxNTgyNjk4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qguGL3biz_uBpfuIyumDejMBi_ulikmDV3Za1qzk9dDqRZFCDQ2gAU-bwjSZLGR1pcOsryOmIR5PH1VeEQgzMH63eEEK0CFT_8vpNx9zhBm5Yjdh195KAJRRRjagprPys2-QlKR8NwMUxk6SHXmBnJlXWZnl3jHJyW-hudTaNmaQRLX_U5IFPWDQr6s43sewiouCtggHmjDgmT6WjzPDObUgxRZ4mx1iGk3aox7AddJnyM9c0pamFzjWdypZvOONeNWXhsYMoKUzTB7ukG8AWxXT-pA2cj6cfOMYKgfbRwFBMQ8RdagK5DSTWwEdtmPMUwX3BxlM8uNO9X6MTk-EfBGZbLO61UFgqnORjLE_fojcx003MKBZlFy7jeML6cTGNWoST6tUbCbkc-mHdlzDghZIFC5ba4iLyFPE6ldMxA7Kklp9-7gdQBmE21erXPZel3BVtzlt2hFBT3RMyMd8lGFZKrg_22sr5RYL5hitPTVMtGV43ecPKN_nREDD1trpMUi41ZABM06O1IpNMbDepRDLFZJZBNSodh8nqSeyptNbqdw7QV9ljyhiKe_pmNLig_UB-QpO31Hnkcw2TSgAGjTaxoKPv3j9QMKVGalr9-MppsQFvCsbCvT0CppXT0xDtzurTZHORGWe605GQXzpoA6WG0SYyILyi8rvpfpDHuU'
        // 'Authorization':'Bearer '+ user.auth.access_token
      }
    })
      .then(res => {
        this.setState({
          notifications: res.data.data,
          user: res.data.meta.user,
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
  onSwitchValueChange = (value) => {
    this.setState({
      notification_status: value
    });
  }
  render() {
    if (this.state.isLoading) {
      return false;
    }
    let no = 0;

    const { notifications, user } = this.state;

    const { notification_status } = user.user_detail;

    if (notification_status == "1") {
      infoSwitch = true
    }
    if (notification_status == "0") {
      infoSwitch = false
    }
    return (
      <Container>
        <Content>
          <View style={{ marginBottom: 15 }} >
            <ScrollView>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ flex: 1, }}>
                  <Text style={{ fontSize: 18, fontWeight: '400' }}>Turn Notifications</Text>
                </View>
                <View style={{ flex: 1, }}>
                  <Switch
                    value={infoSwitch} // set the value into the tracked state
                    onValueChange={this.onSwitchValueChange} // give the function that would handle value change for this component
                    // disabled={false}
                    backgroundActive={'#c5872d'}
                    backgroundInactive={'#c5872d'}
                    circleActiveColor={'#c5872d'}
                    circleInactiveColor={'#c5872d'}
                    onTintColor={'#e0f6ff'}
                    thumbTintColor={'#c5872d'}
                    tintColor={'#c5872d'}
                  >
                  </Switch>
                </View>

              </View>
              {
                notifications.map((item, index) => (
                  <Card key={no++} style={{ marginBottom: 20 }}>

                    <TouchableOpacity>
                      <View style={{ flexDirection: 'row' }} >
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: 'bold', }}>
                            {item.title}
                          </Text>
                        </View>

                      </View>
                      <View style={{ flex: 1, marginTop: 5 }}>

                        <View >
                          <Text style={{ marginLeft: 5, fontSize: 13, marginRight: 5 }}>{item.body}</Text>
                        </View>
                      </View>

                      <View style={{ flex: 1, alignContent: 'flex-end', alignItems: 'flex-end', }}>
                        <Text style={{ fontSize: 11, }}>{item.created_at}</Text>
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
const mapDispatchToProps = () => {
  return {
    get: (token, search) => actionCreater.getNotification(token, search),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NotificationScreen);