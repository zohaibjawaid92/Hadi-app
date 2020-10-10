import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "./src/SignIn";
import SocialAuth from "./src/SocialAuth";
import SignUp from "./src/SignUp";
import ForgotPassword from "./src/ForgotPassword";
import HomePage from './src/HomePage';
import CabBooking from './src/CabBooking'
import HotelBooking from './src/HotelBooking';
import Pnr from './src/Pnr';
import Flight from './src/flights' ;


const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    ForgotPassword,
    SocialAuth,
    HomePage,
    CabBooking,
    HotelBooking,
    Pnr,
    Flight
  },
  {
    headerMode: "none"
  }
);

const AppStack = createStackNavigator(
  {
    HomePage
  },
  {
    headerMode: "none"
  }
);

const App = createAppContainer(AuthStack);

export default App;
