import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"#51E5FF"
                }}>
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
}