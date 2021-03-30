import * as c from './ActionTypes';

export const showLoginForm = ({
  type: c.SHOW_LOGIN_FORM
});

export const showTitleScreen = ({
  type: c.SHOW_TITLE_SCREEN
});

export const showMainGame = ({
  type: c.SHOW_MAIN_GAME
});

export const showNewProfileForm = ({
  type: c.SHOW_NEW_PROFILE_FORM
});

export const showProfileDetails = ({
  type: c.SHOW_PROFILE_DETAILS
});

export const showEditProfileForm = ({
  type: c.SHOW_EDIT_PROFILE_FORM
});

export const showSettingsPage = ({
  type: c.SHOW_SETTINGS_PAGE
});

export const showScholarschipForm = ({
  type: c.SHOW_SCHOLARSCHIP_FORM
});

export const showTeamColorQuestionaire = ({
  type: c.SHOW_TEAM_COLOR_QUESTIONAIRE
});

export const showMainMenu = ({
  type: c.SHOW_MAIN_MENU
});

export const loggedUser = user => ({
  type: c.LOGGED_USER,
  loggedUser: user
});

export const noUserLogged = ({
  type: c.NO_USER_LOGGED
});
