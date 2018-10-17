import React from "react"
import { Text, View } from "react-native"
import type TypeI18n from "../../store/i18n/I18NReducer"
import styles, { DEVICE_HEIGHT, DEVICE_WIDTH } from "../common/styles"
import colors from "../common/colors"
import { connect } from "react-redux"
import { RNCamera } from "react-native-camera"
import BasicButton from "../common/ClassicButton"

type Props = {|
  +i18n: TypeI18n
|}
type State = {|
  detectedTexts: Array<string>
|}

class ScanBookScreen extends React.PureComponent<Props, State> {
  static navigatorStyle = { tabBarHidden: false, navBarHidden: true }
  state = {
    detectedTexts: [""]
  }
  //todo problème de permission sur une première installation?

  /*processImage = async (uri, imageProperties) => {
        const visionResp = await RNTextDetector.detectFromUri(uri);
        if (!(visionResp && visionResp.length > 0)) {
            throw "UNMATCHED";
        }
        this.setState({
            visionResp: this.mapVisionRespToScreen(visionResp, imageProperties)
        });
    };

    mapVisionRespToScreen = (visionResp, imageProperties) => {
        const IMAGE_TO_SCREEN_Y = DEVICE_HEIGHT / imageProperties.height;
        const IMAGE_TO_SCREEN_X = DEVICE_WIDTH / imageProperties.width;

        return visionResp.map(item => {
            return {
                ...item,
                position: {
                    width: item.bounding.width * IMAGE_TO_SCREEN_X,
                    left: item.bounding.left * IMAGE_TO_SCREEN_X,
                    height: item.bounding.height * IMAGE_TO_SCREEN_Y,
                    top: item.bounding.top * IMAGE_TO_SCREEN_Y
                }
            };
        });
    }*/

  onTextRecognized = ({ textBlocks }) =>
    this.setState({ detectedTexts: textBlocks.map(b => b.value) })

  renderDetectedText = () => {
    return (
      <View style={{ marginTop: 200 }}>
        <Text>{this.state.detectedTexts.join("\n")}</Text>
      </View>
    )
  }

  takePicture = async () => {
    const options = { quality: 0.5, base64: true }
    if (this.camera) {
      const photo = await this.camera.takePictureAsync(options)
    }
    /*this.setState({ loading: true }, async () => {
            try {
                this.props.close({ textDetections: [] });
            } catch (err) {
                console.log("error", err);
                alert("An error has occured");
                this.props.close({ textDetections: [] });
            }
        });*/
  }

  render() {
    const { i18n } = this.props
    return (
      <View style={styles.app}>
        <Text>{i18n.t("scan.title")}</Text>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={{ width: DEVICE_WIDTH, height: 200 }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          //onTextRecognized={this.onTextRecognized}
        />
        <BasicButton
          i18n={i18n}
          name={"TODO"}
          color={colors.blue}
          onPress={this.takePicture}
        />
        {this.renderDetectedText()}
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
)(ScanBookScreen)
