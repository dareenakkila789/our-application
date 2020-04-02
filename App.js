import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from "react-navigation";

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import login from "./components/login";
import signUp from "./components/signUp";
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8yRaA5V-hrWjm7sl-8zSF-DJ2ZkE2OFU",
    authDomain: "exchange-experiences.firebaseapp.com",
    databaseURL: "https://exchange-experiences.firebaseio.com",
    projectId: "exchange-experiences",
    storageBucket: "exchange-experiences.appspot.com",
    messagingSenderId: "318757269452",
    appId: "1:318757269452:web:e42dfac2463d95448db769",
    measurementId: "G-4P8152PSVS"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const MainNavigator = createBottomTabNavigator({
    LogIn : {screen:login},
    SignUp: {screen:signUp},
});

const App = createAppContainer(MainNavigator);

export default App;
