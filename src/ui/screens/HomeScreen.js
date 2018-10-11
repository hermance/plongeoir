import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"

class HomeScreen extends Component {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  render() {
    const { i18n } = this.props
    return (
      <View style={{ marginTop: 20 }}>
        <Text>{i18n.t("home.title")}</Text>
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
)(HomeScreen)
