import React from "react";
import {Text, Button} from "react-native";

function TeamColorQuestionaire(props) {
  return (
    <React.Fragment>
      <Text>This is where TeamColorQuestionaire would go</Text>
      <Button
        title={"Back to Profile"}
        onPress={props.onClickingReturnToProfile}
      />
    </React.Fragment>
  );
}

export default TeamColorQuestionaire;
