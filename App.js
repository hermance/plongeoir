import { Navigation } from 'react-native-navigation';
import LoginScreen from "./src/ui/screens/LoginScreen";
import HomeScreen from "./src/ui/screens/HomeScreen";
import SettingsScreen from "./src/ui/screens/SettingsScreen"

registerScreens = () => {
    Navigation.registerComponent('LoginScreen', () => LoginScreen);
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('SettingsScreen', () => SettingsScreen);
}
registerScreens()

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