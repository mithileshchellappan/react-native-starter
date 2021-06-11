import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;