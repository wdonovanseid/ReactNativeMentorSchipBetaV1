import React from "react";
import { Text, Button } from 'react-native';

function MainGame(props) {
  return (
    <React.Fragment>
      <Text h1>MainGame</Text>
      
      <Button
        title={"Main Menu"}
        onPress={props.onClickingReturnToMainMenu}
      />
    </React.Fragment>
  );
}

export default MainGame;
