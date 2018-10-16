import React, { Component } from "react"
import { Text, View, Button } from "react-native"
import { connect } from "react-redux"
import userActions from "../../store/users/user.action-creator"
import type TypeI18n from "../../store/i18n/I18NReducer"
import { Navigation } from "react-native-navigation"
import type UserType from "../../store/types"
import users from "../../store/users/user.reducer"
import styles from "../common/styles"

type Props = {|
  +i18n: TypeI18n,
  logout: () => void,
  user: UserType
|}

class SettingsScreen extends React.PureComponent<Props, void> {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  logoutAndGoToLogin = () => {
    const { logout } = this.props
    logout()
    Navigation.startSingleScreenApp({
      screen: {
        label: "Login",
        screen: "LoginScreen",
        title: "Login"
      },
      navigationBarStyle: { navBarHidden: true },
      passProps: {},
      animationType: "slide-down"
    })
  }

  render() {
    const { i18n, user } = this.props
    return (
      <View style={styles.app}>
        <Text>{i18n.t("settings.title")}</Text>
        <Button
          title={i18n.t("settings.logout")}
          onPress={this.logoutAndGoToLogin}
        />
        <Text>{user && user.firstname}</Text>
        <Text>{user && user.lastname}</Text>
        <Text>{user && user.email}</Text>
      </View>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n,
    user: state.users.user
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {
    logout: () => dispatch(userActions.logout())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen)
