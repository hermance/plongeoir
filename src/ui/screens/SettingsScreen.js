import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"

class SettingsScreen extends Component {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  render() {
    const { i18n } = this.props
    return (
      <View style={{ marginTop: 60 }}>
        <Text>{i18n.t("settings.title")}</Text>
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
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen)
