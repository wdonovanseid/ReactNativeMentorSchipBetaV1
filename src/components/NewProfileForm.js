import React from "react";
import {Text, Button} from "react-native";

function NewProfileForm(props) {
  return (
    <React.Fragment>
      <Text>This is where NewProfileForm would go</Text>
      <Button
        title={"Main Menu"}
        onPress={props.onClickingReturnToMainMenu}
      />
    </React.Fragment>
  );
}

export default NewProfileForm;
