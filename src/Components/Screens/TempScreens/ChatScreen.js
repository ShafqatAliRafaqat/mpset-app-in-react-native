import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import SocketIOClient from 'socket.io-client';

import InputBar from "./InputBar";
import MessageBubble from "./MessageBubble";

export default class ChatScreen extends Component {

    static navigationOptions = {
        title: 'Chat',
    };

    constructor(props) {

        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('http://192.168.15.210:6800');

        // join user

        this.socket.emit("join_room", {
            user: {
                id: 1, name: "User 1",
            },
            room: "1"
        });


        this.socket.on("message", (data) => {

            const { message, friend } = data;
            const { messages } = this.state;

            const m = {
                direction: "left",
                text: message
            };

            this.setState({
                messages: [...messages, m]
            });

            console.log({ message, friend }); // do what ever you want to do with this data

        });

    }


    state = {
        messages: [
            {
                direction: "right",
                text: "Test 1"
            },
            {
                direction: "right",
                text: "Test 2"
            },
            {
                direction: "left",
                text: "Test 3"
            },
            {
                direction: "right",
                text: "Test 4"
            }
        ],
        inputBarText: ''
    };

    componentWillMount() {

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.scrollView.scrollToEnd();
        });

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.scrollView.scrollToEnd()
        });
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    componentDidMount() {
        setTimeout(() => {
            this.scrollView.scrollToEnd();
        });
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.scrollView.scrollToEnd();
        });
    }

    sendMessage = () => {

        const { messages, inputBarText: text } = this.state;

        this.socket.emit("message", {
            message: text,
            room: "2" // sending message to user 2
        });

        const message = {
            direction: "right",
            text
        };

        this.setState({
            messages: [...messages, message],
            inputBarText: ''
        });
    }

    onInputSizeChange = () => {
        setTimeout(() => {
            this.scrollView.scrollToEnd({ animated: false });
        });
    }

    render() {

        const { messages, inputBarText } = this.state;

        const jsx = messages.map((m, i) => <MessageBubble key={i} direction={m.direction} text={m.text} />);

        return (
            <View style={styles.outer}>
                <ScrollView ref={(ref) => { this.scrollView = ref }} style={styles.messages}>
                    {jsx}
                </ScrollView>
                <InputBar onSendPressed={this.sendMessage}
                    onSizeChange={this.onInputSizeChange}
                    onChangeText={inputBarText => this.setState({ inputBarText })}
                    text={inputBarText} />
                <KeyboardSpacer />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    outer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },

    messages: {
        flex: 1
    }
})