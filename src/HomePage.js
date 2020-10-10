import React from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  createStackNavigator, 
  createAppContainer,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import Constants from "expo-constants";
import { RkCard, RkAvoidKeyboard } from "react-native-ui-kitten";
import { FontAwesome } from "react-native-vector-icons";
import { scale, scaleVertical } from "./utilities/scale";
import GradientButton from "react-native-gradient-buttons";


const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: scaleVertical(28),
    // paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: "rgb(245, 245, 245)"
  },
  ImageContainer : {
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  imageLogo : {
    height: 100, 
    width: '40%',
    backgroundColor : '#ffb612',
    resizeMode: 'contain',
    borderRadius : 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10,marginVertical:10,marginRight:10,marginLeft:20,
  },
  Image : {
    height:80,padding:10,resizeMode:'contain'
  },
  mainheading : {
    fontSize : 22,
    fontWeight : "bold",
    marginBottom : 10
  },
  header: {
    backgroundColor : '#499c89',
    flexDirection: 'row', textAlign: 'left', fontSize: 15
    // marginBottom: 10,
    // alignItems: "center",
    // justifyContent: "center"
  },
});

class HomePage extends React.PureComponent {
  constructor(props){
    super(props);
  }
    onSubmit = () => {
      this.props.navigation.navigate("CabBooking");
    }
    onHotel = () => {
      this.props.navigation.navigate("HotelBooking");
    }
    onPnr = () => {
      this.props.navigation.navigate("Pnr");
    }

    onflight = () => {
      this.props.navigation.navigate("Flight");
    }

    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  render() {
    return (
      <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}
    >   
          <View style={styles.header}>
            {/* <Image style={{height:40,resizeMode : 'contain',display:'flex',left:-30}} source={require('./images/vector_smart_object.png')}></Image> */}
            <Image source={require('./images/vector_smart_object.png')} style={{width: 70, height: 40, marginLeft:20,borderRadius:70}} />
            <Text style={{ alignSelf: "center" , fontWeight : 'bold' , color : 'white' , fontSize : 16 }}>HOME PAGE</Text>
          </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <Text style={styles.mainheading}>BOOK YOUR FAVOURITE</Text>  
        <View style={styles.ImageContainer}>
          <View style={styles.imageLogo}>
          <TouchableOpacity
          onPress={this.onflight}
          style={styles.imageLogo}>
          <Image style={styles.Image} source={require('./images/aeroplane_logo_black.png')}></Image>
          </TouchableOpacity>
          </View>
          <View style={styles.imageLogo}>
          <TouchableOpacity onPress={this.onHotel} style={styles.imageLogo}>
          <Image style={styles.Image} source={require('./images/hotel_logo_black.png')}></Image>
          </TouchableOpacity>
          </View>
          <View style={styles.imageLogo}>
          <TouchableOpacity onPress={this.onSubmit} style={styles.imageLogo}>
          <Image style={styles.Image} source={require('./images/cab_logo_black.png')}></Image>
          </TouchableOpacity>
          </View>
          <View style={styles.imageLogo}>
          <TouchableOpacity onPress={this.onPnr} style={styles.imageLogo}>
          <Image style={styles.Image} source={require('./images/pnr_logo_black.png')}></Image>
          </TouchableOpacity>
          </View>
           
         </View>
       </View>  
    </RkAvoidKeyboard>
    );
  }
}

export default HomePage;
