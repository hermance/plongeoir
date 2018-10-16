import { StyleSheet, Dimensions } from "react-native"
import colors from "./colors"
const { height, width } = Dimensions.get("window")
const DEVICE_WIDTH = width
const DEVICE_HEIGHT = height

const styles = StyleSheet.create({
  app: {
    marginTop: 20,
    alignItems: "center"
  },
  mainPageTitle: {
    textAlign: "center",
    fontSize: 20
  },
  errorText: {
    color: colors.red
  },
  mainContent: {
    marginTop: 20
  },
  inputs: {
    width: DEVICE_WIDTH - 50,
    borderColor: colors.blue,
    borderWidth: 1,
    color: colors.blue,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20
  },
  classicButton: {
    alignItems: "center",
    width: DEVICE_WIDTH - 50,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20
  },
  bookButton: {
    alignItems: "center",
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    marginTop: 10,
    backgroundColor: colors.blue
  },
  classicButtonText: {
    color: colors.white,
    fontSize: 18
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 13
  },
  loader: {
    position: "absolute",
    top: DEVICE_HEIGHT / 2 - 30,
    left: DEVICE_WIDTH / 2 - 30
  },
  picture: {
    width: 88,
    height: 130,
    backgroundColor: colors.blue
  },
  book: {
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: colors.lightGrey,
    borderRadius: 5
  }
})
export default styles
