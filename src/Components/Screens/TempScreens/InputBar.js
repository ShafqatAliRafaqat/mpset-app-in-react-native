import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import AutogrowInput from 'react-native-autogrow-input';


export default class InputBar extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.text === '') {
            this.autogrowInput.resetInputText();
        }
    }

    render() {

        const { inputBar, sendButton, textBox } = styles;
        const { onChangeText, onSizeChange, text, onSendPressed } = this.props;

        return (
            <View style={inputBar}>
                <AutogrowInput style={textBox}
                    ref={(ref) => this.autogrowInput = ref}
                    multiline={true}
                    defaultHeight={30}
                    onChangeText={onChangeText}
                    onContentSizeChange={onSizeChange}
                    value={text} />
                <TouchableHighlight style={sendButton} onPress={onSendPressed}>
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 3,
    },

    textBox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 10
    },

    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        marginLeft: 5,
        paddingRight: 15,
        borderRadius: 5,
        backgroundColor: '#66db30'
    },
})
