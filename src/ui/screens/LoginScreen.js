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

  //todo soucis de persistence du loader à régler !

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
    const { i18n } = this.props
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: i18n.t("settings.title"),
          screen: "SettingsScreen", // this is a registered name for a screen
          icon: require("./../../../assets/img/ballon.png"),
          selectedIcon: require("./../../../assets/img/ballon.png"),
          title: i18n.t("settings.title")
        },
        {
          label: i18n.t("home.title"),
          screen: "HomeScreen",
          icon: require("./../../../assets/img/sweet.png"),
          selectedIcon: require("./../../../assets/img/sweet.png"),
          title: i18n.t("home.title")
        },
        {
          label: i18n.t("scan.title"),
          screen: "ScanBookScreen",
          icon: require("./../../../assets/img/sweet.png"),
          selectedIcon: require("./../../../assets/img/sweet.png"),
          title: i18n.t("scan.title")
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
              onSubmitEditing={() => {
                this.secondTextInput && this.secondTextInput.focus()
              }}
              autoCapitalize="none"
              textContentType="emailAddress"
              returnKeyType="next"
              keyboardType="email-address"
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              style={[styles.inputs, { borderColor: inputBorderColor }]}
              placeholder={i18n.t("login.password")}
              value={this.state.password}
              autoCapitalize="none"
              ref={input => {
                this.secondTextInput = input
              }}
              textContentType="password"
              returnKeyType="done"
              secureTextEntry={true}
              onSubmitEditing={() => {
                this.connect()
              }}
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
