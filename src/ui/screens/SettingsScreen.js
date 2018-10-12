import React, { Component } from "react"
import { Text, View, Button } from "react-native"
import { connect } from "react-redux"
import appActions from "../../store/app.action-creator"
import type TypeI18n from "../../store/i18n/I18NReducer"
import {Navigation} from "react-native-navigation"

type Props = {|
    +i18n: TypeI18n,
    logout: () => void
|}

class SettingsScreen extends React.PureComponent<Props, void> {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  logout =() => {
      const { logout } = this.props
      Navigation.startSingleScreenApp({
          screen: {
              label: "Login",
              screen: "LoginScreen",
              title: "Login",
          },
          navigationBarStyle : {navBarHidden: true },
          passProps: {},
          animationType: 'slide-down'
      });
      logout
  }

  render() {
    const { i18n, logout } = this.props
    return (
      <View style={{ marginTop: 60 }}>
        <Text>{i18n.t("settings.title")}</Text>
          <Button title={i18n.t("settings.logout")} onPress={this.logout}/>
      </View>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
    return {
        logout: () =>
            dispatch(appActions.logout())
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen)
