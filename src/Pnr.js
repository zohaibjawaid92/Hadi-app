import React from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  Image,

  ImageBackground,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import { RkCard, RkAvoidKeyboard } from "react-native-ui-kitten";
import { FontAwesome } from "react-native-vector-icons";
import { scale, scaleVertical } from "./utilities/scale";
import GradientButton from "react-native-gradient-buttons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // paddingBottom: scaleVertical(24),w
    // paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: "rgb(245, 245, 245)"
  },
  back: {
    position: "absolute",
    top: Constants.statusBarHeight + 8,
    left: 16,
    zIndex: 1
  },
  backgroundImage: {
    // flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    // flexDirection:'row',
    // backgroundColor : '#499c89',
    backgroundColor : '#499c89',
    flexDirection: 'row', textAlign: 'left', fontSize: 15
    // left: 15,
    // marginBottom: 10,
    // alignItems: "center",
    // justifyContent: "center"
  },
  all: {
    flex: 1,
    justifyContent: "space-evenly"
  },
  image: {
    height: scaleVertical(70),
    resizeMode: "contain"
  },
  content: {
    justifyContent: "space-between",
    marginTop : 200,
    paddingHorizontal: 8,
    backgroundColor: "transparent",
    paddingVertical: scaleVertical(12)
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 10,
    padding: 10,
    marginVertical: scaleVertical(6),
    fontWeight: "bold",
    backgroundColor: '#fbfbfba1',
    color: 'blue',
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scaleVertical(28),
    marginBottom: scaleVertical(8),
    paddingHorizontal: 8
  },
  buttonStyle: {
    color: 'white',
    padding: 20,
    backgroundColor: 'yellow'
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffb512",
    marginTop: 25,
    borderRadius: 17,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appSocialContainer: {
    elevation: 8,
    backgroundColor: "#1b45ab",
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  SocialButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  continueheading: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  SwtichStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Pnr extends React.PureComponent {
  render() {
    const renderIcon = () => (
      <Image
        style={styles.image}
        source={require("./images/logo.png")} // eslint-disable-line global-require
      />
    );
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
      >
        <View>
        <View style={styles.header}>
            <Image source={require('./images/vector_smart_object.png')} style={{width: 70, height: 40, marginLeft:35,borderRadius:70}} />
            <Text style={{ alignSelf: "center" , fontWeight : 'bold' , color : 'white' , fontSize : 16 }}>PNR</Text>
        </View>
          
            <RkCard style={styles.content}>
              <TextInput
                textContentType="pnr"
                placeholder="Enter PNR"
                placeholderTextColor="#0c0d0e"
                style={styles.input}
              />
              <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Search</Text>
              </TouchableOpacity>
            </RkCard>
          </View>

          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.goBack()}
          >
            <FontAwesome
              name="chevron-left"
              size={27}
              style={{ color: "#4A4A4A" }}
            />
          </TouchableOpacity>
      </RkAvoidKeyboard>

    );
  }
}

export default Pnr;
