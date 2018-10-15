import React, { Component } from "react"
import { Text, View, ActivityIndicator, TextInput } from "react-native"
import { Navigation } from "react-native-navigation"
import { connect } from "react-redux"
import appActions from "./../../store/app.action-creator"
import type TypeI18n from "./../../store/i18n/I18NReducer"
import ClassicButton from "../common/ClassicButton"
import styles from "../common/styles"
import colors from "../common/colors"
//todo faire des package.json pour avoir du @store etc

type Props = {|
  +i18n: TypeI18n,
  register: (
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) => Promise<*>,
  isLoading: boolean
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
    const { register } = this.props
    if (this.isValidForm) {
      register(email, password, firstname, lastname).then(() => {
        this.setState({
          error: false
        })
        this.goToConnect()
      }).catch(err => this.setState({
          error: true
      }))
    } else {
      this.setState({
        error: true
      })
    }
  }

  isValidForm = () => {
    const { email, password, firstname, lastname } = this.state
    if (
      email &&
      email !== "" &&
      password &&
      password !== "" &&
      firstname &&
      firstname !== "" &&
      lastname &&
      lastname !== ""
    ) {
      //todo regex validation email et password
      return true
    }
    return false
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
            onPress={() => this.goToConnect}
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
    ) => dispatch(appActions.register(email, password, firstname, lastname))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
