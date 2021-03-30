import React from "react";
import {Text, Button} from "react-native";

function Settings(props) {
  return (
    <React.Fragment>
      <Text>This is where settings would go</Text>
      <Button
        title={"Main Menu"}
        onPress={props.onClickingReturnToMainMenu}
      />
    </React.Fragment>
  );
}

export default Settings;
