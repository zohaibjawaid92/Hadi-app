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
    // paddingBottom: scaleVertical(24),
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
    display: 'flex',
    left: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
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
    color: 'blue'
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
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#2448a9",
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
    textTransform: "uppercase",
    position: 'absolute', // child
    top : 15
  },
  continueheading: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  icons:{
    height: 100, width: '40%', resizeMode : 'contain'
  }
});

class SignUp extends React.PureComponent {
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
        {/* <View style={styles.container}> */}
        <ImageBackground source={require('./images/bg.png')} style={styles.backgroundImage}>
          <View style={styles.all}>
            <View style={styles.header}>{renderIcon()}</View>
            <RkCard style={styles.content}>
              <TextInput
                textContentType="name"
                placeholder="NAME"
                placeholderTextColor="#2448a9"
                style={styles.input}
              />
              <TextInput
                textContentType="emailAddress"
                placeholder="EMAIL"
                placeholderTextColor="#2448a9"
                style={styles.input}
              />
              <TextInput
                textContentType="phone"
                placeholder="Contact Number"
                placeholderTextColor="#2448a9"
                style={styles.input}
              />
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                placeholder="PASSWORD"
                placeholderTextColor="#2448a9"
                style={styles.input}
              />
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                placeholder="CONFIRM PASSWORD"
                placeholderTextColor="#2448a9"
                style={styles.input}
              />
              <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>SignUp</Text>
              </TouchableOpacity>
              <View style={{ marginTop: 15, alignSelf: 'center' }}>
                <Text style={styles.continueheading}>Continue with</Text>
              </View>
              {/* <View style={{ flex: 1, flexDirection: 'column', marginTop: 5 }}> */}
              <View>
                <TouchableOpacity style={styles.appSocialContainer}>
                <Image style={{height : 20 ,resizeMode : 'contain' ,position : 'relative' , left:13 ,marginTop : 8,  right:0}} source={require('./images/fb.png')}></Image>
                  <Text style={styles.SocialButtonText}>
                  Facebook</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.appSocialContainer}>
                <Image style={{height : 20 ,resizeMode : 'contain' ,position : 'relative' , left:0 ,marginTop : 8,  right:50}} source={require('./images/google_icon.png')}></Image>
                  <Text style={styles.SocialButtonText}>
                  Google</Text>
                </TouchableOpacity>
              </View>
              {/* </View> */}
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
        </ImageBackground>
        {/* </View> */}
      </RkAvoidKeyboard>

    );
  }
}

export default SignUp;
