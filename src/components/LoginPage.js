import React from "react";
import { Text, Button, TextInput } from 'react-native';

function LoginPage(props) {
  return (
    <React.Fragment>
      <Text h1>LoginPage</Text>
      <TextInput
        placeholder="Email"
        maxLength={20}
        onChangeText={props.onChangeEmail}
      />
      <TextInput
        placeholder="Password"
        maxLength={20}
        onChangeText={props.onChangePassword}
      />
      <Button
        title={"Login"}
        onPress={props.onLoginFormSubmission}
      />
      <Button
        title={"Return to Title"}
        onPress={props.onClickingReturnToStart}
      />
    </React.Fragment>
  );
}

export default LoginPage;
