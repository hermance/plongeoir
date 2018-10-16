import React, { Component } from "react"
import { Text, View } from "react-native"
import { connect } from "react-redux"
import type TypeI18n from "../../store/i18n/I18NReducer"

type Props = {|
  +i18n: TypeI18n,
  user: any // todo créer les types
|}

class HomeScreen extends React.PureComponent<Props, void> {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }

  constructor(props) {
    super(props)
    //todo call à Books
  }

  render() {
    const { i18n, user } = this.props
    return (
      <View style={{ marginTop: 20 }}>
        <Text>{i18n.t("home.title")}</Text>
        <Text>
          {i18n.t("home.hello")} {user && user.firstname}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n,
    user: state.app.user
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
