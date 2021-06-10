import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/wow.webp")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.jpg")} />
        <Text style={styles.tagline}>Wow za</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" />
        <AppButton title="REGISTER" color="secondary"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tagline:{
    fontSize:25,
    fontWeight:'600',
    paddingVertical:20,
    color:colors.white
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer:{
    padding:20,
    width:'100%'
  },  
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc4c64",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
