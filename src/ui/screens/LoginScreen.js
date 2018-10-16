import React, { Component } from "react"
import { Text, View, ActivityIndicator, TextInput } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"
import userActions from "../../store/users/user.action-creator"
import type TypeI18n from "./../../store/i18n/I18NReducer"
import type UserType from "../../store/types"
import ClassicButton from "../common/ClassicButton"
import styles from "../common/styles"
import colors from "../common/colors"
//todo faire des package.json pour avoir du @store etc

type Props = {|
  +i18n: TypeI18n,
  login: (email: string, password: string) => Promise<*>,
  user: UserType,
  isLoading: boolean
|}

type State = {|
  password: string,
  email: string,
  noResult: boolean
|}

class LoginScreen extends React.PureComponent<Props, State> {
  static navigatorStyle = { navBarHidden: true, tabBarHidden: true }

  state = {
    email: "",
    password: "",
    noResult: false
  }

  connect = () => {
    const { email, password } = this.state
    const { login } = this.props
    if (email && email !== "" && password && password !== "") {
      login(email, password).then(res => {
        if (res) {
          this.launchtabBasedApp()
        } else {
          this.setState({
            noResult: true
          })
        }
      })
    } else {
      this.setState({
        noResult: true
      })
    }
  }

  goToRegister = () => {
    this.props.navigator.push({
      screen: "RegisterScreen"
    })
  }

  launchtabBasedApp = () => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "One",
          screen: "SettingsScreen", // this is a registered name for a screen
          icon: require("./../../../assets/img/ballon.png"),
          selectedIcon: require("./../../../assets/img/ballon.png"),
          title: "Screen One"
        },
        {
          label: "Two",
          screen: "HomeScreen",
          icon: require("./../../../assets/img/sweet.png"),
          selectedIcon: require("./../../../assets/img/sweet.png"),
          title: "Screen Two"
        }
      ]
    })
  }

  render() {
    const { i18n, user, isLoading } = this.props
    const { noResult } = this.state
    if (user !== null && !user) {
      const inputBorderColor = noResult ? colors.red : colors.blue
      return (
        <View style={styles.app}>
          <Text style={styles.mainPageTitle}>{i18n.t("login.title")}</Text>
          <View style={styles.mainContent}>
            {noResult && (
              <Text style={styles.errorText}>{i18n.t("login.error")}</Text>
            )}
            <TextInput
              style={[styles.inputs, { borderColor: inputBorderColor }]}
              placeholder={i18n.t("login.email")}
              value={this.state.email}
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              style={[styles.inputs, { borderColor: inputBorderColor }]}
              placeholder={i18n.t("login.password")}
              value={this.state.password}
              autoCapitalize="none"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={text => this.setState({ password: text })}
            />
            <ClassicButton
              onPress={this.connect}
              name={i18n.t("login.button")}
              color={colors.blue}
            />
            <ClassicButton
              onPress={this.goToRegister}
              name={i18n.t("login.register")}
              color={colors.green}
            />
          </View>
          <ActivityIndicator
            style={styles.loader}
            size="large"
            animating={isLoading}
            color={colors.blue}
          />
        </View>
      )
    } else {
      this.launchtabBasedApp()
      return null
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n,
    isLoading: state.app.isLoading,
    user: state.users.user
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {
    login: (email: string, password: string) =>
      dispatch(userActions.login(email, password))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
