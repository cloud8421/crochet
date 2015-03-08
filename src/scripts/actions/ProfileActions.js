import AppDispatcher from "../dispatcher/AppDispatcher";
import ProfileActionTypes from "../constants/ProfileConstants";

const Actions = {
  setUser: function(userData) {
    AppDispatcher.handleViewAction({
      type: ProfileActionTypes.SET_USER,
      userData: userData
    });
  }
}

export default Actions;
