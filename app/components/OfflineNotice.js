import React from "react";
import { StyleSheet, View } from "react-native";
import   Constants  from "expo-constants";
import colors from "../config/colors";
import AppText from "./AppText";
import {useNetInfo} from '@react-native-community/netinfo'

function OfflineNotice(props) {

    const netInfo = useNetInfo()
    if(netInfo.type !=='unknown'&&netInfo.isInternetReachable===false){
        return (
            <View style={styles.container}>
              <AppText style={styles.text}>                      No Internet Connection</AppText>
            </View>
          );
    }
    return null

  
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    height: 50,
    position: "absolute",
    top:Constants.statusBarHeight,
    zIndex: 1,
    width:'100%',
    justifyContent:"center",
    alignItems:"center",
    elevation:1,
    textAlign:"center",
    
  },
  text:{
      color:colors.white,
  }
});
export default OfflineNotice;
