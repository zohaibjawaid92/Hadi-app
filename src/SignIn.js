import React from "react";
import {
  Button,
  Image,
  Keyboard,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Constants from "expo-constants";
import { RkAvoidKeyboard, RkCard } from "react-native-ui-kitten";
import { FontAwesome } from "react-native-vector-icons";
import { scale, scaleVertical } from "./utilities/scale";
import GradientButton from "react-native-gradient-buttons";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: scaleVertical(24),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: "rgb(245, 245, 245)"
  },
  close: {
    position: "absolute",
    top: Constants.statusBarHeight + 4,
    left: 16,
    zIndex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    display: 'flex',
    left: 20,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: scaleVertical(100),
    resizeMode: "contain",
  },
  all: {
    marginTop: scaleVertical(24),
    flex: 1,
    justifyContent: "center"
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
    borderRadius: 50,
    padding: 10,
    marginVertical: scaleVertical(6),
    fontWeight: "bold",
    backgroundColor: '#ffff',
    color: 'blue'
  },
  OR: {
    marginVertical: scaleVertical(12),
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4A4A"
  },
  socialLogin: {
    height: 50,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  footer: {
    justifyContent: "space-between",
    marginTop: scaleVertical(28),
    paddingHorizontal: 8,
    paddingVertical: scaleVertical(12)
  },
  textRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  appButtonContainerSignup: {
    marginTop: 5,
    backgroundColor: "transparent",
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
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

class SignIn extends React.PureComponent {
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
        <View style={styles.container}>
          <ImageBackground source={require('./images/bg.png')} style={styles.backgroundImage}>
            <View style={styles.all}>
              <View style={styles.header}>{renderIcon()}</View>
              <RkCard rkType="heroImage shadowed" style={styles.content}>
                <TextInput
                  textContentType="username"
                  placeholder="EMAIL OR USERNAME"
                  placeholderTextColor="#707070"
                  style={styles.input}
                />
                <TextInput
                  textContentType="password"
                  secureTextEntry={true}
                  placeholder="PASSWORD"
                  placeholderTextColor="#707070"
                  style={styles.input}
                />
                <TouchableOpacity style={styles.appButtonContainer}>
                  <Text style={styles.appButtonText}>Login</Text>
                </TouchableOpacity>
              </RkCard>
              {/* <View style={{ alignItems: "center" }}>
            <Text style={styles.OR}>– OR --–</Text>
          </View> */}
              {/* <View style={{ paddingHorizontal: 8 }}>
            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              text="SOCIAL LOGIN"
              height={50}
              blueMarine
              impact
              onPressAction={() => this.props.navigation.navigate("SocialAuth")}
            />
          </View> */}
              <View style={styles.textRow}>
                <Text style={{ color: "#fff", fontSize: 15, marginTop: 5 }}>
                  Don&rsquo;t have an account?
            </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")} style={styles.appButtonContainerSignup}>
                  <Text style={styles.appButtonText}>Signup</Text>
                </TouchableOpacity>
                {/* <Button style={{ backgroundColor: "transparent" }}
                  title="Sign up now."
                  onPress={() => this.props.navigation.navigate("SignUp")}
                /> */}
              </View>
            </View>

            {/* <View style={styles.footer}> */}
            {/* <View style={styles.textRow}>
            <Text style={{ color: "#484848", fontSize: 18, marginTop: 8 }}>
              Forgot your password?
            </Text>
            <Button
              title="Reset Password."
              onPress={() => this.props.navigation.navigate("ForgotPassword")}
            />
          </View> */}
            {/* <View style={styles.textRow}>
              <Text style={{ color: "#484848", fontSize: 18, marginTop: 2 }}>
                Don&rsquo;t have an account?
            </Text>
              <Button style={{ backgroundColor: 'transparent' }}
                title="Sign up now."
                onPress={() => this.props.navigation.navigate("SignUp")}
              />
            </View> */}
            {/* </View> */}

            <TouchableOpacity style={styles.close}>
              <FontAwesome name="times" size={36} style={{ color: "#4A4A4A" }} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

export default SignIn;
