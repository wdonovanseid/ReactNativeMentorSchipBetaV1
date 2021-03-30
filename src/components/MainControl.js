import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from '../actions/index.js';
import NewProfileForm from './NewProfileForm';
import ProfileDetail from './ProfileDetails';
import EditProfileForm from './EditProfileForm';
import TeamColorQuestionaire from './TeamColorQuestionaire';
import LoginPage from './LoginPage.js';
import MainGame from './MainGame.js';
import MainMenu from './MainMenu.js';
import ScholarshipForm from './ScholarshipForm.js';
import SettingsPage from './SettingsPage.js';
import TitleScreen from './TitleScreen.js';

class MainControl extends React.Component {

  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: "",
      accountType: "Mentor"
    };
    // this.handleSomething = this.handleSomething.bind(this);
  }

  handleShowLoginForm = () => {
    this.props.dispatch(a.showLoginForm);
  }

  handleShowStartScreen = () => {
    this.props.dispatch(a.showTitleScreen);
  }

  handleShowMainGame = () => {
    this.props.dispatch(a.showMainGame);
  }

  handleShowNewProfileForm = () => {
    this.props.dispatch(a.showNewProfileForm);
  }

  handleShowProfileDetails = () => {
    this.props.dispatch(a.showProfileDetails);
  }

  handleShowEditProfileForm = () => {
    this.props.dispatch(a.showEditProfileForm);
  }

  handleShowProfileDetails = () => {
    this.props.dispatch(a.showProfileDetails);
  }

  handleShowSettingsPage = () => {
    this.props.dispatch(a.showSettingsPage);
  }

  handleShowScholarschipForm = () => {
    this.props.dispatch(a.showScholarschipForm);
  }

  handleShowTeamColorQuestionaire = () => {
    this.props.dispatch(a.showTeamColorQuestionaire);
  }

  handleShowMainMenu = () => {
    this.props.dispatch(a.showMainMenu);
  }

  handleLogin = () => {
    // // check to see if userEmail and userPassword match in firestore
    // // if they match, pull data from firestore and put in userInfo
    // // if not, do some alert thingy
    // this.setState({userInfo: {}})
    // if (e.target.userEmail.value && e.target.userPassword.value) {
    //   this.setState({
    //     currentPage: "MAIN_MENU",
    //     userInfo: {
    //       userEmail: e.target.userEmail.value,
    //       userPassword: e.target.userPassword.value,
    //       userAccountType: e.target.userAccountType.value
    //     }
    //   });
    // } else {
    //   alert("Nothing found matching");
    // }

    // this.props.dispatch(a.loggedUser())
    this.props.dispatch(a.showMainMenu);
  }

  render() {
    let currentlyVisibleScreen = null;
    if (this.props.currentPage === "profileDetail") {
      currentlyVisibleScreen =
      <ProfileDetail
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "newProfile") {
      currentlyVisibleScreen =
      <NewProfileForm
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "editProfile") {
      currentlyVisibleScreen =
      <EditProfileForm
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "teamColorQuestionaire") {
      currentlyVisibleScreen =
      <TeamColorQuestionaire
        onClickingReturnToProfile={this.handleShowProfileDetails}
      />
    } else if (this.props.currentPage === "scholarschipForm") {
      currentlyVisibleScreen =
      <ScholarshipForm
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "settings") {
      currentlyVisibleScreen =
      <SettingsPage
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "mainGame") {
      currentlyVisibleScreen =
      <MainGame
        onClickingReturnToMainMenu={this.handleShowMainMenu}
      />
    } else if (this.props.currentPage === "mainMenu") {
      currentlyVisibleScreen =
      <MainMenu
        userInfo = {this.state}
        onClickingPlayGame = {this.handleShowMainGame}
        onClickingCreateScholarschip = {this.handleShowScholarschipForm}
        onClickingProfile = {this.handleShowProfileDetails}
        onClickingCreateProfile = {this.handleShowNewProfileForm}
        onClickingSettings = {this.handleShowSettingsPage}
        onClickingLogOff = {this.handleShowLoginForm}
      />
    } else if (this.props.currentPage === "loginForm") {
      currentlyVisibleScreen =
      <LoginPage
        userP={this.state.userPassword}
        userE={this.state.userEmail}
        onLoginFormSubmission={this.handleLogin}
        onClickingReturnToStart={this.handleShowStartScreen}
      />
    } else {
      currentlyVisibleScreen =
      <TitleScreen
        onClickingStart={this.handleShowLoginForm}
        // onClickingExit={}
      />
    }
    return (
        <React.Fragment>
          <View style={styles.container}>
            {currentlyVisibleScreen}
            <StatusBar style="auto" />
          </View>
        </React.Fragment>
    );
  }
}

MainControl.propTypes = {
  currentPage: PropTypes.string,
  loggedUser: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    loggedUser: state.loggedUser
  }
}

MainControl = connect(mapStateToProps)(MainControl);

export default MainControl;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});