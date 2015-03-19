import AppDispatcher from "../dispatcher/AppDispatcher";
import ProfileActionTypes from "../constants/ProfileConstants";

const Actions = {
  setUser: function(userData) {
    AppDispatcher.handleViewAction({
      type: ProfileActionTypes.SET_USER,
      userData: userData
    });
  },
  unsetUser: function() {
    AppDispatcher.handleViewAction({
      type: ProfileActionTypes.UNSET_USER
    });
  }
}

export default Actions;
