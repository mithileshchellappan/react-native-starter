import React from "react";
import { View,StyleSheet } from 'react-native'
import LottieView from "lottie-react-native";
function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
<LottieView
      autoplay
      loop
      source={require("../assets/animations/loader.json")}
    />
    </View>
    
  );
}

const styles = StyleSheet.create({
  overlay:{
    height:'100%',
    width:'100%',
    position:'absolute',
    zIndex:1,
    backgroundColor:"white",
    opacity:0.8
  }
})
export default ActivityIndicator;
