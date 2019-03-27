import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class MessageBubble extends Component {

    renderSpaceBar = (value) => {
        const { direction } = this.props;
        if (direction !== value) {
            return <View style={{ width: 70 }} />;
        }
    }

    getBubbleStyle = () => {
        const { direction } = this.props;
        const { messageBubble, messageBubbleLeft, messageBubbleRight } = styles;
        if (direction === 'left') {
            return [messageBubble, messageBubbleLeft];
        }
        return [messageBubble, messageBubbleRight];
    };

    getBubbleTextStyle = () => {
        const { direction } = this.props;
        const { messageBubbleTextLeft, messageBubbleTextRight } = styles;

        if (direction === 'left') {
            return messageBubbleTextLeft;
        }
        return messageBubbleTextRight;
    };

    render() {

        const { text } = this.props;

        return (
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                {this.renderSpaceBar('left')}
                <View style={this.getBubbleStyle()}>
                    <Text style={this.getBubbleTextStyle()}>
                        {text}
                    </Text>
                </View>
                {this.renderSpaceBar('right')}
            </View>
        );
    }
}


const styles = StyleSheet.create({

    messageBubble: {
        borderRadius: 5,
        marginTop: 8,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        flex: 1
    },

    messageBubbleLeft: {
        backgroundColor: '#d5d8d4',
    },

    messageBubbleTextLeft: {
        color: 'black'
    },

    messageBubbleRight: {
        backgroundColor: '#66db30'
    },

    messageBubbleTextRight: {
        color: 'white'
    },
})
