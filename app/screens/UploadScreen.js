import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import AppText from "../components/AppText";

import * as Progress from "react-native-progress";
import colors from "../config/colors";

import LottieView from "lottie-react-native";

function UploadScreen({ progress = 0, visible = false,onDone }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primaryColor}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animations/loader.json")}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  animation: { width: 150 },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default UploadScreen;
