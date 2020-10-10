import React , {useState} from "react";
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
import DateTimePicker from '@react-native-community/datetimepicker';

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
    paddingHorizontal: 8,
    marginTop : 100,
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
  switchInput : {
    borderWidth: 0.5,
    // borderColor: "#D3D3D3",
    borderRadius: 10,
    padding: 10,
    marginVertical: scaleVertical(6),
    fontWeight: "bold",
    textAlign : 'left',
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

const CabBooking  = (props) => {
  // render() {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };


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
          {/* <View style={styles.header}>
            <View>
                <Image style={{height:40,resizeMode : 'contain',display:'flex',left:-10}} source={require('./images/vector_smart_object.png')}></Image>
            </View>
          </View> */}
        <View style={styles.header}>
            <Image source={require('./images/vector_smart_object.png')} style={{width: 70, height: 40, marginLeft:35,borderRadius:70}} />
            <Text style={{ alignSelf: "center" , fontWeight : 'bold' , color : 'white' , fontSize : 16 }}>CAB BOOKING</Text>
        </View>

  

            <RkCard style={styles.content}>
              <TouchableOpacity onPress={showDatepicker} style={styles.input}>
                <Text style={{padding:5,fontWeight:'bold'}}>Date</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row', textAlign: 'left' , padding : 10}}>
              <Switch
                trackColor={{false: 'gray', true: 'teal'}}
                thumbColor="white"
                ios_backgroundColor="gray"
                />
                <Text style={{fontWeight : 'bold' , marginTop : 5}}>Return Date?</Text>
              </View>
              <TouchableOpacity onPress={showDatepicker} style={styles.input}>
                  <Text style={{padding:5,fontWeight:'bold'}}>Return date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimepicker} style={styles.input}>
                  <Text style={{padding:5,fontWeight:'bold'}}>Pickup Time</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimepicker} style={styles.input}>
                  <Text style={{padding:5,fontWeight:'bold'}}>Return Time</Text>
                </TouchableOpacity>
                {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
              <Text style={{alignItems:'center' , fontSize : 22  , marginTop : 10 ,  alignSelf : 'center', fontWeight : 'bold', color : '#0f4192'}}>Driver age</Text>
              <View style={{flexDirection : 'row' , flexWrap : 'wrap' , marginTop : 10, justifyContent : 'space-around'}}>
                <TouchableOpacity style={{padding : 10 ,  backgroundColor : '#e6e9ed' ,borderRadius : 5}}>
                    <Text>18-29</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding : 10 , backgroundColor : '#e6e9ed' ,borderRadius : 5}}>
                    <Text>18-29</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding : 10 ,backgroundColor : '#e6e9ed' ,borderRadius : 5}}>
                    <Text>18-29</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Search</Text>
              </TouchableOpacity>
            </RkCard>
          </View>

          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.goBack()}
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
// }

export default CabBooking;
