import React, { Component } from "react"
import { Text, View, ActivityIndicator, TextInput } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"
import appActions from "./../../store/app.action-creator"
import type TypeI18n from "./../../store/i18n/I18NReducer"
import ClassicButton from "../common/ClassicButton"
import styles from "../common/styles"
import colors from "../common/colors"
import { validateEmail, validatePassword } from "../../utils/utils"
//todo faire des package.json pour avoir du @store etc

type Props = {|
  +i18n: TypeI18n,
  register: (
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) => Promise<*>,
  isLoading: boolean,
  login: (email: string, password: string) => Promise<*>
|}

type State = {|
  password: string,
  email: string,
  firstname: string,
  lastname: string,
  error: boolean
|}

class RegisterScreen extends React.PureComponent<Props, State> {
  static navigatorStyle = { navBarHidden: true, tabBarHidden: true }

  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    error: false
  }

  registerClick = () => {
    const { email, password, firstname, lastname } = this.state
    const { register, login } = this.props
    if (this.isValidForm()) {
      register(email, password, firstname, lastname)
        .then(() => {
          this.setState({
            error: false
          })
          login(email, password).then(res => {
            if (res) {
              this.launchtabBasedApp()
            } else {
              this.setState({
                error: true
              })
            }
          })
        })
        .catch(err =>
          this.setState({
            error: true
          })
        )
    } else {
      this.setState({
        error: true
      })
    }
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

  isValidForm = () => {
    const { email, password, firstname, lastname } = this.state
    return (
      email &&
      email !== "" &&
      validateEmail(email) &&
      password &&
      password !== "" &&
      validatePassword(password) &&
      firstname &&
      firstname !== "" &&
      lastname &&
      lastname !== ""
    )
  }

  goToConnect = () => {
    this.props.navigator.popToRoot()
  }

  render() {
    const { i18n, user, isLoading } = this.props
    const { error } = this.state
    const inputBorderColor = error ? colors.red : colors.blue
    return (
      <View style={styles.app}>
        <Text style={styles.mainPageTitle}>{i18n.t("register.title")}</Text>
        <View style={styles.mainContent}>
          {error && (
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
          <TextInput
            style={[styles.inputs, { borderColor: inputBorderColor }]}
            placeholder={i18n.t("register.firstname")}
            value={this.state.firstname}
            autoCapitalize="none"
            onChangeText={text => this.setState({ firstname: text })}
          />
          <TextInput
            style={[styles.inputs, { borderColor: inputBorderColor }]}
            placeholder={i18n.t("register.lastname")}
            value={this.state.lastname}
            autoCapitalize="none"
            onChangeText={text => this.setState({ lastname: text })}
          />
          <ClassicButton
            onPress={() => this.registerClick()}
            name={i18n.t("login.register")}
            color={colors.blue}
          />
          <ClassicButton
            onPress={() => this.goToConnect()}
            name={i18n.t("login.button")}
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
  }
}

const mapStateToProps = (state: any) => {
  return {
    i18n: state.i18n,
    isLoading: state.app.isLoading
  }
}
const mapDispatchToProps = () => (dispatch: any) => {
  return {
    register: (
      email: string,
      password: string,
      firstname: string,
      lastname: string
    ) => dispatch(appActions.register(email, password, firstname, lastname)),
    login: (email: string, password: string) =>
      dispatch(appActions.login(email, password))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
