import React from "react";
import {Text, Button} from "react-native";

function EditProfileForm(props) {
  return (
    <React.Fragment>
      <Text>This is where EditProfileForm would go</Text>
      <Button
        title={"Main Menu"}
        onPress={props.onClickingReturnToMainMenu}
      />
    </React.Fragment>
  );
}

export default EditProfileForm;
