import { Navigation } from 'react-native-navigation';
import LoginScreen from "./src/ui/screens/LoginScreen";
import HomeScreen from "./src/ui/screens/HomeScreen";
import SettingsScreen from "./src/ui/screens/SettingsScreen"
import { Provider, connect } from "react-redux"

registerScreens = (store: any) => {
    Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider);
    Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('SettingsScreen', () => SettingsScreen, store, Provider);
}
export default (store: any) => {
    registerScreens(store)

    Navigation.startSingleScreenApp({
        screen: {
            label: "Login",
            screen: "LoginScreen",
            icon: require('./assets/img/ballon.png'),
            title: "Login",
        },
        navigationBarStyle : {navBarHidden: true },
        passProps: {},
        animationType: 'slide-down'
    });
}
