import React from "react";
import { Text, Button } from 'react-native';

function MainMenu(props) {
  return (
    <React.Fragment>
      <Text h1>MainMenu</Text>
      <Button
        title={"Play Game"}
        onPress={props.onClickingPlayGame}
      />
      {props.userInfo.accountType === "Mentor" &&
      <Button
        title={"Create Scholarschip"}
        onPress={props.onClickingCreateScholarschip}
      />}
      {props.userInfo.profile ?
      <Button
        title={"Profile"}
        onPress={props.onClickingProfile}
      />:
      <Button
        title={"Create your Profile"}
        onPress={props.onClickingCreateProfile}
      />}
      <Button
        title={"Settings"}
        onPress={props.onClickingSettings}
      />
      <Button
        title={"Log Off"}
        onPress={props.onClickingLogOff}
      />
    </React.Fragment>
  );
}

export default MainMenu;
