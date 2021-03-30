import React from "react";
import { Text, Button } from 'react-native';

function TitleScreen(props) {
  return (
    <React.Fragment>
      <Text h1>SPLASH TITLESCREEN</Text>
      <Button
        title={"Start"}
        onPress={props.onClickingStart}
      />
      {/* <Button onPress={props.onClickingExit}>Exit</Button> */}
    </React.Fragment>
  );
}

export default TitleScreen;
