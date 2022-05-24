import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';


export default class DailyPicScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"#FFFC31"
                }}>

                <Text>DailyPic Screen!</Text>
            </View>
        )
    }
}

