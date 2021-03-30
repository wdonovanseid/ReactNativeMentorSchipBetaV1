import * as c from '../actions/ActionTypes';

export default (state = "titleScreen", action) => {
  switch (action.type) {
    case c.SHOW_LOGIN_FORM:
      const newState = "loginForm";
      return newState;
    case c.SHOW_NEW_PROFILE_FORM:
      const newState2 = "newProfile";
      return newState2;
    case c.SHOW_PROFILE_DETAILS:
      const newState3 = "profileDetails";
      return newState3;
    case c.SHOW_EDIT_PROFILE_FORM:
      const newState4 = "editProfile";
      return newState4;
    case c.SHOW_SETTINGS_PAGE:
      const newState5 = "settings";
      return newState5;
    case c.SHOW_TEAM_COLOR_QUESTIONAIRE:
      const newState6 = "teamColorQuestionaire";
      return newState6;
    case c.SHOW_TITLE_SCREEN:
      const newState7 = "titleScreen";
      return newState7;
    case c.SHOW_MAIN_GAME:
      const newState8 = "mainGame";
      return newState8;
    case c.SHOW_SCHOLARSCHIP_FORM:
      const newState9 = "scholarschipForm";
      return newState9;
    case c.SHOW_MAIN_MENU:
      const newState10 = "mainMenu";
      return newState10;
    default:
      return state;
    }
};
