import * as React from "react"
import LoginScreen from "./src/ui/screens/LoginScreen"
import HomeScreen from "./src/ui/screens/HomeScreen"
import SettingsScreen from "./src/ui/screens/SettingsScreen"

export type TypeScreen = {|
  name: string,
  component: React.Node,
  tabBarIcon: string,
  activeTabBarIcon: string
|}

//$FlowFixMe
const screens: TypeScreen[] = [
  {
    name: "LoginScreen",
    component: LoginScreen,
    tabBarIcon: "feed",
    activeTabBarIcon: "feed"
  },
  {
    name: "HomeScreen",
    component: HomeScreen,
    tabBarIcon: "map",
    activeTabBarIcon: "map"
  },
  {
    name: "SettingsScreen",
    component: SettingsScreen,
    tabBarIcon: "infos",
    activeTabBarIcon: "infos"
  }
]

export { screens }
