import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const auth = useAuth();
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const [loginFailed, setLoginFailed] = useState(false);
  const [error, setError] = useState("Something went wrong try again!");
  const handleSubmit = async ({ name, email, password }) => {
    const result = await registerApi.request(name, email, password);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      }
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    const { data: authToken } = await loginApi.request(email, password);

    auth.logIn(authToken);
  };

  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          icon="account"
          autoCapitalize="sentences"
          keyboardType="default"
        />
        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />
        <ErrorMessage error={error} visible={loginFailed} />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
    </>
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

export default RegisterScreen;
