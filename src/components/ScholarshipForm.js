import React from "react";
import {Text, Button} from "react-native";

function ScholarschipForm(props) {
  return (
    <React.Fragment>
      <Text>This is where ScholarschipForm would go</Text>
      <Button
        title={"Main Menu"}
        onPress={props.onClickingReturnToMainMenu}
      />
    </React.Fragment>
  );
}

export default ScholarschipForm;
