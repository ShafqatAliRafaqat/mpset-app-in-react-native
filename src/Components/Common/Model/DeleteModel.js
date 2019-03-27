import React, { Component } from 'react';
import { TouchableOpacity, Text, TouchableHighlight, View, Image, Alert } from 'react-native';

import Modal from "react-native-modal";

class DeleteModel extends Component {
    state = {
        isModalVisible: false,
    };
    alert = (msg) => {
        console.log(msg)
      }
      
    onDeleteBTN = () => {
        this.alert(' OnDelete')
      }
    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => Alert.alert(
                    'Alert Title',
                    'alertMessage',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                        { text: 'OK', onPress: this.onDeleteBTN },
                    ],
                    { cancelable: false }
                )}>
                    <Image style={{ marginLeft: 10, width: 22, height: 22 }} source={require('./../../../../assets/cancelred.png')} />
                </TouchableHighlight>
            </View>
        );
    }
}
export default DeleteModel;