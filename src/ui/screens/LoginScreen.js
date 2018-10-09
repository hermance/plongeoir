import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class LoginScreen extends Component {

    static navigatorStyle = { navBarHidden: true, tabBarHidden: true }

    onLoginClick=()=>{
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'One',
                    screen: 'SettingsScreen', // this is a registered name for a screen
                    icon: require('./../../../assets/img/ballon.png'),
                    selectedIcon: require('./../../../assets/img/ballon.png'),
                    title: 'Screen One'
                },
                {
                    label: 'Two',
                    screen: 'HomeScreen',
                    icon: require('./../../../assets/img/sweet.png'),
                    selectedIcon: require('./../../../assets/img/sweet.png'),
                    title: 'Screen Two'
                }
            ]
        });
    }

    render() { //todo if login, go directly on tabbase app
        return (
            <View>
                <Text>Hello world!</Text>
                <Button onPress={this.onLoginClick} title={"Click me"}/>
            </View>
        );
    }
}
