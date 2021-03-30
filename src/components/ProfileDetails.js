import React from "react";
import {Text, Button} from "react-native";

function ProfileDetails(props) {
  return (
    <React.Fragment>
      <Text>This is where ProfileDetails would go</Text>
      <Button
        title={"Main Menu"}
        onPress={props.onClickingReturnToMainMenu}
      />
    </React.Fragment>
  );
}

export default ProfileDetails;
